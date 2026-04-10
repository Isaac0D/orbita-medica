<?php
// enviar.php

// 1. Configuración del correo de destino
// AQUÍ PONES TU CORREO REAL DONDE QUIERES RECIBIR LAS RESERVAS
$destinatario = "hello@angelcorral.ai"; 

$asunto = "Nueva Reserva desde Órbita Médica";

// 2. Verificamos que los datos vengan por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 3. Recogemos y limpiamos los datos (Seguridad básica)
    $nombre = strip_tags(trim($_POST["nombre"]));
    $especialidad = strip_tags(trim($_POST["especialidad"]));
    $telefono = strip_tags(trim($_POST["telefono"]));
    $correo = filter_var(trim($_POST["correo"]), FILTER_SANITIZE_EMAIL);
    $mensaje = strip_tags(trim($_POST["mensaje"]));

    // 4. Validamos campos obligatorios
    if (empty($nombre) || empty($telefono) || empty($correo) || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        // Si falta algo, redirigimos con error
        header("Location: reservafecha.html?estado=error_campos");
        exit;
    }

    // 5. Construimos el cuerpo del correo
    $contenido = "Has recibido una nueva solicitud de reserva:\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Especialidad: $especialidad\n";
    $contenido .= "Telefono: $telefono\n";
    $contenido .= "Correo: $correo\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";
    $contenido .= "----------------------------------\n";
    $contenido .= "Enviado desde el sitio web Orbita Medica";

    // 6. Cabeceras del correo (Para que no llegue como SPAM tan fácil)
    $headers = "From: $nombre <$correo>\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 7. Enviamos el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        // ÉXITO: Redirigimos con variable de éxito
        header("Location: reservafecha.html?estado=exito");
    } else {
        // ERROR DEL SERVIDOR
        header("Location: reservafecha.html?estado=error_servidor");
    }

} else {
    // Si intentan entrar directo a enviar.php sin enviar formulario
    header("Location: reservafecha.html");
}
?>