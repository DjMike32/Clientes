var categorias =[
    {
        nombre: 'Comida Rapida',
        icono: 'fa-burger',
        colorIcono: 'blue',
        backgroundColor: 'rgb(247,196,0)',
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

function guardar(){

    validarCampo(this.id);
    // validarCampo('apellido-cliente');
    // validarCampo('celular-cliente');
    // validarCampo('correo-cliente');
    // validarCampo('password-cliente');
    
 };

function validarCampoVacio(id){
    if (document.getElementById(id).value==''){
        document.getElementById(id).classList.add('input-error');
        document.getElementById(id).classList.remove('input-success');
        a=1
    } else {
        document.getElementById(id).classList.add('input-success');
        document.getElementById(id).classList.remove('input-error');
        a=0
    };
};

function validarCorreo(id){
    const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex.test(document.getElementById(id).value)){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
        a=0;
    }   else {
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
        a=1;
    }
};

function validarCelular(id){
    const regex = /^\(?[0-9]{3}\)?[ ]?([0-9]{4})[-]?([0-9]{4})$/;
    
    if (regex.test(document.getElementById(id).value)){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
        a=0;
        
    }   else {
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
        a=1;
    }
};
const a='';

function validarPassword(id){
    const regex = /([^A-Za-z].{7})|(.[^A-Za-z].{6})|(.{2}[^A-Za-z].{5})|(.{3}[^A-Za-z].{4})|(.{4}[^A-Za-z].{3})|(.{5}[^A-Za-z].{2})|(.{6}[^A-Za-z].)|(.{7}[^A-Za-z])/
    
    if (regex.test(document.getElementById(id).value)){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
        a=0;
        
    }   else {
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
        a=1;
    }
};
    
   


function iniciarSesion(){
    document.getElementById('landing-page').classList.add('oculto');
    document.getElementById('iniciar-sesion').classList.remove('oculto');
}

function resetForm() {
    console.log('Nombre:', document.getElementById('nombre-cliente').value);
    console.log('Apellido:', document.getElementById('apellido-cliente').value);
    console.log('celular:', document.getElementById('celular-cliente').value);
    console.log('correo:', document.getElementById('correo-cliente').value);
    console.log('Password:', document.getElementById('password-cliente').value);
    document.getElementById('form-registro').reset();
    document.getElementById('nombre-cliente').classList.remove('input-success', 'input-error');
    document.getElementById('apellido-cliente').classList.remove('input-success','input-error');
    document.getElementById('celular-cliente').classList.remove('input-success' ,'input-error');
    document.getElementById('correo-cliente').classList.remove('input-success', 'input-error');
    document.getElementById('password-cliente').classList.remove('input-success', 'input-error');
   
  }

  

