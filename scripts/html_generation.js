let notes_sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
let notes_flat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']

const major_romes = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']
const minor_romes = ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']

const romes = document.getElementById('romes')
const chord_table = document.getElementById('chords')


export function pumpkin() {
    console.log('pumpkin')
}

export function ghost() {
    console.log('BOOOH!')
}

export function genFretboard(string, tuning, notes) {
    //  console.log(string, tuning, notes)
    //  console.log(notes)
    //  console.log(tuned_notes)
    let tuned_notes = tuneString(tuning, notes)
        
    //  repetitions for fretboard length
    let repetitions
    if (document.title === 'Guitar') {
        repetitions = 1
    } else if (document.title === 'Ukulele') {
        repetitions = 1
    }

    let cycle = 0
    do  {   
            for(let note in tuned_notes) {
                let tab = document.createElement('td')
                
                tab.classList.add(tuned_notes[note])                
                tab.innerHTML = tuned_notes[note]
                tab.classList.add(string.id, `tab-${note}`)

                string.appendChild(tab)
                //  console.log(typeof string.appendChild(tab))
            } cycle++
        } while (cycle < repetitions)
    }

export function changeNotation(notation, notes) {
    //  console.log(notation, notes)

    if (notes.length < 12) {
        if (notes.some(note => note.includes('#'))) {
            notes = notes_sharp
        }
        if (notes.some(note => note.includes('B'))) {
            notes = notes_flat
        }
    }

    let retagNotes = Array()

    switch (notation) {
        case 'Flat':
            notes.forEach(note => {
                //  console.log(note, notes.indexOf(note), notes_sharp[notes.indexOf(note)])
                let notes_tochange
                
                if (note.includes('b')) {
                    retagNotes.push(note)
                    notes_tochange = Array.prototype.slice.call(document.getElementsByClassName(notes_sharp[notes.indexOf(note)]))
                    notes_tochange.forEach(new_note => {
                        new_note.innerHTML = note
                        new_note.classList.remove(notes_sharp[notes.indexOf(note)])
                        new_note.classList.add(note)
                        
                    })
                }
            })            
            break;
        case 'Sharp':
            notes.forEach(note => {
                //  console.log(note, notes.indexOf(note), notes_flat[notes.indexOf(note)])
                let notes_tochange
                
                if (note.includes('#')) {
                    retagNotes.push(note)
                    notes_tochange = Array.prototype.slice.call(document.getElementsByClassName(notes_flat[notes.indexOf(note)]))
                    notes_tochange.forEach(new_note => {
                        new_note.innerHTML = note
                        new_note.classList.remove(notes_flat[notes.indexOf(note)])
                        new_note.classList.add(note)
                    })
                }
            })          
            break;
        default:
            break;
    }
}

export function genChords(chords) {
    //  console.log(chords)

    let deleteChords = Array.from(document.getElementsByClassName('chord'))
    if(deleteChords.length > 0) {
        console.log(deleteChords)
        deleteChords.forEach(chord => {
            chord_table.removeChild(chord)
        })
    }

    chords.forEach(chord => {
        //  console.log(chord)
        
        let newTd = document.createElement('td')
        newTd.classList.add('chord')
        newTd.innerHTML = chord
        chord_table.appendChild(newTd)
    })

}

function tuneString(note, notes) {
    let  firstHalf = notes.slice(0, notes.indexOf(note))
    let secondHalf = notes.slice(notes.indexOf(note))

    let newRoot = secondHalf.concat(firstHalf)
    return newRoot
}