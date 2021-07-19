const nameDisplay = document.querySelector('#name-display')
const emailDisplay = document.querySelector('#email-display')

function getValue(local){
  return document.querySelector(local).value;
}

let nameValue = getValue('#input-name')
let emailValue = getValue('#input-email')

document.addEventListener('keydown', () => {
  setTimeout(() => {
    if(nameValue !== getValue('#input-name')){
      nameValue = getValue('#input-name')
      nameValue.trim() === '' ?  nameDisplay.innerHTML = 'Nome' : nameDisplay
        .innerHTML = getValue('#input-name')

    }if(emailValue !== getValue('#input-email')){
      emailValue = getValue('#input-email')
      emailValue.trim() === '' ? emailDisplay.innerHTML = 'Email' : emailDisplay
        .innerHTML = getValue('#input-email')
    }
  }, 1)
})
