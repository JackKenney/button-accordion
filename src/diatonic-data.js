import { tone } from './data.js'

export const swingOptions = {
    "Dry 0": 0,
    "Giusto ± 5": 5,
    "American ± 10": 10,
    "Celeste ± 12": 12,
    "German ± 14": 14,
    "Italian ± 16": 16,
    "French ± 20": 20,
    "Scottish ± 23.5": 23.5,
    "Irish ± 26": 26,
}

export const layouts = {
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
    'C#/D': [
        [], // blank for 2 row
        [
            ['Bb.2', 'F.3'],
            ['C.3', 'Ab.2'],
            ['Eb.3', 'Db.3'],
            ['Gb.3', 'F.3'],
            ['Bb.4', 'Ab.3'],
            ['C.4', 'Db.4'],
            ['Eb.4', 'F.4'],
            ['Gb.4', 'Ab.4'],
            ['Bb.4', 'Db.5'],
            ['C.5', 'F.5'],
            ['Eb.5', 'Ab.5'],
        ], [
            ['C.3', 'Gb.3'],
            ['Db.3', 'A.3'],
            ['E.4', 'D.4'],
            ['G.4', 'Gb.4'],
            ['B.4', 'A.4'],
            ['Db.5', 'D.5'],
            ['E.5', 'Gb.5'],
            ['G.5', 'A.5'],
            ['B.5', 'D.6'],
            ['Db.5', 'Gb.6'],
        ],
    ],
    'V0': [ // semitone push/pull, only covers like 1 octave really well
        [], // blank for 2 row
        [
            ['Ab.3', 'A.3'],
            ['Bb.3', 'B.3'],
            ['C.4', 'Db.4'],
            ['D.4', 'Eb.4'],
            ['E.4', 'F.4'],
            ['Gb.4', 'G.4'],
            ['Ab.4', 'A.4'],
            ['Bb.4', 'B.4'],
            ['C.5', 'Db.5'],
            ['D.5', 'Eb.5'],
            ['E.5', 'F.5'],
        ], [
            ['A.3', 'Bb.3'],
            ['B.3', 'C.4'],
            ['Db.4', 'D.4'],
            ['Eb.4', 'E.4'],
            ['F.4', 'Gb.4'],
            ['G.4', 'Ab.4'],
            ['A.4', 'Bb.4'],
            ['B.4', 'C.5'],
            ['Db.5', 'E.5'],
            ['Eb.6', 'F.5'],
        ],
    ],
    'V1': [ // whole steps B push, E push
        [], // blank for 2 row
        [
            ['Db.3', 'B.3'],
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
        ], [
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
        ],
    ],
    'V2': [ // whole steps C push, Eb push,
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
    'V3': [ // whole steps, D push, F push
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
    'V4': [ // whole steps, D push, Eb push
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
    'C#/D': [[
        [['E.3', 'Ab.3', 'B.4'], ['A.3', 'Db.3', 'E.4']],
        [['E.2'], ['A.2']],
        [['A.3', 'Db.3', 'E.4'], ['D.3', 'Gb.3', 'A.3']],
        [['A.2'], ['D.2']],
    ],
    [
        [['B.3', 'Eb.4', 'Gb.4'], ['Gb.3', 'Bb.3', 'Db.4']],
        [['B.2'], ['Gb.2']],
        [['G.3', 'C.3', 'E.4'], ['E.3', 'Ab.3', 'B.4']],
        [['G.2'], ['E.2']],
    ]],
    'V1': [[], []],
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

export const getRows = (arrangement) => arrangement ? arrangement.map((row, r) => (
    row.map((button, b) => {
        const [pull, push] = button;
        const [pull_note, pull_octave] = pull.split('.')
        const [push_note, push_octave] = push.split('.')

        return [
            { id: `${r + 1}-${b + 1}-pull`, name: pull_note, frequency: tone[pull_note][parseInt(pull_octave)] },
            { id: `${r + 1}-${b + 1}-push`, name: push_note, frequency: tone[push_note][parseInt(push_octave)] },
        ]
    }).flat()
)) : [[], [], []]

export const getBassLayout = (tuning) => {
    const arrangement = bassLayouts[tuning]
    const [one, two, three] = getBassRows(arrangement)

    return { one, two, three }
}

export const getBassRows = (arrangement) => arrangement ? arrangement.map((row, r) => (
    row.map((button, b) => {
        const [pulls, pushes] = button;

        const pulls_split = pulls.map((pull) => pull.split('.'))
        const pull_note = pulls_split.map(([name,]) => name).join(',')
        const pull_tones = pulls_split.map(([name, octave]) => tone[name][parseInt(octave)])

        const pushes_split = pushes.map((pull) => pull.split('.'))
        const push_note = pushes_split.map(([name,]) => name).join(',')
        const push_tones = pushes_split.map(([name, octave]) => tone[name][parseInt(octave)])

        const pull = { id: `${r + 1}-${b + 1}-pull-bass`, name: pull_note, frequency: pull_tones }
        const push = { id: `${r + 1}-${b + 1}-push-bass`, name: push_note, frequency: push_tones }

        return [pull, push]
    }).flat()
)) : [[], []]

// Scales
export const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
const findScale = (tuning, note, intervals) => {
    const scale = [];
    const original_idx = notes.indexOf(note)
    let curr = original_idx
    let lastRow = 0;
    let octave = 4
    const nextOctave = octave + 1
    intervals.forEach((interval) => {
        curr = curr + interval
        if (notes.length <= curr) {
            octave = nextOctave
        }
        const find = notes[curr % notes.length] // find next note name
        let found = false;
        const rows = layouts[tuning].map((row, r) => [row, r])
        const rowPriority = [...rows.filter(([row, r]) => lastRow == r), ...rows.filter(([row, r]) => lastRow != r)]
        rowPriority.forEach(([row, r]) => {
            row.forEach(([pull, push], b) => {
                if (!found && pull == `${find}.${octave}`) {
                    scale.push([`${r + 1}-${b + 1}-pull`])
                    lastRow = r;
                    found = true
                }
                if (!found && push == `${find}.${octave}`) {
                    scale.push([`${r + 1}-${b + 1}-push`])
                    lastRow = r;
                    found = true
                }
            })
        })
    })
    return scale;
}

export const getScales = (tuning) => (
    notes.reduce((carry, rootNote) => {
        carry[rootNote] = {
            major: findScale(tuning, rootNote, [0, 2, 2, 1, 2, 2, 2, 1]),
            majorThirds: findScale(
                tuning, rootNote, [0, 4, -2, 3, -1, 3, -2, 4, -2, 4, -2, 3]),
            minor: findScale(tuning, rootNote, [0, 2, 1, 2, 2, 2, 1, 2]),
            minorThirds: findScale(
                tuning, rootNote, [0, 3, -1, 3, -1, 4, -2, 4, -2, 3, -1, 3])
        }
        return carry
    }, {})
)

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
    'V4': { one: '', two: 'outer', three: 'inner' },
    'V3': { one: '', two: 'outer', three: 'inner' },
    'V2': { one: '', two: 'outer', three: 'inner' },
    'V1': { one: '', two: 'outer', three: 'inner' },
    'V0': { one: '', two: 'outer', three: 'inner' },
    'C#/D': { one: '', two: 'C#', three: 'D' },
    'B/C': { one: '', two: 'B', three: 'C' },
}

export const rows = Object.values(rowMap)
export const bassRows = Object.values(bassRowMap)
export const toggleBellows = 'q'
