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


function tuneString(note, notes) {
    let  firstHalf = notes.slice(0, notes.indexOf(note))
    let secondHalf = notes.slice(notes.indexOf(note))

    let newRoot = secondHalf.concat(firstHalf)
    return newRoot
}
