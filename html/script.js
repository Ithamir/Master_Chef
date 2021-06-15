/* get */
function getSubject(){
    const thisSubject = document.getElementById('subject')
}
function getNotes(){
    const thisNotes = document.getElementById('notes')
}
function getData(){
    getSubject()
    getNotes()
}

/* print */
function printSubject() {
    document.write(thisSubject)
}
function printNotes() {
    document.write(thisNotes)
}
function printData(){
    printSubject()
    printNotes()
}