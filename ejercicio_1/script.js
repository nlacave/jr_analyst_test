const nombreInput = document.querySelector('#nombre')
const emailInput = document.querySelector('#email')
const comentarioTA = document.querySelector('#comentario')
const submitBtn = document.querySelector('#submit')
const contactoForm = document.querySelector('#contacto')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(nombreInput.value === '' || emailInput.value === '' || comentarioTA.value === '') {
        contactoForm.classList.add('camposVacios')
    } else {
        alert(`Nombre: ${nombreInput.value}\nEmail: ${emailInput.value}\nComentario: ${comentarioTA.value}`);
    }
})