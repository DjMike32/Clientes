var categorias =[
    {
        nombre: 'Comida Rapida',
        icono: 'fa-burger',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Café y Postres',
        icono: 'fa-mug-saucer',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Ropa',
        icono: 'fa-shirt',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Medicamentos',
        icono: 'fa-pills',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Accesorios',
        icono: 'fa-headphones',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Mascotas',
        icono: 'fa-dog',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Entrenamiento',
        icono: 'fa-dumbbell',
        colorIcono: 'blue',
        backgroundColor: '#FFFFFF',
        colorTexto: '#FF6282'
    },
    {
        nombre: 'Utiles Escolares',
        icono: 'fa-pen-ruler',
        colorIcono: 'blue',
        backgroundColor: '#FFFFcF',
        colorTexto: '#FF6282'
    },
    
]


function generarCategorias(){
    categorias.forEach(function(categoria){
        document.getElementById('categorias').innerHTML+=
        ` <div class=" col-6" type="button">
        <div class="cards-categorias" style="background-color:${categoria.backgroundColor}">
            <i class="fa-solid ${categoria.icono} iconos-categorias" style="color:${categoria.colorIcono}"></i>
            <p style="color:${categoria.colorTexto}">${categoria.nombre}</p>
        </div>
    </div>`
    });
};

// generarCategorias();


function comenzar(){
    document.getElementById('landing-page').classList.add('oculto');
    document.getElementById('registro').classList.remove('oculto');
};