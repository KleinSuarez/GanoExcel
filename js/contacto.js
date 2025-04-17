document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    const whatsappButton = document.getElementById('send-whatsapp');
    const form = document.getElementById('whatsapp-form');

    if (whatsappButton && form) {
        whatsappButton.addEventListener('click', function() {
            const numeroWhatsapp = '+573126148215';

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa los campos requeridos (Nombre, Email, Mensaje).');
                return; 
            }

            let mensajeWhatsapp = `*Nuevo Contacto desde la Web Gano Excel* 📨\n\n`;
            mensajeWhatsapp += `*Nombre:* ${nombre}\n`;
            mensajeWhatsapp += `*Email:* ${email}\n`;
            if (telefono) { 
                mensajeWhatsapp += `*Teléfono:* ${telefono}\n`;
            }
            mensajeWhatsapp += `*Interesado en:* ${asunto}\n\n`;
            mensajeWhatsapp += `*Mensaje:*\n${mensaje}`;

            const mensajeCodificado = encodeURIComponent(mensajeWhatsapp);

       
            const whatsappURL = `https://wa.me/${numeroWhatsapp}?text=${mensajeCodificado}`;

            window.open(whatsappURL, '_blank');
            // (Opcional) Puedes añadir .focus() si quieres intentar traer la nueva pestaña al frente
            // window.open(whatsappURL, '_blank').focus();

             // (Opcional) Puedes limpiar el formulario después de intentar enviar
             form.reset();
        });
    }
});