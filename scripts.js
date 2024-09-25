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
    })
    .catch(error => console.error(error))
