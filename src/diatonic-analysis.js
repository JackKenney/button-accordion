import { mean } from 'mathjs'
import {
    layouts,
    getScales,
    getLayout,
    rowTones
} from './diatonic-data.js'

const transitionWork = (id1, id2) => {
    const parts1 = id1[0].split('-')
    const parts2 = id2[0].split('-')

    const bellows = parts1[2] !== parts2[2] // e.g. push != pull

    const button = parts1[0] !== parts2[0] ||  // row differs
        parts1[1] !== parts2[1] // column/button differs

    return { bellows, button }
}

const average = (scaleAnalysis, type) => {
    const weighting = {
        'G': 32,
        'D': 32,
        'A': 16,
        'C': 16,
        'F': 8,
        'E': 8,
        'Bb': 4,
        'B': 4,
        'Eb': 2,
        'Gb': 2,
        'Ab': 1,
        'Db': 1,
    };

    const counts = Object.entries(scaleAnalysis)
        .map(([key, value]) => (weighting[key] || 0) * (value[type] || 0));

    // const counts = Object.values(scaleAnalysis).map((value) => value[type]);
    return mean(counts)
}

export const analysis = {};
for (let tuning in rowTones) {
    analysis[tuning] = {
        average: {}
    }
    const scales = getScales(tuning)
    for (let key in scales) {
        const notes = scales[key].major;
        analysis[tuning][key] = notes.reduce((carry, noteId, i) => {
            if (i == 0) return carry;

            const { bellows, button } = transitionWork(notes[i - 1], notes[i]);
            carry.bellows += bellows
            carry.button += button
            carry.bellowsbutton += bellows && button

            if (notes[i][0].includes('pull')) carry.pull += 1
            else carry.push += 1

            return carry;
        }, { bellows: 0, button: 0, bellowsbutton: 0, push: 0, pull: 0 })
    }

    analysis[tuning].average.bellows = average(analysis[tuning], 'bellows')
    analysis[tuning].average.button = average(analysis[tuning], 'button')
    analysis[tuning].average.bellowsbutton = average(analysis[tuning], 'bellowsbutton')
    analysis[tuning].average.pull = average(analysis[tuning], 'pull')
    analysis[tuning].average.push = average(analysis[tuning], 'push')

    Object.keys(analysis[tuning]).forEach((key) => {
        if (key != 'average')
            delete analysis[tuning][key];
    })
}

console.log(JSON.stringify(analysis, null, 2))