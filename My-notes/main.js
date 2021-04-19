const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const removeBtns = document.getElementsByClassName('remove-note');
const removeAllBtn = document.querySelector('.remove-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="remove-note" onclick="removeNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${textarea.value}
        </div>  
    `;

    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
    checkColor(newNote)
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = note => {
    switch (selectedValue) {
        case 'Shopping':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Work':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Other':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
    }
}

const removeNote = id => {
    const noteToRemove = document.getElementById(id);
    noteArea.removeChild(noteToRemove)
}

const removeAllNotes = () => {
    noteArea.textContent = ''
}

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
removeAllBtn.addEventListener('click', removeAllNotes);
