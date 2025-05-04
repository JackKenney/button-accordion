import { tone } from './data.js'

/**
 * https://www.libertybellows.com/general-accordion-questions.htm
 * https://thesession.org/discussions/16681
 */
export const swingOptions = {
    "Unison (Dry, Secco) Classical, Balkan ± 0": 0,
    "Concert (Violin, Swing Secco) Jazz, Tango, Cleveland Polka ± 2": 2,
    "Swing (Swing Mosso), Gypsy Jazz, Brazilian, Klezmer ± 4": 4,
    "Giusto ± 5": 5,
    "Demi-Swing (Mezzo Swing), Irish ± 7": 7,
    "American (Americano), Cajun, Quebecois ± 10": 10,
    "Celeste, Moderate Tremolo, Slovenian, Tex-Mex, Alpine ± 12": 12,
    "German ± 14": 14,
    "Standard Tremolo, German, Italian ± 15": 15,
    "Italian ± 16": 16,
    "Fast Tremolo, Modern French ± 18": 18,
    "French ± 20": 20,
    "Very Fast Tremolo, Old French, Old Italian, Italiano Mosso ± 22": 22,
    "Scottish ± 23.5": 23.5,
    "Extremely Fast Tremolo (Sardo) Scottish": 25,
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
    'D/C#': [ // Joe Derrane's http://www.korbo.com/piedcrow/diagrams/irshDCshrp01.gif
        [], // blank for 2 row
        [
            ['G.3', 'D.3'],
            ['B.3', 'Gb.3'],
            ['Db.4', 'A.3'],
            ['E.4', 'D.4'],
            ['G.4', 'Gb.4'],
            ['B.4', 'A.4'],
            ['Db.5', 'D.5'],
            ['E.5', 'Gb.5'],
            ['G.5', 'A.5'],
            ['B.5', 'D.6'],
            ['Db.6', 'Gb.6'],
        ], [
            ['Bb.3', 'F.3'],
            ['C.4', 'Ab.3'],
            ['Eb.4', 'Db.4'],
            ['Gb.4', 'F.4'],
            ['Bb.4', 'Ab.4'],
            ['C.5', 'Db.5'],
            ['Eb.5', 'F.5'],
            ['Gb.4', 'Ab.5'],
            ['Bb.5', 'Db.6'],
            ['C.6', 'F.6'],
        ],
    ],
    //// V0 is semitone push/pull, only covers like 1 octave really well
    // 'V0': [ 
    //     [], // blank for 2 row
    //     [
    //         ['Ab.3', 'A.3'],
    //         ['Bb.3', 'B.3'],
    //         ['C.4', 'Db.4'],
    //         ['D.4', 'Eb.4'],
    //         ['E.4', 'F.4'],
    //         ['Gb.4', 'G.4'],
    //         ['Ab.4', 'A.4'],
    //         ['Bb.4', 'B.4'],
    //         ['C.5', 'Db.5'],
    //         ['D.5', 'Eb.5'],
    //         ['E.5', 'F.5'],
    //     ], [
    //         ['A.3', 'Bb.3'],
    //         ['B.3', 'C.4'],
    //         ['Db.4', 'D.4'],
    //         ['Eb.4', 'E.4'],
    //         ['F.4', 'Gb.4'],
    //         ['G.4', 'Ab.4'],
    //         ['A.4', 'Bb.4'],
    //         ['B.4', 'C.5'],
    //         ['Db.5', 'E.5'],
    //         ['Eb.6', 'F.5'],
    //     ],
    // ],
    //// V1 uses whole steps up from push to pull, rows are a fifth apart
    // 'V1': [ // whole steps B push, E push
    //     [], // blank for 2 row
    //     [
    //         ['Db.3', 'B.3'],
    //         ['F.3', 'Eb.3'],
    //         ['A.3', 'G.3'],
    //         ['Db.4', 'B.3'],
    //         ['F.4', 'Eb.4'],
    //         ['A.4', 'G.4'],
    //         ['Db.5', 'B.4'],
    //         ['F.5', 'Eb.5'],
    //         ['A.5', 'G.5'],
    //         ['Db.6', 'B.5'],
    //         ['F.6', 'Eb.6'],
    //     ], [
    //         ['Gb.3', 'E.3'],
    //         ['Bb.3', 'Ab.3'],
    //         ['D.4', 'C.4'],
    //         ['Gb.4', 'E.4'],
    //         ['Bb.4', 'Ab.4'],
    //         ['D.5', 'C.5'],
    //         ['Gb.5', 'E.5'],
    //         ['Bb.5', 'Ab.5'],
    //         ['D.6', 'C.6'],
    //         ['Gb.6', 'E.6'],
    //     ],
    // ],
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
    // 'V4': [ // whole steps, D push, Eb push
    //     [], // blank for 2 row
    //     [
    //         ['C.3', 'D.3'],
    //         ['E.3', 'Gb.3'],
    //         ['Ab.3', 'Bb.3'],
    //         ['C.4', 'D.4'],
    //         ['E.4', 'Gb.4'],
    //         ['Ab.4', 'Bb.4'],
    //         ['C.5', 'D.5'],
    //         ['E.5', 'Gb.5'],
    //         ['Ab.5', 'Bb.5'],
    //         ['C.6', 'D.6'],
    //         ['E.6', 'Gb.6'],
    //     ], [
    //         ['F.3', 'Eb.3'],
    //         ['A.3', 'G.3'],
    //         ['Db.4', 'B.3'],
    //         ['F.4', 'Eb.4'],
    //         ['A.4', 'G.4'],
    //         ['Db.5', 'B.4'],
    //         ['F.5', 'Eb.5'],
    //         ['A.5', 'G.5'],
    //         ['Db.6', 'B.5'],
    //         ['F.6', 'Eb.6'],
    //     ],
    // ],
    // 'V5': [ // whole steps rows major thirds push/pull
    //     [], // blank for 2 row
    //     [
    //         ['C.3', 'E.3'],
    //         ['D.3', 'Gb.3'],
    //         ['E.3', 'Ab.3'],
    //         ['Gb.4', 'Bb.3'],
    //         ['Ab.4', 'C.4'],
    //         ['Bb.4', 'D.4'],
    //         ['C.5', 'E.5'],
    //         ['D.5', 'Gb.5'],
    //         ['E.5', 'Ab.5'],
    //         ['Gb.6', 'Bb.6'],
    //         ['Ab.6', 'C.6'],
    //     ], [
    //         ['G.3', 'B.3'],
    //         ['A.3', 'Db.3'],
    //         ['B.4', 'Eb.3'],
    //         ['Db.4', 'F.4'],
    //         ['Eb.4', 'G.4'],
    //         ['F.5', 'A.4'],
    //         ['G.5', 'B.5'],
    //         ['A.5', 'Db.5'],
    //         ['B.6', 'Eb.5'],
    //         ['Db.6', 'F.6'],
    //     ],
    // ],
    // 'V6': [
    //     [], // blank for 2 row
    //     [
    //         ['Bb.2', 'C.3',],
    //         ['D.3', 'E.3',],
    //         ['Gb.3', 'Ab.3',],
    //         ['Bb.3', 'C.4',],
    //         ['D.4', 'E.4',],
    //         ['Gb.4', 'Ab.4',],
    //         ['Bb.4', 'C.5',],
    //         ['D.5', 'E.5',],
    //         ['Gb.5', 'Ab.5',],
    //         ['Bb.5', 'C.6',],
    //         ['D.6', 'E.6',],
    //     ], [
    //         ['Db.3', 'Eb.3'],
    //         ['F.3', 'G.3'],
    //         ['A.3', 'B.3'],
    //         ['Db.4', 'Eb.4'],
    //         ['F.4', 'G.4'],
    //         ['A.4', 'B.4'],
    //         ['Db.5', 'Eb.5'],
    //         ['F.5', 'G.5'],
    //         ['A.5', 'B.5'],
    //         ['Db.6', 'Eb.6'],
    //     ],
    // ],
    // 'V7': [ // whole step push, rows 4th apart
    //     [], // blank for 2 row
    //     [
    //         ['Bb.2', 'C.3',],
    //         ['D.3', 'E.3',],
    //         ['Gb.3', 'Ab.3',],
    //         ['Bb.3', 'C.4',],
    //         ['D.4', 'E.4',],
    //         ['Gb.4', 'Ab.4',],
    //         ['Bb.4', 'C.5',],
    //         ['D.5', 'E.5',],
    //         ['Gb.5', 'Ab.5',],
    //         ['Bb.5', 'C.6',],
    //         ['D.6', 'E.6',],
    //     ], [
    //         ['Eb.3', 'F.3'],
    //         ['G.3', 'A.3'],
    //         ['B.3', 'Db.4'],
    //         ['Eb.4', 'F.4'],
    //         ['G.4', 'A.4'],
    //         ['B.4', 'Db.5'],
    //         ['Eb.5', 'F.5'],
    //         ['G.5', 'A.5'],
    //         ['B.5', 'Db.6'],
    //         ['Eb.6', 'F.6'],
    //     ],
    // ],
    // 'V8-B/C': [ // whole steps, B pull, C# push / C pull, D push
    //     [], // blank for 2 row
    //     [
    //         ['B.2', 'Db.3'],
    //         ['Eb.3', 'F.3'],
    //         ['G.3', 'A.3'],
    //         ['B.3', 'Db.4'],
    //         ['Eb.4', 'F.4'],
    //         ['G.4', 'A.4'],
    //         ['B.4', 'Db.5'],
    //         ['Eb.5', 'F.5'],
    //         ['G.5', 'A.5'],
    //         ['B.5', 'Db.6'],
    //         ['Eb.6', 'F.6'],
    //     ], [
    //         ['C.3', 'D.3'],
    //         ['E.3', 'Gb.3'],
    //         ['Ab.3', 'Bb.3'],
    //         ['C.4', 'D.4'],
    //         ['E.4', 'Gb.4'],
    //         ['Ab.4', 'Bb.4'],
    //         ['C.5', 'D.5'],
    //         ['E.5', 'Gb.5'],
    //         ['Ab.5', 'Bb.5'],
    //         ['C.6', 'D.6'],
    //     ],
    // ],
    // 'V8-C/C#': [ // whole steps, C pull, D push
    //     [], // blank for 2 row
    //     [
    //         ['C.3', 'D.3'],
    //         ['E.3', 'Gb.3'],
    //         ['Ab.3', 'Bb.3'],
    //         ['C.4', 'D.4'],
    //         ['E.4', 'Gb.4'],
    //         ['Ab.4', 'Bb.4'],
    //         ['C.5', 'D.5'],
    //         ['E.5', 'Gb.5'],
    //         ['Ab.5', 'Bb.5'],
    //         ['C.6', 'D.6'],
    //         ['E.6', 'Gb.6'],
    //     ], [
    //         ['Db.3', 'Eb.3'],
    //         ['F.3', 'G.3'],
    //         ['A.3', 'B.3'],
    //         ['Db.4', 'Eb.4'],
    //         ['F.4', 'G.4'],
    //         ['A.4', 'B.4'],
    //         ['Db.5', 'Eb.5'],
    //         ['F.5', 'G.5'],
    //         ['A.5', 'B.5'],
    //         ['Db.6', 'Eb.6'],
    //     ],
    // ],
    // 'V8-D/C#': [ // whole steps, D pull, E push / C# pull, D# push
    //     [], // blank for 2 row
    //     [
    //         ['D.3', 'E.3'],
    //         ['Gb.3', 'Ab.3'],
    //         ['Bb.3', 'C.4'],
    //         ['D.4', 'E.4'],
    //         ['Gb.4', 'Ab.4'],
    //         ['Bb.4', 'C.5'],
    //         ['D.5', 'E.5'],
    //         ['Gb.5', 'Ab.5'],
    //         ['Bb.5', 'C.6'],
    //         ['D.6', 'E.6'],
    //         ['Gb.6', 'Ab.6'],
    //     ], [
    //         ['F.3', 'G.3'],
    //         ['A.3', 'B.3'],
    //         ['Db.4', 'Eb.4'],
    //         ['F.4', 'G.4'],
    //         ['A.4', 'B.4'],
    //         ['Db.5', 'Eb.5'],
    //         ['F.5', 'G.5'],
    //         ['A.5', 'B.5'],
    //         ['Db.6', 'Eb.6'],
    //         ['F.6', 'G.6'],
    //     ],
    // ],
    // 'V8-D/D#': [ // whole steps, D pull, E push
    //     [], // blank for 2 row
    //     [
    //         ['D.3', 'E.3'],
    //         ['Gb.3', 'Ab.3'],
    //         ['Bb.3', 'C.4'],
    //         ['D.4', 'E.4'],
    //         ['Gb.4', 'Ab.4'],
    //         ['Bb.4', 'C.5'],
    //         ['D.5', 'E.5'],
    //         ['Gb.5', 'Ab.5'],
    //         ['Bb.5', 'C.6'],
    //         ['D.6', 'E.6'],
    //         ['Gb.6', 'Ab.'],
    //     ], [
    //         ['Eb.3', 'F.3'],
    //         ['G.3', 'A.3'],
    //         ['B.3', 'Db.4'],
    //         ['Eb.4', 'F.4'],
    //         ['G.4', 'A.4'],
    //         ['B.4', 'Db.5'],
    //         ['Eb.5', 'F.5'],
    //         ['G.5', 'A.5'],
    //         ['B.5', 'Db.6'],
    //         ['Eb.6', 'F.6'],
    //     ],
    // ],
    // V9 flips push and pull of V8 to more align with tradition
    'V9-B/C': [ // whole steps, Db pull, B push | D pull, C push
        [], // blank for 2 row
        [
            ['Db.3', 'B.2'],
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
        ],
    ],
    'V9-C/C#': [ // whole steps, D pull, C push | Eb pull, Db push
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
            ['Eb.3', 'Db.3'],
            ['G.3', 'F.3'],
            ['B.3', 'A.3'],
            ['Eb.4', 'Db.4'],
            ['G.4', 'F.4'],
            ['B.4', 'A.4'],
            ['Eb.5', 'Db.5'],
            ['G.5', 'F.5'],
            ['B.5', 'A.5'],
            ['Eb.6', 'Db.6'],
        ],
    ],
    'V9-D/C#': [ // whole steps, E pull, D push | Eb pull, Db push
        [], // blank for 2 row
        [
            ['C.3', 'Bb.2'],
            ['E.3', 'D.3'],
            ['Ab.3', 'Gb.3'],
            ['C.4', 'Bb.3'],
            ['E.4', 'D.4'],
            ['Ab.4', 'Gb.4'],
            ['C.5', 'Bb.4'],
            ['E.5', 'D.5'],
            ['Ab.5', 'Gb.5'],
            ['C.6', 'Bb.5'],
            ['E.6', 'D.6'],
        ], [
            ['Eb.3', 'Db.3'],
            ['G.3', 'F.3'],
            ['B.3', 'A.3'],
            ['Eb.4', 'Db.4'],
            ['G.4', 'F.4'],
            ['B.4', 'A.4'],
            ['Eb.5', 'Db.5'],
            ['G.5', 'F.5'],
            ['B.5', 'A.5'],
            ['Eb.6', 'Db.6'],
        ],
    ],
    'V9-C#/D': [ // whole steps, Eb pull, Db push | E pull, D push, major thirds between buttons
        [], // blank for 2 row
        [
            ['Eb.3', 'Db.3'],
            ['G.3', 'F.3'],
            ['B.3', 'A.3'],
            ['Eb.4', 'Db.4'],
            ['G.4', 'F.4'],
            ['B.4', 'A.4'],
            ['Eb.5', 'Db.5'],
            ['G.5', 'F.5'],
            ['B.5', 'A.5'],
            ['Eb.6', 'Db.6'],
            ['G.6', 'F.6'],
        ], [
            ['E.3', 'D.3'],
            ['Ab.3', 'Gb.3'],
            ['C.4', 'Bb.3'],
            ['E.4', 'D.4'],
            ['Ab.4', 'Gb.4'],
            ['C.5', 'Bb.4'],
            ['E.5', 'D.5'],
            ['Ab.5', 'Gb.5'],
            ['C.6', 'Bb.5'],
            ['E.6', 'D.6'],
        ],
    ],
    // 'V9-D/D#': [ // whole steps, E pull, D push | F pull, Eb push
    //     [], // blank for 2 row
    //     [
    //         ['C.3', 'Bb.2'],
    //         ['E.3', 'D.3'],
    //         ['Ab.3', 'Gb.3'],
    //         ['C.4', 'Bb.3'],
    //         ['E.4', 'D.4'],
    //         ['Ab.4', 'Gb.4'],
    //         ['C.5', 'Bb.4'],
    //         ['E.5', 'D.5'],
    //         ['Ab.5', 'Gb.5'],
    //         ['C.6', 'Bb.5'],
    //         ['E.6', 'D.6'],
    //     ], [
    //         ['Db.3', 'B.2'],
    //         ['F.3', 'Eb.3'],
    //         ['A.3', 'G.3'],
    //         ['Db.4', 'B.3'],
    //         ['F.4', 'Eb.4'],
    //         ['A.4', 'G.4'],
    //         ['Db.5', 'B.4'],
    //         ['F.5', 'Eb.5'],
    //         ['A.5', 'G.5'],
    //         ['Db.6', 'B.5'],
    //     ],
    // ],
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
    'D/C#': [[
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
        [['G.2'], ['D.2']], // duplicate farthest column for ease of 3 fingered playing
    ],
    [
        [['C.2'], ['F.2']],
        [['Eb.2'], ['Bb.2']],
        [['Ab.2'], ['Db.2']],
        [['C.2'], ['F.2']], // duplicate farthest column for ease of 3 fingered playing
    ]],
    'V9-B/C': [[
        [['D.2', 'A.2'], ['G.2', 'D.3']],
        [['A.2', 'E.2'], ['E.2', 'B.2']],
        [['Gb.2', 'Db.3'], ['B.2', 'Gb.3']],
    ],
    [
        [['F.2', 'C.3'], ['C.2', 'G.2']],
        [['Bb.2', 'F.3'], ['Eb.2', 'Bb.2']],
        [['Db.2', 'Ab.2'], ['Ab.2', 'Eb.3']],
    ]],
    'V9-D/C#': [[
        [['G.2', 'D.3'], ['D.2', 'A.2']],
        [['E.2', 'B.2'], ['A.2', 'E.2']],
        [['B.2', 'Gb.3'], ['Gb.2', 'Db.3']],
    ],
    [
        [['C.2', 'G.2'], ['F.2', 'C.3']],
        [['Eb.2', 'Bb.2'], ['Bb.2', 'F.3']],
        [['Ab.2', 'Eb.3'], ['Db.2', 'Ab.2']],
    ]],
}

export const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const getLayout = (tuning) => {
    const arrangement = layouts[tuning]
    const [one, two, three] = getRows(arrangement)
    return { one, two, three }
}

export const getNextNote = (note, octave) => {
    const i = notes.indexOf(note)
    const j = (i + 1) % notes.length
    const newOctave = parseInt(octave) + ((j == 0) ? 1 : 0) // wrapped around?
    const newNote = notes[j]
    return { note: newNote, octave: newOctave }
}

export const getRows = (arrangement) => arrangement ? arrangement.map((row, r) => (
    row.map((button, b) => {
        const [pull, push] = button;
        const [pullNote, pullOctave] = pull.split('.')
        const [pushNote, pushOctave] = push.split('.')
        const { note: pullNoteNext, octave: pullOctaveNext } = getNextNote(pullNote, pullOctave)
        const { note: pushNoteNext, octave: pushOctaveNext } = getNextNote(pushNote, pushOctave)
        return [
            {
                name: pullNote,
                id: `${r + 1}-${b + 1}-pull`,
                frequency: tone[pullNote][parseInt(pullOctave)],
                nextFrequency: tone[pullNoteNext][parseInt(pullOctaveNext)]
            },
            {
                name: pushNote,
                id: `${r + 1}-${b + 1}-push`,
                frequency: tone[pushNote][parseInt(pushOctave)],
                nextFrequency: tone[pushNoteNext][parseInt(pushOctaveNext)]
            },
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
const findScale = (tuning, note, intervals) => {
    const scale = [];
    const original_idx = notes.indexOf(note)
    let curr = original_idx
    let lastRow = 0;
    const firstOctave = 4
    const secondOctave = 5
    let octave = firstOctave
    intervals.forEach((interval) => {
        curr = curr + interval
        if (curr < notes.length) {
            octave = firstOctave
        }
        else if (notes.length <= curr) {
            octave = secondOctave
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
        if (found == false)
            console.error(`Couldn't find note in ${tuning}: ${find}.${octave}`)
    })
    return scale;
}

export const getScales = (tuning) => {
    const scales = notes.reduce((carry, rootNote) => {
        carry[rootNote] = {
            major: findScale(tuning, rootNote, [0, 2, 2, 1, 2, 2, 2, 1]),
            majorThirds: findScale(
                tuning, rootNote, [0, 4, -2, 3, -1, 3, -2, 4, -2, 4, -2, 3]),
            minor: findScale(tuning, rootNote, [0, 2, 1, 2, 2, 2, 1, 2]),
            minorThirds: findScale(
                tuning, rootNote, [0, 3, -1, 3, -1, 4, -2, 4, -2, 3, -1, 3]),
            all: findScale(tuning, rootNote, [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        }
        return carry
    }, {})
    return scales;
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
    ...Object.keys(layouts).reduce((c, k) => {
        c[k] = { one: '', two: 'outer', three: 'inner' };
        return c;
    }, {}),
    'D/C#': { one: '', two: 'D', three: 'C#' },
    'B/C': { one: '', two: 'B', three: 'C' },
}

export const rows = Object.values(rowMap)
export const bassRows = Object.values(bassRowMap)
export const toggleBellows = 'q'
