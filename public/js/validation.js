document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const inputs = document.querySelectorAll("#registerForm input");
    let valid = true;

    // Limpiar mensajes de error previos
    inputs.forEach((input) => {
        input.classList.remove("is-invalid"); // Asegúrate de eliminar la clase antes de la validación
    });
  
    inputs.forEach((input) => {
        if (!input.value.trim()) { // Validar si el campo no está vacío (y eliminar espacios)
            valid = false;
            input.classList.add("is-invalid"); // Agrega la clase si no es válido
        }
    });
  
    if (valid) {
        alert("Registration successful!");
        e.target.submit(); // Procesa el formulario si es válido
    }
});
