const img = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer')
const error = document.querySelector('.error');
const advices = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don’t count on it.', 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.', 'Yes.', 'Yes – definitely.', 'You may rely on it.'];


const showTip = () => {
    if (input.value !== '' && input.value.includes('?')) {
        img.classList.add('shake-animation');
        error.textContent = '';
        setTimeout(() => {
        answer.innerHTML = `<span>${advices[Math.floor(Math.random() * advices.length)]}</span>`;
        img.classList.remove('shake-animation');
        }, 1000);
        }   else if (input.value !== '' && !input.value.includes('?')) {
                error.textContent = 'Question need to end with "?"';
                answer.textContent = '';
            }    else {
                error.textContent = 'Ask a question first.';
                answer.textContent = '';
                }
        
};

img.addEventListener('click', showTip)
