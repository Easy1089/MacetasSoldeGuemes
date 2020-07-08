const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios(){
    fetch('usuarios.json')
        .then(respuesta => respuesta.json()) 
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.producto}</td>
                    <td>${usuario.descripcion}</td>
                    <td>${usuario.precio}</td>
                `;
                tabla.appendChild(row);                
            });
        }) 
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();