export function candys() {
    console.log('treak or treat!')
}

export function majorScale(pattern, tuning, notes) {
    console.log(pattern, tuning, notes)

    pattern.forEach(root => {
        root[tuning].forEach(note => {
            console.log(note)
            let marked_note = Array.prototype.slice.call(document.getElementsByClassName(note))
            console.log(marked_note)
            marked_note.forEach(majorScale_note => {
                majorScale_note.classList.add(`${tuning}_major_scale`)
            })
        })
    });
}