const form = document.querySelector('[data-form]')

form.addEventListener("submit", (evento) => {
    const url = document.querySelector('[data-url]').value
    const nombre = document.querySelector('[data-name]').value
    const precio = document.querySelector('[data-precio]').value


    productosServicios.crearProductos(url, nombre, precio)
    .then(respuesta => {
        window.location.href = "../index.html"
        console.log(respuesta)
    } ).catch(error => {
        console.log(error)
    })
})