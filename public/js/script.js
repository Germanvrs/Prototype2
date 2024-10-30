function registerUser() {
    const firstname = document.querySelector('.registerBox .input:nth-child(1)').value;
    const lastname = document.querySelector('.registerBox .input:nth-child(2)').value;
    const email = document.querySelector('.registerBox .input:nth-child(3)').value;
    const password = document.querySelector('.registerBox .input:nth-child(4)').value;

    if (firstname && lastname && email && password) {
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registro exitoso!');
                // Redireccionar o limpiar el formulario si es necesario
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
        alert('Por favor completa todos los campos.');
    }
}
