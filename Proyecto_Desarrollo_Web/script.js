
// formulario
const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"][placeholder="Nombre Completo *"]');
const emailInput = form.querySelector('input[type="text"][placeholder="Dirección de Email"]');
const subjectInput = form.querySelector('input[type="text"][placeholder="Tema..."]');
const messageInput = form.querySelector('textarea[placeholder="Tu Mensaje..."]');

// agrega un evento de escucha
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // se fija que el formato nombre es correcto
    if (nameInput.value.trim() === '') {
    alert('Por favor, ingrese su nombre completo.');
    nameInput.focus();
    return;
  }

  // revisa sí el formato e mail es correcto
  if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value)) {
    alert('Por favor, ingrese una dirección de email válida.');
    emailInput.focus();
    return;
  }

  // ve si el tema esta vacio
  if (subjectInput.value.trim() === '') {
    alert('Por favor, ingrese el tema de su mensaje.');
    subjectInput.focus();
    return;
  }

  //  ve si el mensaje esta vacio
  if (messageInput.value.trim() === '') {
    alert('Por favor, ingrese su mensaje.');
    messageInput.focus();
    return;
  }

  // si todo se valida se apruba el form
  form.submit();
});

// funcion para validar el email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


form.addEventListener('submit', event => {
  event.preventDefault();

  // Validar los datos del formulario
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  if (!name || !email || !message) {
    alert('Por favor, rellene todos los campos');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida');
    return;
  }

  // Enviar los datos del formulario a la API REST
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    alert('El formulario se ha enviado correctamente');
  })
  .catch(error => {
    alert(error.message);
  });
});


// botones responsivos para dif pantallas


function responsiveMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  //a cruzar los dedos