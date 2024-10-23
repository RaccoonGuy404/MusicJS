import * as htmlGen from '/scripts/html_generation.js'

const string_1 = document.getElementById('string_1')
const string_2 = document.getElementById('string_2')
const string_3 = document.getElementById('string_3')
const string_4 = document.getElementById('string_4')
const string_5 = document.getElementById('string_5')
const string_6 = document.getElementById('string_6')

let strings = [string_1, string_2, string_3, string_4, string_5, string_6]

let tuning = ['E', 'A', 'D', 'B', 'G', 'E']

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

    htmlGen.genFretboard(strings, tuning)

    htmlGen.genString('E', 'string_1', notes)
    htmlGen.genString('B', 'string_2', notes)
    htmlGen.genString('G', 'string_3', notes)
    htmlGen.genString('D', 'string_4', notes)
    htmlGen.genString('A', 'string_5', notes)
    htmlGen.genString('E', 'string_6', notes)
}, 200);