import { changeNotation } from "./html_generation.js"

const Intervals = [ 'root', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']

const scale_modes = ['Major', 'Minor', 'Harmonic_Minor', 'Melodic_Minor', 'Lydian', 'Myxolydian', 'Phrygian', 'Locrian']

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
        //  console.log(scale)
        if (mode == scale) {
            //  console.log(scales[scale])
            scales[scale].forEach(mode => {
                //console.log(mode, mode['key'])
                if (key == mode['key']) {
                    //  console.log(mode, mode['notes'])
                    mode['notes'].forEach(note => {
                        //  console.log(note, `${mode['key']}_${mode['name']}`, Intervals[mode['notes'].indexOf(note)])
                        class_groups.push(`${mode['key']}_${mode['name']}`)
                        let scale_notes = Array.prototype.slice.call(document.getElementsByClassName(note))
                        scale_notes.forEach(scale_note => {
                            //  console.log(scale_note)
                            scale_note.classList.add(`${mode['key']}_${mode['name']}`, Intervals[mode['notes'].indexOf(note)])
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
        console.log(notes)
        notes.forEach(note => {
            console.log(note)
            note.classList.forEach(className => {
                if (className.includes(scale) || className.endsWith('_')) {
                    note.classList.remove(className)
                }
            })
        })
    })
}