/*----------------------------------- URL Refresh & Scroll Top -----------------------------------*/
// Limpia la URL al cargar y sube al inicio
window.onload = function() {
    if (window.location.hostname) {
        history.replaceState(null, null, ' ');
    }
    window.scrollTo(0, 0);
}

/*----------------------------------- Lógica Principal -----------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    
    const header = document.querySelector("header");
    const menuToggle = document.querySelector("#mobile-menu");
    const nav = document.querySelector("nav");

    // 1. HEADER STICKY (Cambio de color al bajar)
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. MENÚ HAMBURGUESA (Abrir/Cerrar)
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            // Alternar la clase 'active' en el botón y el menú
            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }
    
    // 3. CERRAR MENÚ AL TOCAR UN ENLACE (Mejora de experiencia de usuario)
    // Esto hace que si tocas "Quiénes Somos" en el móvil, el menú se cierre automáticamente
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            nav.classList.remove("active");
        });
    });

});



/* =============================================================
   APP.JS - GESTOR DE COMPONENTES Y LÓGICA
   ============================================================= */

// 1. DEFINICIÓN DEL HEADER
const headerHTML = `
    <div class="logo reveal">
        <a href="index.html"><img src="./imgs/logoNav.webp" alt="logoNav"></a>
    </div>
    <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
    </div>
    <nav>
        <ul class="nav-list reveal"> 
            <li><a href="index.html">INICIO</a></li>
            <li><a href="quienessomos.html">QUIÉNES SOMOS</a></li>
            <li><a href="inversioninteligente.html">INVERSIÓN INTELIGENTE</a></li>
            <li><a href="reservafecha.html">RESERVA TU FECHA</a></li>
            <li>
                <a href="https://www.youtube.com/@EmprendeElCohete" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/logoyoutube.webp" alt="logoyoutube">
                </a>
            </li>
        </ul>
    </nav>
`;

// 2. DEFINICIÓN DEL FOOTER
const footerHTML = `
    <div class="footer-content">
        <div class="footer-logo reveal">
            <img src="./imgs/logoFooter.webp" alt="logoFooter">
        </div>
        <div class="social-links reveal">
            <a href="https://www.facebook.com/ang3lcoh" target="_blank" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
            <a href="https://www.instagram.com/orbita.medica/" target="_blank" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://www.youtube.com/@EmprendeElCohete" target="_blank" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            <a href="mailto:hello@angelcorral.ai" aria-label="Correo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
            <a href="https://wa.me/526561431434" target="_blank" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>
        </div>
    </div>
    <div class="footer-copy"><p>&copy; 2026 Orbita Médica. Todos los derechos reservados.</p></div>
`;

/* =============================================================
   3. INICIALIZACIÓN (CUANDO CARGA LA PÁGINA)
   ============================================================= */
document.addEventListener("DOMContentLoaded", function() {

    // A. INYECTAR HEADER Y FOOTER
    const headerContainer = document.querySelector("header");
    const footerContainer = document.querySelector("footer");
    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // B. MARCAR LA PÁGINA ACTIVA
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") currentPage = "index.html"; 
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // C. MENU HAMBURGUESA Y HEADER SCROLL
    const header = document.querySelector("header");
    const menuToggle = document.querySelector("#mobile-menu");
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    });

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }

    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            nav.classList.remove("active");
        });
    });

    // --- D. LÓGICA DE ANIMACIÓN SCROLL REVEAL (NUEVO) ---
    // Detectamos todos los elementos con la clase "reveal"
    const reveals = document.querySelectorAll('.reveal');

    // Configuración: la animación inicia cuando el 15% del elemento es visible
    const observerOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" // Un pequeño margen para que no aparezca justo al ras
    };

    const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Si no se ve, no hacemos nada
            } else {
                // Si se ve, le ponemos la clase "active"
                entry.target.classList.add('active');
                // Dejamos de observarlo para que no se anime una y otra vez
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Activamos el observador en cada elemento
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});

// Scroll Top
window.onload = function() {
    if (window.location.hostname) history.replaceState(null, null, ' ');
}



// --- B. MARCAR LA PÁGINA ACTIVA ---
// 1. Obtenemos el nombre del archivo actual (ej: 'quienessomos.html')
let currentPage = window.location.pathname.split("/").pop();

// 2. Si el resultado está vacío (ej: tudominio.com/), asumimos que es index.html
if (currentPage === "") currentPage = "index.html"; 

// 3. Buscamos todos los enlaces del menú
const navLinks = document.querySelectorAll("nav ul li a");

// 4. Recorremos los enlaces y comparamos
navLinks.forEach(link => {
    // Si el href del enlace coincide con la página actual...
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); // ...le agregamos la clase 'active'
    }
});


// --- E. MENSAJES DE FORMULARIO (PHP FEEDBACK) ---
    // Detectar parámetros en la URL (ej: ?estado=exito)
    const urlParams = new URLSearchParams(window.location.search);
    const estado = urlParams.get('estado');

    if (estado) {
        // Creamos un div para la notificación
        const alerta = document.createElement('div');
        alerta.style.position = 'fixed';
        alerta.style.top = '20px';
        alerta.style.right = '20px';
        alerta.style.padding = '20px 30px';
        alerta.style.borderRadius = '10px';
        alerta.style.color = '#fff';
        alerta.style.fontFamily = 'TTBold, sans-serif';
        alerta.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        alerta.style.zIndex = '9999';
        alerta.style.animation = 'fadeIn 0.5s ease';

        if (estado === 'exito') {
            alerta.style.backgroundColor = '#4CAF50'; // Verde
            alerta.innerHTML = '✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
        } else if (estado === 'error_campos') {
            alerta.style.backgroundColor = '#f44336'; // Rojo
            alerta.innerHTML = '⚠️ Por favor, completa todos los campos obligatorios.';
        } else if (estado === 'error_servidor') {
            alerta.style.backgroundColor = '#FF9800'; // Naranja
            alerta.innerHTML = '❌ Hubo un error al enviar. Intenta por WhatsApp.';
        }

        document.body.appendChild(alerta);

        // Quitar la alerta después de 5 segundos
        setTimeout(() => {
            alerta.style.opacity = '0';
            setTimeout(() => alerta.remove(), 500);
        }, 5000);

        // Limpiar la URL para que no salga la alerta si recarga
        window.history.replaceState(null, null, window.location.pathname);
    }