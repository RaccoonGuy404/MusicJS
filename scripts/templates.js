import { changeNotation } from "./html_generation.js"

const Intervals = [ 'root', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
const Intervals_Pentatonic = [ 'root', 'second', 'third', 'fourth', 'fifth']

const scale_modes = ['Major', 'Minor', 'Harmonic_Minor', 'Melodic_Minor', 'Lydian', 'Mixolydian', 'Phrygian', 'Locrian']

export function candys() {
    console.log('treak or treat!')
}

export function scale(key, mode, scales) {
    //  console.log(key, mode, scales)

    let scale_key = scales[mode].findIndex(scale => scale.key === key)
    let class_groups = Array()

    if (scales[mode][scale_key]['notes'].some(note => note.includes('#'))) {
        //  console.log('wechsel zu sharp notation')
        changeNotation('Sharp', scales[mode][scale_key]['notes'])
    }
    if (scales[mode][scale_key]['notes'].some(note => note.includes('b'))) {
        //  console.log('wechsel zu flat notation')
        changeNotation('Flat', scales[mode][scale_key]['notes'])
    }

    for (let scale in scales) {
        if (mode == scale) {
            //  console.log(scales[scale])
            scales[scale].forEach(tonic => {
                //console.log(mode, mode['key'])
                if (key == tonic['key']) {
                    //  console.log(mode, mode['notes'])
                    tonic['notes'].forEach(note => {
                        //  console.log(note, `${mode['key']}_${mode['name']}`, Intervals[mode['notes'].indexOf(note)])
                        class_groups.push(`${tonic['key']}_${tonic['name']}`)
                        let scale_notes = Array.prototype.slice.call(document.getElementsByClassName(note))
                        scale_notes.forEach(scale_note => {
                            //  console.log(scale_note)
                            if (mode.includes('Pentatonic')) {
                                scale_note.classList.add(`${tonic['key']}_${tonic['name']}`, Intervals_Pentatonic[tonic['notes'].indexOf(note)])
                            } else {
                                scale_note.classList.add(`${tonic['key']}_${tonic['name']}`, Intervals[tonic['notes'].indexOf(note)])
                            }
                        })
                    })
                }
            })
        }
    }
}

export function deleteTags() {
    Intervals.forEach(interval => {
        let notes = Array.from(document.getElementsByClassName(interval))
        notes.forEach(note => {
            note.classList.remove(interval)
        })
    })

    scale_modes.forEach(scale => {
        let notes = Array.from(document.querySelectorAll(`[class*="${scale}"]`))
        //  console.log(notes)
        notes.forEach(note => {
            //  console.log(note)
            note.classList.forEach(className => {
                if (className.includes(scale) || className.endsWith('_')) {
                    note.classList.remove(className)
                }
            })
        })
    })
}

export function get_scale_notes(scales, scale, key) {
    //  console.log(scales, scale, key)

    //  console.log(scales[scale], typeof scales[scale])
    for (let checkKey in scales[scale]) {
        //  console.log(checkKey, scales[scale][checkKey]['name'], scales[scale][checkKey]['key'])
        if (scales[scale][checkKey]['name'] === scale && scales[scale][checkKey]['key'] === key) {
            //  console.log(scales[scale][checkKey]['notes'])
            return scales[scale][checkKey]['notes']
        }
    }
}