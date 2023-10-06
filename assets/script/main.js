/**@@@@@@@@
 * LOADER @
 @@@@@@@@@@*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const preloader = document.querySelector('.spiner');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('spiner');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    })
  }
})

//** ----------------- MENU -------------------- */
var menuHeader = document.querySelector('.drop-down-menu');
var menuButton = document.getElementById('menu-button');

let isMenuHeaderOpen = false;

function openHeaderMenu() {
  menuHeader.style.display = 'block';
  isMenuHeaderOpen = true;
  document.addEventListener('click', outSideClick);
}

function closeMenuHeader() {
  menuHeader.style.display = '';
  isMenuHeaderOpen = false;
  document.addEventListener('click', outSideClick);
}

menuButton.onclick = function(event) {
  event.stopPropagation();
  if (!isMenuHeaderOpen) {
    openHeaderMenu();
  } else {
    closeMenuHeader();
  }
};

function outSideClick(event) {
  if (!menuHeader.contains(event.target) && event.target !== menuButton) {
    closeMenuHeader();
  }
}

/**============================================== >
 * Dark Mode ==================================== <
 ================================================*/

document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const moonIcon = document.getElementById('dark-mode');
    const sunIcon = document.getElementById('light-mode');
    const backToTopIcon = document.querySelector('.back-to-top i');
    var body = document.body;
    const teamcard = document.querySelectorAll('.equipo');
    const cardTextColor = document.querySelectorAll('.equipo h3, p');
    const title = document.querySelector('.title');
    const visitorCounter = document.getElementById('counter');
    const colorDates = document.querySelectorAll('.fechas');
    const printerIcon = document.getElementById('printer-icon');
    var shareIcon = document.getElementById('share-icon');
    const h4NavBar = document.getElementById('h4-navbar');
    const titleStrong = document.querySelectorAll('strong');
    const contactToMe = document.querySelectorAll('.contactToMe a');
    const emphasisHTML = document.querySelectorAll('em');
    const langButton = document.getElementById('changeLanguageButton');
    const downloadIcon = document.getElementById('download-icon');
 
  
  modeToggle.addEventListener('click', function(event) {
      event.preventDefault();
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        menuHeader.classList.remove('dark-mode');
        backToTopIcon.classList.remove('dark-mode');
        title.classList.remove('dark-mode');
        h4NavBar.classList.remove('dark-mode');
        emphasisHTML.forEach(function(eme) {
          eme.classList.remove('dark-mode');
        });
        contactToMe.forEach(function(contact) {
          contact.classList.remove('dark-mode');
        });
        titleStrong.forEach(function(title) {
          title.classList.remove('dark-mode');
        });
        teamcard.forEach(function(teams) {
          teams.classList.remove('dark-mode');
        });
        cardTextColor.forEach(function(textColor) {
          textColor.classList.remove('dark-mode');
        })
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        printerIcon.classList.remove('dark-mode');
        downloadIcon.classList.remove('dark-mode');
        shareIcon.classList.remove('dark-mode');
        visitorCounter.classList.remove('dark-mode');
        langButton.classList.remove('dark-mode');
        colorDates.forEach(function(dates) {
          dates.classList.remove('dark-mode');
        });
    } else {
        body.classList.add('dark-mode');
        menuHeader.classList.add('dark-mode');
        backToTopIcon.classList.add('dark-mode');
        title.classList.add('dark-mode');
        h4NavBar.classList.add('dark-mode');
        emphasisHTML.forEach(function(eme) {
          eme.classList.add('dark-mode');
        })
        contactToMe.forEach(function(contact) {
          contact.classList.add('dark-mode');
        });
        titleStrong.forEach(function(title) {
          title.classList.add('dark-mode');
        });
        teamcard.forEach(function(teams) {
          teams.classList.add('dark-mode');
        });
        cardTextColor.forEach(function(textColor) {
          textColor.classList.add('dark-mode');
        })
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        printerIcon.classList.add('dark-mode');
        downloadIcon.classList.add('dark-mode');
        shareIcon.classList.add('dark-mode');
        visitorCounter.classList.add('dark-mode');
        langButton.classList.add('dark-mode');
        colorDates.forEach(function(dates) {
          dates.classList.add('dark-mode');
        });
    }
  });
});

/**----------------------|
   * Back to top button  |
------------------------*/
const backtotop = document.querySelector('.back-to-top');
   
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active');
       } else {
         backtotop.classList.remove('active');
       }
     };
   
window.addEventListener('scroll', toggleBacktotop);
};

/**-----------------------|
 # Share content Android  |
-------------------------*/

// Verificar si el navegador admite el Web Share API
if (navigator.share) {
  const shareButtons = document.querySelectorAll('.share-button');
  
  shareButtons.forEach(function(shareButton) {
    shareButton.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: 'Portfolio Calcagni Gabriel',
          text: '¡Ey echa un vistazo a mi portfolio online!',
          url: 'https://solidsnk86.github.io/mioPortfolioCG/',
        });
        console.log('Contenido compartido exitosamente.');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    });
  });
} else {
  console.log('El navegador no admite el Web Share API.');
}

/**-------------------|
 *  ------> Contacts  |
 --------------------*/

document.getElementById('correo').onclick = function() {
  window.open('mailto:calcagni.gabriel86@gmail.com');
};

function telegramMessageToMe() {
  const numeroTelegram = '2665290020';
  const mensajeTelegram = 'Buenas estoy interesado en tus servicios! Mi nombre es ..';
  const urlTelegram = `https://t.me/${numeroTelegram}?text=${encodeURIComponent(mensajeTelegram)}`;

  window.open(urlTelegram);
}

const telegramMessage = document.getElementById('telegram');
telegramMessage.onclick = () => {
  telegramMessageToMe();
}


/** -------> Social Media Links */

document.getElementById('github').onclick = function() {
  window.open('https://github.com/solidsnk86');
};

document.getElementById('linkedIn').onclick = function() {
  window.open('https://www.linkedin.com/');
};

//* Funciones para compartir en redes */
function compartirFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
}

function compartirWhatsapp() {
  var mensaje = "Echa un vistazo a éste currícumlum online!: " + window.location.href;
  window.open('https://wa.me/?text=' + encodeURIComponent(mensaje));
}

function compartirTwitter() {
  window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href));
}
function compartirLinkedIn() {
  var url = encodeURIComponent(window.location.href);
  var title = encodeURIComponent(document.title);
  var shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
  window.open(shareUrl, '_blank');
}

const followGithub = document.querySelector('.follow-github')
followGithub.onclick = () => {
  window.open('https://github.com/solidsnk86?tab=repositories')
}

document.getElementById("compartirTelegram").addEventListener("click", function() {
  var text = "¡Echa un vistazo a éste Currículum online atravéz enlace!";
  var telegramLink = "https://t.me/share/url?text=" + encodeURIComponent(text) + "&url=" + (url);

  window.open(telegramLink, "_blank");
});

/**||||||||||||||||||||||
 * CONTAINER CARD INFO  |
 ||||||||||||||||||||||*/

const masInfo = document.getElementById('mas-info');

masInfo.onclick = function() {
  card = document.createElement('div');
  card.classList.add('container-card');
  card.innerHTML = `
  <div class="container-card">
  <div class="Card-info">
  <i class="bx bx-left-arrow-alt" id="cerrarCarta" onclick="cerrarCarta();"></i>
  <div class="portfolio-info">
    <h2>Sobre mí</h2>
      <p>
      ¡Hola! Soy un desarrollador Front End, especializado en tecnologías como ReactJS + Vite, NestJS y NodeJS. Mi objetivo es seguir creciendo como desarrollador y contribuir a proyectos innovadores.
      </p>
      <div class="hr-container">
            <hr />
            <h4>Datos Personales</h4>
            <hr />
      </div>
      <ul>
      <div class="id-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Rwix5-rNzld_YB56GPkvs-dY_z5cEWyF9zzlmFDOeScC9Ig145dPpnD8-0UJ4kVSfBg&usqp=CAU" alt="Imagen de Perfil">
            <div class="id-name">
            <h3>Gabriel Calcagni</h3>
            <h4>Desarrollador Front End</h4>
            </div>
        </div>
        <li><i class="bi bi-chevron-right"></i> <strong>Cumpleaños:</strong> <span><i class="bx bx-cake"></i> Febrero 26, 1986</span></li>
        <li id="callHim"><i class="bi bi-chevron-right"></i> <strong>Teléfono:</strong> <span><i class="bx bx-phone"></i> +549 2665290020 </span></li>
        <li id="open-maps"><i class="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span><i class="bx bxs-map-pin"></i> Concarán, San Luis Arg.</span></li>
      </ul>
  </div>
  </div>
  </div>
  `;
  document.body.appendChild(card);
 
  // CALL TO ME
  document.getElementById('callHim').onclick = function() {
    window.open('tel: +5492665290020');
 };

/**
 * GOOGLE MAPS LOCATION
 */
document.getElementById('open-maps').addEventListener('click', function(event) {
  event.preventDefault();

if (/(android)/i.test(navigator.userAgent)) {
  window.location.href = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.7329178775276!2d-65.23677517567135!3d-32.559972587608264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d3056cee406bf3%3A0x80cbd8c58e2ca91d!2sNeoTecs!5e0!3m2!1ses-419!2sar!4v1693088406153!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else if (/(mac)/i.test(navigator.userAgent)) {
  window.location.href = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.7329178775276!2d-65.23677517567135!3d-32.559972587608264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d3056cee406bf3%3A0x80cbd8c58e2ca91d!2sNeoTecs!5e0!3m2!1ses-419!2sar!4v1693088406153!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else {
  window.open('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.7329178775276!2d-65.23677517567135!3d-32.559972587608264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d3056cee406bf3%3A0x80cbd8c58e2ca91d!2sNeoTecs!5e0!3m2!1ses-419!2sar!4v1693088406153!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
}
});
};


/**
 * CONTACT SECTION
 */

const contactClick = document.querySelector('.contacto');
let card;

contactClick.onclick = function() {
  card = document.createElement('div');
  card.classList.add('container-card');
  card.innerHTML = `
  <div class="container-card">
   <div class="Card-info">
    <i class="bx bx-left-arrow-alt" id="cerrarCarta" onclick="cerrarCarta();"></i>
    <div id="myForm">
      <h3>Contacto</h3>
      <br>
       <form id="miFormulario" action="" method="POST">
          <input id="nombre" type="text" name="nombre" placeholder="Tú Nombre" required pattern="[A-Za-z]+" title="Ingresa solo letras">
          <input id="telefono" type="text" name="telefono" placeholder="Número telefónico" pattern="[0-9]+" title="Ingresa solo números">
          <input id="correo" type="email" name="correo" placeholder="Dirección de correo" required>
          <input id="asunto" type="text" name="tema" placeholder="Tema">
          <textarea id="mensaje" name="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
          <div class="container-button">
            <button id="form" type="submit">
              ENVIAR
            </button>
          </div>
       </form>
    </div>
   </div>
  </div>
  `;
  document.body.appendChild(card);

// Botón submit - recepción de datos formulario //
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const telefono = document.querySelector("#telefono").value;
  const correo = document.querySelector("#correo").value;
  const mensaje = document.querySelector("#mensaje").value;

  if (nombre.trim() === "" || correo.trim() === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Supabase Endpoint y API Key
  const supabaseEndpoint = 'https://yyqjcfzddjozcwahhugs.supabase.co';
  const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cWpjZnpkZGpvemN3YWhodWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDE0MDMsImV4cCI6MjAxMTgxNzQwM30.ecvd0WDbKHG2InfkVpWAJg8feBhIo8gNSqJ7_mfiloo';

  const supabaseURL = `${supabaseEndpoint}/rest/v1/form_data`;

  fetch(supabaseURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseApiKey,
    },
    body: JSON.stringify({ nombre, correo, telefono, mensaje }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ocurrió un error al enviar el formulario.");
      }
      return response.json();
    })
    .then(() => {
      alert("Formulario enviado con éxito!");
      form.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
});
}

/**
 * GERART CARD
 */
const gerArt = document.getElementById('gerart-web');

gerArt.onclick = function() {
  card = document.createElement('div');
  card.classList.add('container-card');
  card.innerHTML = `
  <div class="container-card">
   <div class="Card-info">
    <i class="bx bx-left-arrow-alt" id="cerrarCarta" onclick="cerrarCarta();"></i>
    <div class="gerart-web">
      <h3>GerArt Web</h3><a center;" href="https://solidsnk86.github.io/GerArt/" target="_blank" title="Ir al link">Link <i class="bx bx-link-external"></i></a>
      <br>
     <iframe src="https://solidsnk86.github.io/GerArt/" alt="Web de Arte"></iframe>
     <div class="hr-container">
            <hr />
            <h4>Descripción</h4>
            <hr />
      </div>
     <p>Éste es una web dónde he usado Bootstrap como frame, editado para el portfolio de arte. Lenguajes que he usado para ésta web:<br></p>
     <div class="languajes">
     <i class="bx bxl-html5 html5"></i><i class="bx bxl-css3 css3"></i><i class="bx bxl-javascript javascript"></i><i class="bx bxl-php php"></i>
     </div>
    </div>
   </div>
  </div>
  `;
  document.body.appendChild(card);
};

/**
 * WEB FORM
 */
const webForm = document.getElementById('web-form');

webForm.onclick = function() {
  card = document.createElement('div');
  card.classList.add('container-card');
  card.innerHTML = `
  <div class="container-card">
   <div class="Card-info">
    <i class="bx bx-left-arrow-alt" id="cerrarCarta" onclick="cerrarCarta();"></i>
    <div class="gerart-web">
      <h3>Formulario Web</h3><a center;" href="https://solidsnk86.github.io/formularioWeb/" target="_blank" title="Ir al link">Link <i class="bx bx-link-external"></i></a>
      <br>
     <iframe src="https://solidsnk86.github.io/formularioWeb/" alt="Web de Arte"></iframe>
     <div class="hr-container">
            <hr />
            <h4>Descripción</h4>
            <hr />
      </div>
     <p>Éste es un formulario para facturación online con funciones de suma, multiplicación y porcentaje, se puede imprimir y descargar PDF para enviar.<br></p>
     <div class="languajes">
     <i class="bx bxl-html5 html5"></i><i class="bx bxl-css3 css3"></i><i class="bx bxl-javascript javascript"></i>
     </div>
    </div>
    </div>
  </div>
  `;
  document.body.appendChild(card);
};

/**
 * NEO PORTFOLIO
 */
const neoWeb = document.getElementById('neo-fotos');

neoWeb.onclick = function() {
  card = document.createElement('div');
  card.classList.add('container-card');
  card.innerHTML = `
  <div class="container-card">
   <div class="Card-info">
    <i class="bx bx-left-arrow-alt" id="cerrarCarta" onclick="cerrarCarta();"></i>
    <div class="gerart-web">
      <h3>Neo Fotografía</h3><a center;" href="https://solidsnk86.github.io/Neo-Fotografia/gallery-single.html" target="_blank" title="Ir al link">Link <i class="bx bx-link-external"></i></a>
      <br>
     <iframe src="https://solidsnk86.github.io/Neo-Fotografia/gallery-single.html" alt="Web de Arte"></iframe>
     <div class="hr-container">
            <hr />
            <h4>Descripción</h4>
            <hr />
      </div>
     <p>Neo fotografía es un portfolio de fotografía deportiva hecha con Bootstrap y he ido añadiendo funciones Javascript y PHP para el formulario de contacto.<br></p>
     <div class="languajes">
     <i class="bx bxl-html5 html5"></i><i class="bx bxl-css3 css3"></i><i class="bx bxl-javascript javascript"></i><i class="bx bxl-php php"></i>
     </div>
    </div>
    </div>
  </div>
  `;
  document.body.appendChild(card);
};

/**
 * NEOTECS 
 */
const neoTecs = document.getElementById('neo-tecs');

neoTecs.onclick = function() {
  card = document.createElement('div');
  card.classList.add('container-card');
  card.innerHTML = `
  <div class="container-card">
   <div class="Card-info">
    <i class="bx bx-left-arrow-alt" id="cerrarCarta" onclick="cerrarCarta();"></i>
    <div class="gerart-web">
      <h3>NeoTecs</h3><a center;" href="https://neotecs.netlify.app/" target="_blank" title="Ir al link">Link <i class="bx bx-link-external"></i></a>
      <br>
     <img src="assets/img/Screenshot_20231005-202040-NeoTecs.png" with="400" height="400" />
     <div class="hr-container">
            <hr />
            <h4>Descripción</h4>
            <hr />
      </div>
     <p>Mi primer web! La creé con el fin de informar sobre la configuración de equipos inlambricos (Tp-Link | Ubiquiti). Tiene un chat-bot con JS, PHP Form, algunas cookies.</p>
     <div class="languajes">
     <i class="bx bxl-html5 html5"></i><i class="bx bxl-css3 css3"></i><i class="bx bxl-javascript javascript"></i><i class="bx bxl-php php"></i>
     </div>
    </div>
    </div>
  </div>
  `;
  document.body.appendChild(card);
};


/**%%%%%%%%%%%%%
 * Imprimir CV %
 %%%%%%%%%%%%%*/
const printerButton = document.getElementById('printer-icon');
 
printerButton.addEventListener('click', () => {
  window.print();
})

function cerrarCarta() {
  document.body.removeChild(card);
}

document.addEventListener('dragstart', function (e) {
  e.preventDefault();
});

/**
 * Translate Button CV
 */
var changeLanguageButton = document.getElementById('changeLanguageButton');

changeLanguageButton.addEventListener('click', function() {
  if (window.location.href.indexOf('index_en.html') !== -1) {
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 400);
  } else {
    setTimeout(() => {
      window.location.href = 'index_en.html';
    }, 400);
  }
});

changeLanguageButton.style.userSelect = 'none';

/**
 * CV DOWNLOAD
 */
var botonDescargar = document.getElementById("download-icon");

botonDescargar.addEventListener("click", function() {

  var rutaAlArchivoPDF = "assets/pdf-download/Gabriel Calcagni.pdf";

  var enlace = document.createElement("a");
  enlace.href = rutaAlArchivoPDF;
  enlace.target = "_blank"; 
  enlace.download = "Gabriel Calcagni.pdf";
 
  enlace.click();
});

const downloadPDF = document.querySelector('.PDF-download');

downloadPDF.onclick = () => {
  const routePDF = "assets/pdf-download/Gabriel Calcagni - English Lang.pdf";

  const linkPDF = document.createElement('a');
  linkPDF.href = routePDF;
  linkPDF.target = "_blank";
  linkPDF.download = "Gabriel Calcagni - English Lang.pdf";

 linkPDF.click();
};
