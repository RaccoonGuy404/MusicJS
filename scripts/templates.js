const Intervals = [ 'root', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', ]

export function candys() {
    console.log('treak or treat!')
}

export function majorScale(pattern, tuning, notes) {
    //  console.log(pattern, tuning, notes)

    console.log(Intervals)

    pattern.forEach(root => {

        root[tuning].forEach(note => {
            let marked_note = Array.prototype.slice.call(document.getElementsByClassName(note))

            marked_note.forEach(majorScale_note => {
                majorScale_note.classList.add(`${tuning}_major_scale`)
                Intervals.forEach(interval => {
                    if (root[tuning].indexOf(note) == Intervals.indexOf(interval)) {
                        majorScale_note.classList.add(interval)
                    }
                })
            })

            //console.log(root[tuning].indexOf(note))
            console.log(root[tuning].indexOf(note))
        })
    });
}