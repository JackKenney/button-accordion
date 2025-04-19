import { tone } from './data.js'

export const layouts = {
    'V3': [
        [], // blank for 2 row
        [
            ['C.3', 'D.3'],
            ['E.3', 'Gb.3'],
            ['Ab.3', 'Bb.3'],
            ['C.4', 'D.4'],
            ['E.4', 'Gb.4'],
            ['Ab.4', 'Bb.4'],
            ['C.5', 'D.5'],
            ['E.5', 'Gb.5'],
            ['Ab.5', 'Bb.5'],
            ['C.6', 'D.6'],
            ['E.6', 'Gb.6'],
        ], [
            ['Eb.3', 'F.3'],
            ['G.3', 'A.3'],
            ['B.3', 'Db.4'],
            ['Eb.4', 'F.4'],
            ['G.4', 'A.4'],
            ['B.4', 'Db.5'],
            ['Eb.5', 'F.5'],
            ['G.5', 'A.5'],
            ['B.5', 'Db.6'],
            ['Eb.6', 'F.6'],
        ],
    ],
    'V2': [
        [], // blank for 2 row
        [
            ['D.3', 'C.3'],
            ['Gb.3', 'E.3'],
            ['Bb.3', 'Ab.3'],
            ['D.4', 'C.4'],
            ['Gb.4', 'E.4'],
            ['Bb.4', 'Ab.4'],
            ['D.5', 'C.5'],
            ['Gb.5', 'E.5'],
            ['Bb.5', 'Ab.5'],
            ['D.6', 'C.6'],
            ['Gb.6', 'E.6'],
        ], [
            ['F.3', 'Eb.3'],
            ['A.3', 'G.3'],
            ['Db.4', 'B.3'],
            ['F.4', 'Eb.4'],
            ['A.4', 'G.4'],
            ['Db.5', 'B.4'],
            ['F.5', 'Eb.5'],
            ['A.5', 'G.5'],
            ['Db.6', 'B.5'],
            ['F.6', 'Eb.6'],
        ],
    ],
    'B/C': [
        [], // blank for 2 row
        [
            ['Ab.3', 'Eb.3'],
            ['Bb.3', 'Gb.3'],
            ['Db.4', 'B.3'],
            ['E.4', 'Eb.4'],
            ['Ab.4', 'Gb.4'],
            ['Bb.4', 'B.4'],
            ['Db.5', 'Eb.5'],
            ['E.5', 'Gb.5'],
            ['Ab.5', 'B.5'],
            ['Bb.5', 'Eb.6'],
            ['Db.6', 'Gb.6'],
        ], [
            ['A.3', 'E.3'],
            ['B.3', 'G.3'],
            ['D.4', 'C.4'],
            ['F.4', 'E.4'],
            ['A.4', 'G.4'],
            ['B.4', 'C.5'],
            ['D.5', 'E.5'],
            ['F.5', 'G.5'],
            ['A.5', 'C.6'],
            ['B.5', 'E.6'],
        ],
    ],
}

export const bassLayouts = {
    'B/C': [[
        [['D.3', 'Gb.3', 'A.3'], ['G.3', 'B.3', 'E.4']],
        [['D.2'], ['G.2']],
        [['G.3', 'B.3', 'E.4'], ['C.3', 'E.3', 'G.3']],
        [['G.2'], ['C.2']],
    ],
    [
        [['A.3', 'Db.4', 'E.4'], ['E.3', 'Ab.3', 'B.4']],
        [['A.2'], ['E.2']],
        [['F.3', 'A.3', 'C.4'], ['C.3', 'E.3', 'G.3']],
        [['F.2'], ['C.2']],
    ]],
    'V2': [[], []],
    'V3': [[
        [['G.2'], ['D.2']],
        [['E.2'], ['A.2']],
        [['B.2'], ['Gb.2']],
    ],
    [
        [['C.2'], ['F.2']],
        [['Eb.2'], ['Bb.2']],
        [['Ab.2'], ['Db.2']]
    ]]
}


export const getLayout = (tuning) => {
    const arrangement = layouts[tuning]
    const [one, two, three] = getRows(arrangement)

    return { one, two, three }
}

export const getRows = (arrangement) => arrangement.map((row, r) => (
    row.map((button, b) => {
        const [pull, push] = button;
        const [pull_note, pull_octave] = pull.split('.')
        const [push_note, push_octave] = push.split('.')

        return [
            { id: `${r + 1}-${b + 1}-pull`, name: pull_note, frequency: tone[pull_note][parseInt(pull_octave)] },
            { id: `${r + 1}-${b + 1}-push`, name: push_note, frequency: tone[push_note][parseInt(push_octave)] },
        ]
    }).flat()
))

export const getBassLayout = (tuning) => {
    const arrangement = bassLayouts[tuning]
    const [one, two, three] = getBassRows(arrangement)

    return { one, two, three }
}

export const getBassRows = (arrangement) => arrangement.map((row, r) => (
    row.map((button, b) => {
        const [pulls, pushes] = button;

        const pulls_split = pulls.map((pull) => pull.split('.'))
        const pull_note = pulls_split.map(([name,]) => name).join('')
        const pull_tones = pulls_split.map(([name, octave]) => tone[name][parseInt(octave)])

        const pushes_split = pushes.map((pull) => pull.split('.'))
        const push_note = pushes_split.map(([name,]) => name).join('')
        const push_tones = pushes_split.map(([name, octave]) => tone[name][parseInt(octave)])

        const pull = { id: `${r + 1}-${b + 1}-pull-bass`, name: pull_note, frequency: pull_tones }
        const push = { id: `${r + 1}-${b + 1}-push-bass`, name: push_note, frequency: push_tones }

        return [pull, push]
    }).flat()
))

// Scales
export const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
const findScale = (tuning, note) => {
    const scale = [];
    const intervals = [0, 2, 2, 1, 2, 2, 2, 1]
    const original_idx = notes.indexOf(note)
    let last = original_idx
    let octave = 4
    intervals.forEach((interval) => {
        if ((last + interval) % notes.length < original_idx && last + interval >= notes.length)
            octave += 1
        last = last + interval
        const find = notes[last % notes.length] // find next note name
        let found = false;
        layouts[tuning].forEach((row, r) => {
            row.forEach(([pull, push], b) => {
                if (!found && pull == `${find}.${octave}`) {
                    scale.push([`${r + 1}-${b + 1}-pull`])
                    found = true
                }
                if (!found && push == `${find}.${octave}`) {
                    scale.push([`${r + 1}-${b + 1}-push`])
                    found = true
                }
            })
        })
    })
    return scale;
}

export const getScales = (tuning) => (
    notes.reduce((carry, note) => {
        carry[note] = { notes: findScale(tuning, note) }
        return carry
    }, {})
)


export const scales_old = {
    F: {
        notes: [
            ['3-3-pull'],
            ['1-6-pull'],
            ['2-6-pull'],
            ['1-7-pull'],
            ['2-7-pull'],
            ['3-6-pull'],
            ['1-9-pull'],
            ['3-7-pull'],
        ],
        thirds: [
            ['2-6-pull', '3-3-pull'],
            ['1-6-pull', '1-7-pull'],
            ['2-6-pull', '2-7-pull'],
            ['1-7-pull', '1-8-pull'],
            ['1-9-pull', '2-7-pull'],
            ['3-7-pull', '3-6-pull'],
            ['1-9-pull', '1-10-pull'],
            ['2-10-pull', '3-7-pull'],
        ],
    },
    Bb: {
        notes: [
            ['1-3-pull'],
            ['2-3-pull'],
            ['3-2-pull'],
            ['2-4-pull'],
            ['3-3-pull'],
            ['1-6-pull'],
            ['2-6-pull'],
            ['1-7-pull'],
        ],
        thirds: [
            ['1-3-pull', '1-4-pull'],
            ['2-3-pull', '2-4-pull'],
            ['3-2-pull', '3-3-pull'],
            ['2-4-pull', '2-5-pull'],
            ['3-3-pull', '2-6-pull'],
            ['1-6-pull', '1-7-pull'],
            ['2-6-pull', '2-7-pull'],
            ['1-7-pull', '1-8-pull'],
        ],
    },
    Eb: {
        notes: [
            ['2-4-pull'],
            ['3-3-pull'],
            ['2-5-pull'],
            ['3-4-pull'],
            ['1-7-pull'],
            ['2-7-pull'],
            ['3-6-pull'],
            ['2-8-pull'],
        ],
        thirds: [
            ['2-5-pull', '2-4-pull'],
            ['3-3-pull', '3-4-pull'],
            ['2-5-pull', '1-7-pull'],
            ['3-4-pull', '3-5-pull'],
            ['1-7-pull', '1-8-pull'],
            ['2-7-pull', '2-8-pull'],
            ['3-6-pull', '3-7-pull'],
            ['2-8-pull', '2-9-pull'],
        ],
    },
}

export const getButtonIdMap = (layout, bassLayout) => {
    const { one, two, three } = layout;
    return [...one, ...two, ...three, ...bassLayout.one, ...bassLayout.two].reduce(
        (acc, value) => {
            return { ...acc, [value.id]: value }
        },
        {}
    )
}

export const bassKeyMap = {
    1: { row: 1, column: 1 },
    2: { row: 2, column: 1 },
    3: { row: 1, column: 2 },
    4: { row: 2, column: 2 },
    5: { row: 1, column: 3 },
    6: { row: 2, column: 3 },
    7: { row: 1, column: 4 },
    8: { row: 2, column: 4 },
    9: { row: 1, column: 5 },
    0: { row: 2, column: 5 },
    '-': { row: 1, column: 6 },
    '=': { row: 2, column: 6 },
}

export const rowMap = { 2: 'two', 3: 'three' }
export const bassRowMap = { 1: 'one', 2: 'two' }
export const rowTones = {
    'B/C': { one: '', two: 'B', three: 'C' },
    'V3': { one: '', two: 'outer', three: 'inner' },
    'V2': { one: '', two: 'outer', three: 'inner' },
}

export const rows = Object.values(rowMap)
export const bassRows = Object.values(bassRowMap)
export const toggleBellows = 'q'
