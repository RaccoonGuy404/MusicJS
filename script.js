import * as htmlGen from '/scripts/html_generation.js'
import * as template from '/scripts/templates.js'

const string_1 = document.getElementById('string_1')
const string_2 = document.getElementById('string_2')
const string_3 = document.getElementById('string_3')
const string_4 = document.getElementById('string_4')
const string_5 = document.getElementById('string_5')
const string_6 = document.getElementById('string_6')

const key = document.getElementById('key')
const mode = document.getElementById('mode')
let m_k_change = [key, mode]


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

var ajax = new XMLHttpRequest ()

ajax.open("GET", "../json/sample.json", true)

ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var daten = JSON.parse(ajax.responseText)
        //  console.log(daten)
        scales = daten
    }
}

ajax.send()

setTimeout(() => {
    //  console.log(scales)
    for (let scale in scales) {
        //  console.log(scale)
    }

    template.scale(key.value, mode.value, scales)

    m_k_change.forEach(function (elem) {
        elem.addEventListener('change', function() {
            //  console.log(key.value, mode.value)
            template.scale(key.value, mode.value, scales)
        })
    })

}, 200);

//  htmlGen.genFretboard(strings[0], tuning[0], notes)
for (let string in strings) {
    //  console.log(strings[string], string, tuning[string], tuning)
    htmlGen.genFretboard(strings[string], tuning[string], notes)
}