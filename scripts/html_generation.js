let notes_sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
let notes_flat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']

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
    let repetitions = 0
    do  {   
            for(let note in tuned_notes) {
                let tab = document.createElement('td')
                
                tab.classList.add(tuned_notes[note])                
                tab.innerHTML = tuned_notes[note]
                tab.classList.add(string.id, `tab-${note}`)

                string.appendChild(tab)
                //  console.log(typeof string.appendChild(tab))
            } repetitions++
        } while (repetitions < 2)
    }

export function changeNotation(notation, notes) {
    console.log(notation, notes)

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

function tuneString(note, notes) {
    let  firstHalf = notes.slice(0, notes.indexOf(note))
    let secondHalf = notes.slice(notes.indexOf(note))

    let newRoot = secondHalf.concat(firstHalf)
    return newRoot
}