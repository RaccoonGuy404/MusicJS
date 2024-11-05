//  import aller JS datein für eine zentrale JS datei
import * as htmlGen from '/scripts/html_generation.js'
import * as template from '/scripts/templates.js'
import * as chord from '/scripts/chords.js'

//  init aller variablen und konstanten
/*
const string_1 = document.getElementById('string_1')
const string_2 = document.getElementById('string_2')
const string_3 = document.getElementById('string_3')
const string_4 = document.getElementById('string_4')
const string_5 = document.getElementById('string_5')
const string_6 = document.getElementById('string_6')
*/

const key = document.getElementById('key')
const mode = document.getElementById('mode')

let m_k_change = [key, mode]

let switch_notation = document.getElementById('notation')

let strings = Array.prototype.slice.call(document.getElementsByClassName('string'))

let getTuners = Array.from(document.getElementsByClassName('tuner'))
let tuning = []
getTuners.forEach(tuner => {
    tuning.push(tuner.value)
})

let notes
let notes_sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
let notes_flat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']

let scales = null

let scale_notes = []

//  ajax call um die daten aus der JSON zu bekommen
var ajax = new XMLHttpRequest ()

ajax.open("GET", "../json/note_scales_en.json", true)

ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var daten = JSON.parse(ajax.responseText)
        //  console.log(daten)
        scales = daten
    }
}

ajax.send()

function notation (notation) {
    //  console.log(notation)
    if (notation === 'Sharp') {
        notes = notes_sharp
    } else {
        notes = notes_flat

    }
}

//  da ich die JSON daten einmal dauerhaft haben möchte, wird erst der wert verwendet nachdem der AJAX call gelungen ist
setTimeout(() => {
    //  console.log(scales)
    for (let scale in scales) {
        //  console.log(scale)
    }

    //  console.log(key.value, mode.value, scales)
    scale_notes = template.get_scale_notes(scales, mode.value, key.value)
    htmlGen.genChords(chord.steps(scale_notes))

    template.scale(key.value, mode.value, scales)

    m_k_change.forEach(function (elem) {
        elem.addEventListener('change', function() {
            //  console.log(key.value, mode.value)
            template.deleteTags()
            template.scale(key.value, mode.value, scales)

            /*  CHORDS  */
            //  chord.spookTimeOver()
            //  console.log(key.value, mode.value, scales)
            template.get_scale_notes(scales, mode.value, key.value)
            scale_notes = template.get_scale_notes(scales, mode.value, key.value)
            htmlGen.genChords(chord.steps(scale_notes))
        })
    })

}, 200);

//  htmlGen.genFretboard(strings[0], tuning[0], notes)
for (let string in strings) {
    //  console.log(strings[string], string, tuning[string], tuning)
    htmlGen.genFretboard(strings[string], tuning[string], notes_sharp)
}

notation(switch_notation.value)
switch_notation.addEventListener('change', () => {
    //  console.log(switch_notation.value)
    notation(switch_notation.value)
    htmlGen.changeNotation(switch_notation.value, notes, notes_sharp, notes_flat)
})