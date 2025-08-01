const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.enviar')

botaoEnviar.addEventListener('click', (e) => {
  e.preventDefault()

  camposFormulario.forEach((input) => {
    if (input.value) {
      input.classList.add('campo-preenchido')
      input.nextElementSibling.classList.remove('mostrar-erro')
    } else {
      input.classList.remove('campo-preenchido')
      input.classList.add('campo-obrigatorio')
      input.nextElementSibling.classList.add('mostrar-erro')
    }
  })
})

// Lógida do Script:
// Criar uma classe pra todos os inputs. [OK]
// A prtir disso, criar um único array para eles [OK]
// Percorrrer esse array todo verificando qual tá preenchido e qual não tá [OK]
// - Quando preenchido, adiciona uma classe de borda verde [OK]
// - Quando não preenchido, adiciona uma classe de borda vermelha + texto: 'campo obrigatório *' [OK]