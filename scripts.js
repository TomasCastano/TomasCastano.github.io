fetch('./taller.json')
    .then(response => response.json())
    .then(data => {
        const navTitle = document.querySelector('.navbar-brand')
        navTitle.innerHTML = data.datos_tienda.nombre
        
        const headerTitle = document.querySelector('#title')
        headerTitle.innerHTML = data.datos_tienda.nombre

        let productos = ''
        data.computadores.forEach(computador => {
            productos += `
            <tr>
                <td>${computador.nombre}</td>
                <td>${computador.descripcion}</td>
                <td>$${computador.precio}</td>
            </tr>`
        })
        
        let table = document.querySelector('#computadores')
        table.innerHTML = `
        <thead>
            <tr>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>precio</th>
            </tr>
        </thead>
        <tbody>
            ${productos}
        </tbody>
        `
        let direccion = document.querySelector('#direccion')
        direccion.innerHTML = data.datos_tienda.direccion
        let telefono = document.querySelector('#telefono')
        telefono.innerHTML = data.datos_tienda.telefono
        let correo = document.querySelector('#correo')
        correo.innerHTML = data.datos_tienda.correo
    
    })
    .catch(error => console.error(error))
