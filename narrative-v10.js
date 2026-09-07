(() => {
  const worlds = [
    ["VILLA PUERTO", "Nora mira el horizonte: Bashkar saldra de la mesa de trabajo y necesitara un terreno conocido.", "Mapa de arquitectura: dibujo de componentes, datos, puertos y dependencias antes de desplegar."],
    ["BOSQUE COMMIT", "Ivo protege los senderos por los que el codigo puede regresar sin perder su historia.", "Git: sistema que registra cambios; un commit claro explica que cambio y por que."],
    ["CUEVA DVC", "Dara encuentra una huella distinta en cada experimento de Aliado Libre.", "Reproducibilidad: poder repetir un resultado con los mismos datos, codigo y configuracion."],
    ["TALLER PY", "Paz abre una caja de herramientas: en otro computador, las suposiciones ocultas se rompen.", "Dependencia: libreria o requisito externo que la aplicacion necesita para funcionar."],
    ["PUERTO API", "Ada escucha a Lead Station: los servicios necesitan reglas claras para hablar sin adivinar.", "API: contrato para que dos programas intercambien solicitudes, respuestas y errores."],
    ["PICO DGX", "Sol enciende la futura maquina propia: su potencia se cuida, se reparte y se observa.", "Contenedor: paquete aislado con una aplicacion y las dependencias que necesita."],
    ["CIUDAD TENANCY", "Leo vigila la ciudad: cada cliente debe caminar por su propio carril de datos.", "Tenant: organizacion cliente dentro de un SaaS; sus datos nunca deben filtrarse a otra."],
    ["FARO RELEASE", "Mara ve parpadear el faro: un incidente se resuelve con calma, senales y una salida segura.", "Rollback: volver una version estable cuando una liberacion causa dano."],
  ];
  const extra = (question) => question.includes("SSH") ? "SSH es un canal cifrado para administrar una maquina remota usando una llave, no una contrasena enviada por chat."
    : question.includes("merge") ? "Merge combina cambios de ramas; un conflicto pide entender ambas intenciones antes de decidir."
    : question.includes("DVC") ? "DVC versiona referencias a datos pesados para saber exactamente con que corpus se entreno."
    : question.includes("GPU") ? "Una GPU acelera calculos paralelos, pero es un recurso finito: pon limites y monitorea su uso."
    : question.includes("webhook") ? "Un webhook avisa que ocurrio un evento; idempotencia evita que un reintento produzca dos acciones."
    : question.includes("health") ? "Un health check es una ruta comprobable que indica si el servicio puede atender trabajo."
    : "Piensa en la respuesta como una tecnica de combate: debe reducir riesgo y dejar una forma segura de recuperarte.";
  const update = () => {
    const place = document.querySelector("#place")?.textContent || "";
    const target = document.querySelector("#story");
    const question = document.querySelector("#question")?.textContent || "";
    if (!target) return;
    const item = worlds.find(([key]) => place.includes(key)) || worlds[0];
    target.innerHTML = `<b>ESCENA</b> · ${item[1]}<br><br><b>CONCEPTO</b> · ${item[2]}<br><br><b>PISTA DE VIBECODE</b> · ${extra(question)}`;
  };
  new MutationObserver(update).observe(document.body, { childList: true, subtree: true, characterData: true });
  setTimeout(update, 80);
})();
