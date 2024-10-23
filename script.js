import * as htmlGen from '/scripts/html_generation.js'
import * as template from '/scripts/templates.js'

const string_1 = document.getElementById('string_1')
const string_2 = document.getElementById('string_2')
const string_3 = document.getElementById('string_3')
const string_4 = document.getElementById('string_4')
const string_5 = document.getElementById('string_5')
const string_6 = document.getElementById('string_6')

let strings = [string_6, string_5, string_4, string_3, string_2, string_1]

let tuning = ['E', 'A', 'D', 'G', 'B', 'E']

let notes
let notation = 'sharp'

if (notation = 'sharp') {
    notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
} else {
    notes = ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭']
}

let scales = null
loadScales()

async function loadScales() {
        const response = await fetch('json/note_scales_en.json')
        const data = await response.json()
    
        scales = data
        //  console.log('scales geladen: ', scales)
    }

setTimeout(() => {
    console.log(scales)

    for (let scale in scales) {
        console.log(scale)
    }

    template.majorScale(scales['Major'], 'C', notes)
}, 200);

//  htmlGen.genFretboard(strings[0], tuning[0], notes)
for (let string in strings) {
    //  console.log(strings[string], string, tuning[string], tuning)
    htmlGen.genFretboard(strings[string], tuning[string], notes)
}