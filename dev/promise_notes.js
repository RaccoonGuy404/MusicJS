//  promise für die abfrage der noten
let notes = new Promise ((res, rej) => {
    beispiel()
    if (success) resolve('resolved')
    else reject('rejected')
})

notes.then(result => console.log(result)).catch(err => console.log(err))

async function beispiel() {
    try {
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}