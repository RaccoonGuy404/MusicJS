import { changeNotation } from "./html_generation.js"

const Intervals = { 'root': 0, 'second': 1, 'third': 2, 'fourth': 3, 'fifth': 4, 'sixth': 5, 'seventh': 6 }

export function candys() {
    console.log('treak or treat!')
}

export function scale(key, mode, scales) {
    //  console.log(key, mode, scales)
    //  console.log(scales['Major'][0].key)


    for (let scale in scales) {
        //console.log(scale)
        if (mode == scale) {
            //console.log(scales[scale])
            scales[scale].forEach(mode => {
                //console.log(mode, mode['key'])
                if (key == mode['key']) {
                    //  console.log(mode, mode['notes'])
                    tagIntervals(mode['notes'])
                    return mode
                }
            })
        }
    }
}

function tagIntervals(notes) {
    console.log(notes, Intervals)

    if (notes.some(note => note.includes('#'))) {
        changeNotation('Sharp', notes)
    } else if (notes.some(note => note.includes('b'))) {
        changeNotation('Flat', notes)
    }

    deleteTags() 
    for (let interval in Intervals) {
        notes.forEach(note => {
            //  console.log(notes.indexOf(note), Intervals[interval])
            if (notes.indexOf(note) == Intervals[interval]) {
                //  console.log(note, interval)
                let notes_on_fret = Array.prototype.slice.call(document.getElementsByClassName(note))
                //  console.log(note, notes_on_fret)
                notes_on_fret.forEach(fret_note => {
                    fret_note.classList.add(interval)
                })
            }
        })
    }
}

function deleteTags() {
    for (let interval in Intervals) {
        let toDeleteTags = Array.prototype.slice.call(document.getElementsByClassName(interval))
        toDeleteTags.forEach(tag => {
            tag.classList.remove(interval)
        })
    }
}