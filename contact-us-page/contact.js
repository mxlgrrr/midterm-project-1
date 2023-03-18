const form = document.querySelector('.form-contact-us');
const fullName = form.querySelector('#full-name');
const email = form.querySelector('#email');
const phone = form.querySelector('#phone');
const message = form.querySelector('#message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (fullName.value.length < 4) {
        toastr.error('El campo de nombre debe tener al menos 4 caracteres');
        return;
    }
    if (!isValidEmail(email.value)) {
        toastr.error('El correo electrónico ingresado no es válido');
        return;
    }
    if (phone.value.length !== 9) {
        toastr.error('El número de teléfono debe tener 9 dígitos');
        return;
    }
    if (message.value.length < 4) {
        toastr.error('El campo de mensaje debe tener al menos 4 caracteres');
        return;
    }
    toastr.success('Formulario enviado con exito');
    form.submit();
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

