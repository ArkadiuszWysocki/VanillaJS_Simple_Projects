const input = document.querySelector('input');
const liList = document.querySelectorAll('li');
const ul = document.querySelector('ul');


const compare = (e) => {
    const searchText = e.target.value.toLowerCase()
    let tasks = [...liList];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    console.log(tasks);
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li))
}

input.addEventListener('keyup', compare);
