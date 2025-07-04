function simularIngreso() {
  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;

  console.log("Simulando captura de datos:");
  console.log("Usuario:", usuario);
  console.log("Clave:", clave);

  alert("Datos recibidos (simulados). Ahora redirigiendo al dashboard...");
  window.location.href = "dashboard.html";

  return false;
}