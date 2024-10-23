export function pumpkin() {
    console.log('pumpkin')
}

export function ghost() {
    console.log('BOOOH!')
}

export function genString(tuning, string, notes) {
    notes = tuneString(tuning, notes)

    let repetitions = 0
    do {
        for (let note in notes) {
            let tab = document.createElement('td')

            tab.classList.add(notes[note])

            tab.innerHTML = notes[note]
    
            switch (string) {
                case 'string_1':
                    string_1.appendChild(tab)
                    break;
                case 'string_2':
                    string_2.appendChild(tab)
                    break;
                case 'string_3':
                    string_3.appendChild(tab)
                    break;
                case 'string_4':
                    string_4.appendChild(tab)
                    break;
                case 'string_5':
                    string_5.appendChild(tab)
                    break;
                default:
                    string_6.appendChild(tab)
                    break;
            }
        } repetitions++
    } while (repetitions < 2)
}

function tuneString(note, notes) {
    let  firstHalf = notes.slice(0, notes.indexOf(note))
    let secondHalf = notes.slice(notes.indexOf(note))

    let newRoot = secondHalf.concat(firstHalf)
    return newRoot
}

export function genFretboard() {
    
}