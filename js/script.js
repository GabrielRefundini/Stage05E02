import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from "./utils.js"


// Variaveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')





// 3 maneiras de criar e atribuir funcao a um evento
//form.onsubmit = function() {}
//form.onsubmit = () => {}
//form.onsubmit = handleSubmit
//function handleSubmit(){}


inputWeight.oninput = () =>AlertError.close();
inputHeight.oninput = () =>AlertError.close();


form.onsubmit = event => {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    Modal.open()
}

