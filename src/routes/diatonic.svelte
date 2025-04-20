<script>
    import { sleep } from "../helpers.js";
    import { keyMap } from "../data.js";
    import {
        notes,
        layouts,
        bassKeyMap,
        getLayout,
        getBassLayout,
        getButtonIdMap,
        rows,
        bassRows,
        rowTones,
        toggleBellows,
        getScales,
        swingOptions,
    } from "../diatonic-data.js";
    import { analysis } from "../diatonic-analysis.js";

    // Audio
    const audio = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = audio.createGain();
    gainNode.gain.value = 0.1;
    gainNode.connect(audio.destination);

    // State
    let swing = 23.5; // sounds best to me in this oscillator https://thesession.org/discussions/16681
    let direction = "pull";
    let tuning = Object.keys(rowTones)[0];
    let activeButtonIdMap = {};

    let scalesKey = "C";
    let layout = getLayout(tuning);
    let bassLayout = getBassLayout(tuning);
    let buttonIdMap = getButtonIdMap(layout, bassLayout);

    function handleChangeTuning(e) {
        const newTuning = e.target.value;
        layout = getLayout(newTuning);
        bassLayout = getBassLayout(newTuning);
        buttonIdMap = getButtonIdMap(layout, bassLayout);

        tuning = newTuning; // trigger rerender from #key
    }

    function handleChangeSwing(e) {
        swing = e.target.value;
    }

    function handleChangeSelectedKey(e) {
        scalesKey = e.target.value;
    }

    // Handlers
    function playTone(id) {
        console.log("playing ", id);
        const { frequency } = buttonIdMap[id];
        let oscillator;

        if (Array.isArray(frequency)) {
            oscillator = frequency.map((hz) => {
                const oscillator = audio.createOscillator();
                oscillator.type = "sawtooth";
                oscillator.connect(gainNode);
                oscillator.frequency.value = hz;
                oscillator.start();

                return oscillator;
            });
        } else {
            oscillator = audio.createOscillator();
            oscillator.type = "sawtooth";
            oscillator.connect(gainNode);
            oscillator.frequency.value = frequency;
            oscillator.start();

            const swingOscillator = audio.createOscillator();
            swingOscillator.type = "sawtooth";
            swingOscillator.connect(gainNode);
            swingOscillator.frequency.value =
                frequency * (0.010594630943592953 * swing);
            swingOscillator.start();

            oscillator = [oscillator, swingOscillator];
        }

        return { oscillator };
    }

    function stopTone(id) {
        const { oscillator } = activeButtonIdMap[id];

        if (Array.isArray(oscillator)) {
            oscillator.forEach((osc) => osc?.stop());
        } else {
            oscillator?.stop();
        }
    }

    function handleToggleBellows(newDirection) {
        if (direction !== newDirection) {
            direction = newDirection;

            const newActiveButtonIdMap = {};

            // When switching the bellows
            for (const [keyId, keyValues] of Object.entries(
                activeButtonIdMap,
            )) {
                // Remove existing value

                if (Array.isArray(keyValues.oscillator)) {
                    keyValues.oscillator.forEach((hz) => hz?.stop());
                } else {
                    keyValues.oscillator?.stop();
                }

                // Must be reassigned in Svelte
                delete newActiveButtonIdMap[keyId];

                const isBass = keyId.includes("bass");
                // Add the reverse valueA
                const reverseKeyId = `${keyId.split("-")[0]}-${keyId.split("-")[1]}-${newDirection}${
                    isBass ? "-bass" : ""
                }`;
                const { oscillator } = playTone(reverseKeyId);

                newActiveButtonIdMap[reverseKeyId] = {
                    oscillator,
                    ...buttonIdMap[reverseKeyId],
                };
            }
            activeButtonIdMap = newActiveButtonIdMap;
        }
    }

    function updateActiveButtonMap(id) {
        if (!activeButtonIdMap[id]) {
            const { oscillator } = playTone(id);

            activeButtonIdMap[id] = { oscillator, ...buttonIdMap[id] };
        }
    }

    function handleKeyPressNote(e) {
        const key = `${e.key}`.toLowerCase() || e.key;

        if (key === toggleBellows) {
            handleToggleBellows("push");
            return;
        }

        const buttonMapData = keyMap[key];
        if (buttonMapData) {
            const { row, column } = buttonMapData;
            const id = `${row}-${column}-${direction}`;

            return updateActiveButtonMap(id);
        }

        const bassButtonMapData = bassKeyMap[key];
        if (bassButtonMapData) {
            const { row, column } = bassButtonMapData;
            const id = `${row}-${column}-${direction}-bass`;

            return updateActiveButtonMap(id);
        }
    }

    function handleKeyUpNote(e) {
        const key = `${e.key}`.toLowerCase() || e.key;

        if (key === toggleBellows) {
            handleToggleBellows("pull");
            return;
        }

        const buttonMapData = keyMap[key];

        if (buttonMapData) {
            const { row, column } = buttonMapData;
            const id = `${row}-${column}-${direction}`;

            if (activeButtonIdMap[id]) {
                stopTone(id);
                // Must be reassigned in Svelte
                const newActiveButtonIdMap = { ...activeButtonIdMap };
                delete newActiveButtonIdMap[id];
                activeButtonIdMap = newActiveButtonIdMap;
            }
        }

        const bassButtonMapData = bassKeyMap[key];

        if (bassButtonMapData) {
            const { row, column } = bassButtonMapData;
            const id = `${row}-${column}-${direction}-bass`;

            if (activeButtonIdMap[id]) {
                stopTone(id);
                // Must be reassigned in Svelte
                const newActiveButtonIdMap = { ...activeButtonIdMap };
                delete newActiveButtonIdMap[id];
                activeButtonIdMap = newActiveButtonIdMap;
            }
        }
    }

    const handleClickNote = (id) => {
        updateActiveButtonMap(id);
    };

    const handleClearAllNotes = () => {
        for (const [keyId, keyValues] of Object.entries(activeButtonIdMap)) {
            // Remove existing value
            if (Array.isArray(keyValues.oscillator)) {
                keyValues.oscillator.forEach((hz) => hz?.stop());
            } else {
                keyValues.oscillator?.stop();
            }
        }
        activeButtonIdMap = {};
    };

    async function playNotesInScale(idSet) {
        handleClearAllNotes();

        for (const id of idSet) {
            if (id.includes("pull")) handleToggleBellows("pull");
            else handleToggleBellows("push");
            if (!activeButtonIdMap[id]) {
                const { oscillator } = playTone(id);

                activeButtonIdMap[id] = { oscillator, ...buttonIdMap[id] };
            }
        }

        await sleep(300);

        for (const id of idSet) {
            stopTone(id);
            // Must be reassigned in Svelte
            const newActiveButtonIdMap = { ...activeButtonIdMap };
            delete newActiveButtonIdMap[id];
            activeButtonIdMap = newActiveButtonIdMap;
        }
    }

    const playScale = (tuning, rootNote, scaleType) => async () => {
        const scales = getScales(tuning);
        const scale = scales[rootNote][scaleType];
        const scaleBackAndForth = [...scale, ...scale.reverse()];

        for (const idSet of scaleBackAndForth) {
            await playNotesInScale(idSet);
        }
    };
</script>

<svelte:body
    on:keypress={handleKeyPressNote}
    on:keyup={handleKeyUpNote}
    on:mouseup={handleClearAllNotes}
/>

<main>
    <div class="mobile-only">
        <div class="banner">This app is only available on a desktop!</div>
    </div>

    {#key tuning}
        <div class="layout">
            <div class="keyboard-side">
                <div class="desktop-only accordion-layout">
                    {#each rows as row}
                        <div class="row {row}">
                            {#each layout[row].filter( ({ id }) => id.includes(direction), ) as button}
                                <div
                                    class={`circle ${activeButtonIdMap[button.id] ? "active" : ""} ${direction} `}
                                    id={button.id}
                                    on:mousedown={handleClickNote(button.id)}
                                >
                                    {button.name}
                                </div>
                            {/each}
                            <h4>{rowTones[tuning][row]}</h4>
                        </div>
                    {/each}
                </div>
            </div>

            <div class="information-side">
                <div class="information">
                    <header class="header">
                        <h1 class="title">Diatonic Accordion</h1>
                        <div class="subtitle">
                            Play the diatonic button accordion with your
                            computer keyboard
                        </div>
                    </header>
                    <div>
                        <h3>How to use</h3>
                        <ul>
                            <li>
                                Each key on the keyboard corresponds to a button
                                on the accordion.
                            </li>
                            <li>
                                Hold down <kbd>q</kbd> to
                                <span class="push-text">push</span>
                                the bellows. Default is
                                <span class="pull-text">pull</span>.
                            </li>
                            <li>
                                The treble side buttons begin with <kbd>z</kbd>,
                                <kbd>a</kbd>, and
                                <kbd>w</kbd>
                            </li>
                            <li>
                                The twelve bass buttons use the number row from <kbd
                                    >1</kbd
                                >
                                to
                                <kbd>=</kbd>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="info-row">
                            <h3>Tuning</h3>
                            <select on:change={handleChangeTuning}>
                                {#each Object.keys(rowTones) as key}
                                    {#if tuning == key}
                                        <option value={key} selected
                                            >{key}</option
                                        >
                                    {:else}
                                        <option value={key}>{key}</option>
                                    {/if}
                                {/each}
                            </select>
                        </div>
                        <div class="info-row">
                            <h3>Swing</h3>
                            <select on:change={handleChangeSwing}>
                                {#each Object.entries(swingOptions) as [name, value]}
                                    {#if swing == value}
                                        <option {value} selected>{name}</option>
                                    {:else}
                                        <option {value}>{name}</option>
                                    {/if}
                                {/each}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Scales</h3>
                        <div class="scales scale">
                            <select on:change={handleChangeSelectedKey}>
                                {#each notes as note}
                                    {#if scalesKey == note}
                                        <option {note} selected>{note}</option>
                                    {:else}
                                        <option {note}>{note}</option>
                                    {/if}
                                {/each}
                            </select>
                            <button
                                on:click={playScale(tuning, scalesKey, "major")}
                                >{scalesKey}</button
                            >
                            <button
                                on:click={playScale(
                                    tuning,
                                    scalesKey,
                                    "majorThirds",
                                )}>{scalesKey} 3rds</button
                            >
                            <button
                                on:click={playScale(tuning, scalesKey, "minor")}
                                >{scalesKey}m</button
                            >
                            <button
                                on:click={playScale(
                                    tuning,
                                    scalesKey,
                                    "minorThirds",
                                )}>{scalesKey}m 3rds</button
                            >
                        </div>
                    </div>
                    <div>
                        <div class="currently-playing">
                            {#each Object.entries(activeButtonIdMap) as [id, value]}
                                <div class="flex col">
                                    <div class="circle note">
                                        {value.name}
                                    </div>
                                    <div>
                                        <small>
                                            Row: {id.split("-")[0]}
                                            <br />
                                            Col: {id.split("-")[1]}
                                        </small>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <!-- <pre>{JSON.stringify(analysis, null, 2)}</pre> -->
                    </div>
                </div>
            </div>

            <div class="bass-side">
                <div class="desktop-only accordion-layout">
                    {#each bassRows as row}
                        <div class="row {row}">
                            {#each bassLayout[row].filter( ({ id }) => id.includes(direction), ) as button}
                                <div
                                    class={`circle ${activeButtonIdMap[button.id] ? "active" : ""} ${direction} `}
                                    id={button.id}
                                    on:mousedown={handleClickNote(button.id)}
                                >
                                    {button.name}
                                </div>
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/key}
</main>
