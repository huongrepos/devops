OC.L10N.register(
    "suspicious_login",
    {
    "New login location detected" : "Se ha detectado una nueva ubicación de inicio de sesión",
    "A new login into your account was detected. The IP address %s was classified as suspicious. If this was you, you can ignore this message. Otherwise you should change your password." : "Se ha detectado un nuevo inicio de sesión en tu cuenta. La IP %s parece sospechosa. Si fuiste tu, puedes ignorar este mensaje. Si no, debes cambiar tu contraseña.",
    "Suspicious Login" : "Suspicious Login",
    "More information ↗" : "Más información ↗",
    "You can get more info by pressing the button which will open %s and show info about the suspicious IP-address." : "Puedes obtener más información al presionar el botón, que abrirá %s y te mostrará información sobre la dirección IP sospechosa.",
    "New login detected" : "Nuevo inicio de sesión detectado",
    "Detect and warn about suspicious IPs logging into Nextcloud\n\t" : "Detectar y advierta sobre las IP sospechosas que inician sesión en la nube\n\t",
    "Suspicious login detection" : "Detector de inicios de sesión sospechosos",
    "The suspicious login app is enabled on this instance. It will keep track of IP addresses users successfully log in from and build a classifier that warns if a new login comes from a suspicious IP address." : "La app \"Suspicious Login\" está activada en esta instancia. Registra las direcciones IP desde las que los usuarios inician sesión y crea un clasificador que advierte si un nuevo inicio de sesión proviene de una dirección IP sospechosa.",
    "Training data statistics" : "Entrenador del modelo estadístico:",
    "So far the app has captured {total} logins (including client connections), of which {distinct} are distinct (IP, UID) tuples." : "Hasta ahora, la aplicación ha capturado {total} inicios de sesión (incluidas las conexiones de clientes), de los cuales {distinct} tienen diferentes datos (IP, UID).",
    "IPv4" : "IPv4",
    "IPv6" : "IPv6",
    "Classifier model statistics" : "Clasificador del modelo estadístico:",
    "No classifier model has been trained yet. This most likely means that you just enabled the app recently. Because the training of a model requires good data, the app waits until logins of at least {days} days have been captured." : "Aún no ha sido entrenado ningún modelo clasificador. Probablemente signifique que acabas de habilitar la aplicación recientemente. Debido a que el entrenamiento del modelo requiere una buena cantidad de datos, la aplicación espera hasta que se hayan capturado los inicios de sesión de al menos {days} días.",
    "During evaluation, the latest model (trained {time}) has shown to capture {recall}% of all suspicious logins (recall), whereas {precision}% of the logins classified as suspicious are indeed suspicious (precision). Below you see a visualization of historic model performance." : "Durante el funcionamiento, el último modelo (entrenado {time}) ha demostrado reconocer el {recall}% de todos los inicios de sesión sospechosos (sensibilidad), mientras que {precision}% de los inicios de sesión clasificados como sospechosos han sido realmente sospechosos (precisión). A continuación se muestra una visualización del rendimiento del modelo histórico.",
    "Precision" : "Precisión",
    "Recall" : "Sensibilidad"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
