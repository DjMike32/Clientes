var categorias =[
    {
        nombre: 'Comida Rapida',
        icono: 'fa-burger',
        colorIcono: 'blue',
        backgroundColor: 'rgb(247,196,0)',
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

var datosUsuario =[{
    nombre: '', 
    apellido: '', 
    codigo: '', 
    celular: '', 
    correo: '', 
    password: ''

}];


function generarCategorias(){
    categorias.forEach(function(categoria){
        document.getElementById('categorias').innerHTML+=
        ` <div class=" col-6" type="button" onclick="generarMenus()">
        <div class="cards-categorias" style="background-color:${categoria.backgroundColor}">
            <i class="fa-solid ${categoria.icono} iconos-categorias" style="color:${categoria.colorIcono}"></i>
            <p style="color:${categoria.colorTexto}">${categoria.nombre}</p>
        </div>
    </div>`
    });
};

generarCategorias();


function comenzar(){
    document.getElementById('landing-page').classList.add('oculto');
    document.getElementById('registro').classList.remove('oculto');
};

function regresar(){
    document.getElementById('registro').classList.add('oculto');
    document.getElementById('landing-page').classList.remove('oculto');
    document.getElementById('iniciar-sesion').classList.add('oculto');

};

function validarCampo(){
    if (document.getElementById('nombre').value==''){
        document.getElementById('nombre').classList.add('input-success');
    }
    
    document.getElementById('apellido').classList.add('input-success');
    document.getElementById('celular').classList.add('input-success');
    document.getElementById('correo').classList.add('input-success');
    document.getElementById('password').classList.add('input-success');
};

function guardar(){
    console.log('Nombre:', document.getElementById('nombre').value);
    console.log('Apellido:', document.getElementById('apellido').value);
    console.log('celular:', document.getElementById('celular').value);
    console.log('correo:', document.getElementById('correo').value);
    console.log('Password:', document.getElementById('password').value);
};

function iniciarSesion(){
    document.getElementById('landing-page').classList.add('oculto');
    document.getElementById('iniciar-sesion').classList.remove('oculto');
}