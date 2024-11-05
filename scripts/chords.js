export function spookTimeOver() {
    console.log('Helloween is over, new module function will be mor christmasly i guess')
}

export function steps(notes) {
    //  console.log(notes)

    let chord_index = [0, 2, 4]
    let chords = []

    let root, third, fifth

    notes.forEach(note => {
        let  firstHalf = notes.slice(0, notes.indexOf(note))
        let secondHalf = notes.slice(notes.indexOf(note))
    
        let newRoot = secondHalf.concat(firstHalf)

        root = newRoot[chord_index[0]]
        third = newRoot[chord_index[1]]
        fifth = newRoot[chord_index[2]]

        chords.push(`${root} ${third} ${fifth}`)
    });

    return chords
}