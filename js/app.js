// -------- Cached Element References ------------// 

const inputList = document.querySelector('#list')
const subButton = document.querySelector('#submit-button')
const list = document.querySelector('#todo-list')
const resetBtn = document.querySelector('#reset-button')

// -----------------------------------------------//

subButton.addEventListener('click', function (newItem) {
  const newLi = document.createElement('li')
  const inp = document.querySelector('input')
  newLi.textContent = inp.value
  if (inp.value !== '') {
    document.querySelector('ul').appendChild(newLi)
    inp.value = ''
    console.log(newLi)
  }
})

resetBtn.addEventListener('click', function (evt) {
  list.innerHTML = ''
  inputList.value = ''
})




