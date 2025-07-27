document.querySelector('.formulario').addEventListener('submit', function (event) {

    event.preventDefault();

    const campos = document.querySelectorAll('.campo');

    let formularioValido = true;

    campos.forEach(campo => {

        const input = campo.querySelector('input');


        const spanErro = campo.querySelector('.erro');


        if (input.value.trim() === '') {
            input.classList.add('erro-input');


            spanErro.textContent = 'Campo obrigatório';
            spanErro.style.display = 'block';


            formularioValido = false;
        } else {
            input.classList.remove('erro-input');
            input.classList.add('true-input');


            spanErro.textContent = '';
            spanErro.style.display = 'none';
        }
    });

    if (formularioValido) {
        alert('Formulário enviado com sucesso!');
    }
});