var categorias =[
    {
        nombre: 'Comida Rapida',
        icono: 'fa-burger',
        colorIcono: 'orange',
        backgroundColor: 'rgb(51, 58, 90)',
        colorTexto: 'white',
        funcion: 'ComidaRapida'
    },
    {
        nombre: 'Ropa',
        icono: 'fa-shirt',
        colorIcono: 'red',
        backgroundColor: 'rgb(51, 58, 90)',
        colorTexto: 'white',
        funcion: 'Ropa'
    },
    {
        nombre: 'Salud',
        icono: 'fa-pills',
        colorIcono: 'green',
        backgroundColor: 'rgb(51, 58, 90)',
        colorTexto: 'white',
        funcion: 'Salud'
    },
    {
        nombre: 'Accesorios',
        icono: 'fa-headphones',
        colorIcono: 'pink',
        backgroundColor: 'rgb(51, 58, 90)',
        colorTexto: 'white',
        funcion: 'Accesorios'
    },
]
var comidaRapidas =[
    {
        nombre: 'Burger King',
        descripcion: 'Hamburguesas-papas',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5',
        menu:{
            Combo1: {
                nombreCombo: 'Whopper-doble',
                descripcion: 'Hamburguesa whopper con doble carne, papas y refresco',
                tamanio: 'Mediano',
                Precio: 'L 159'
            },
            Combo2: {
                nombreCombo: 'Combo-amigos',
                descripcion: 'Dos hamburguesas whopper con queso, papas y refresco',
                tamanio: 'Pequenio',
                Precio: 'L 189'
            },
            Combo3: {
                nombreCombo: 'Combo-familiar',
                descripcion: 'dos hamburguesas whopper con queso mas un king de pollo y una whopper Texana, papas y refresco en cada una',
                tamanio: 'Grande',
                Precio: 'L 349'
            },
            Combo4: {
                nombreCombo: 'Combo-economico',
                descripcion: 'Hamburguesa regular con queso mas papas y refresco pequenios',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            }
        }
    },
    {
        nombre: 'Pizza Hut',
        descripcion: 'Pizzas-pastas',
        locales: '7 disponibles',
        horaDeAtencion: '8am - 9pm',
        calificación: '4',
        menu:{
            Combo1: {
                nombreCombo: 'Pizza triple carne',
                descripcion: 'Pizza familiar elaborada con tocino, jamón y pepperoni',
                tamanio: 'Grande',
                Precio: 'L 199'
            },
            Combo2: {
                nombreCombo: 'Pizza personal',
                descripcion: 'Pizza de pepperoni para una persona ',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            },
            Combo3: {
                nombreCombo: 'Pasta familiar',
                descripcion: 'Dos ordenes de lasania acompaniadas de dos ensaladas y 4 refrescos',
                tamanio: 'Mediano',
                Precio: 'L 279'
            },
            Combo4: {
                nombreCombo: 'Combo-economico',
                descripcion: 'Hamburguesa regular con queso mas papas y refresco pequenios',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            }
        }
    },
    {
        nombre: 'Dennys',
        descripcion: 'Desayunos-sandwiches',
        locales: '3 disponibles',
        horaDeAtencion: 'las 24 horas',
        calificación: '5',
        menu:{
            Combo1: {
                nombreCombo: 'Pizza triple carne',
                descripcion: 'Pizza familiar elaborada con tocino, jamón y pepperoni',
                tamanio: 'Grande',
                Precio: 'L 199'
            },
            Combo2: {
                nombreCombo: 'Pizza personal',
                descripcion: 'Pizza de pepperoni para una persona ',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            },
            Combo3: {
                nombreCombo: 'Pasta familiar',
                descripcion: 'Dos ordenes de lasania acompaniadas de dos ensaladas y 4 refrescos',
                tamanio: 'Mediano',
                Precio: 'L 279'
            },
            Combo4: {
                nombreCombo: 'Combo-economico',
                descripcion: 'Hamburguesa regular con queso mas papas y refresco pequenios',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            }
        }
    },
    {
        nombre: 'Popeyes',
        descripcion: 'Pollo-mariscos',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5',
        menu:{
            Combo1: {
                nombreCombo: 'Pizza triple carne',
                descripcion: 'Pizza familiar elaborada con tocino, jamón y pepperoni',
                tamanio: 'Grande',
                Precio: 'L 199'
            },
            Combo2: {
                nombreCombo: 'Pizza personal',
                descripcion: 'Pizza de pepperoni para una persona ',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            },
            Combo3: {
                nombreCombo: 'Pasta familiar',
                descripcion: 'Dos ordenes de lasania acompaniadas de dos ensaladas y 4 refrescos',
                tamanio: 'Mediano',
                Precio: 'L 279'
            },
            Combo4: {
                nombreCombo: 'Combo-economico',
                descripcion: 'Hamburguesa regular con queso mas papas y refresco pequenios',
                tamanio: 'Pequenio',
                Precio: 'L 79'
            }
        }
    }
]
var Ropas=[
    {
        nombre: 'Palacio de los niños',
        descripcion: 'Bebés - niños',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5'
    },
    {
        nombre: 'Carrion',
        descripcion: 'Moda - formal',
        locales: '7 disponibles',
        horaDeAtencion: '8am - 9pm',
        calificación: '4'
    },
    {
        nombre: 'Unlimited',
        descripcion: 'Jovenes - casual',
        locales: '3 disponibles',
        horaDeAtencion: 'las 24 horas',
        calificación: '5'
    },
    {
        nombre: 'Sportline',
        descripcion: 'Zapatos - deportivo',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5'
    }
]
var Salud =[
    {
        nombre: 'Farmacia Siman',
        descripcion: 'Farmacia',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5'
    },
    {
        nombre: 'Punto Farma',
        descripcion: 'Medicamentos',
        locales: '7 disponibles',
        horaDeAtencion: '8am - 9pm',
        calificación: '4'
    },
    {
        nombre: 'Kielsa',
        descripcion: 'Pastillas - Jarabes',
        locales: '3 disponibles',
        horaDeAtencion: 'las 24 horas',
        calificación: '5'
    },
    {
        nombre: 'Vitaminas Fitamin',
        descripcion: 'Vitaminas',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5'
    }
]

var Accesorios = [
    {
        nombre: 'RadioShack',
        descripcion: 'Audifonos - celulares',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5'
    },
    {
        nombre: 'Tecknos',
        descripcion: 'Tecnologia - cables',
        locales: '7 disponibles',
        horaDeAtencion: '8am - 9pm',
        calificación: '4'
    },
    {
        nombre: 'TekMaster',
        descripcion: 'Home office - Soportes',
        locales: '3 disponibles',
        horaDeAtencion: 'las 24 horas',
        calificación: '5'
    },
    {
        nombre: 'CSI',
        descripcion: 'Cargadores',
        locales: '6 disponibles',
        horaDeAtencion: '8am - 10pm',
        calificación: '5'
    }
]



function generarCategorias(){
    categorias.forEach(function(categoria){
        document.getElementById('categorias').innerHTML+=
        ` <div class=" col-12" type="button" onclick="mostrar${categoria.funcion}()">
        <div class="cards-categorias" style="background-color:${categoria.backgroundColor}">
            <i class="fa-solid ${categoria.icono} iconos-categorias" style="color:${categoria.colorIcono}"></i>
            <p style="color:${categoria.colorTexto}">${categoria.nombre}</p>
        </div>
    </div>`
    });
};




function generarRopa(){
    Ropas.forEach(function(Ropa){
        document.getElementById('empresas-ropa').innerHTML+=
        `<div class="col-12" type="button" onclick="">
        <div class="card-empresas">
            <div class="object-fit-top">
                <h1>
                    ${Ropa.nombre}
                </h1>
            </div>  
            <div class="object-fit-width">
                <div class="object-fit-left">
                    <img class="img-empresas" src="css/img/portada_BurgerKing.jpg" alt="">
                    <h5 id="description">${Ropa.descripcion}</h5>
                </div>
                <div class="object-fit-inside">
                    <h5>
                        Abierto: ${Ropa.horaDeAtencion}
                    </h5>
                    <h5>
                        Locales: ${Ropa.locales}
                    </h5>
                    <h5>
                        Calificación: ${Ropa.calificación}
                    </h5>
                </div>
            </div>
        </div>
    </div>
</div>`
    });
};

function generarComidaRapida(){
    comidaRapidas.forEach(function(comidaRapida){
        document.getElementById('empresas-comida-rapida').innerHTML+=
        `<div class="col-12" type="button" onclick="">
        <div class="card-empresas">
            <div class="object-fit-top">
                <h1>
                    ${comidaRapida.nombre}
                </h1>
            </div>  
            <div class="object-fit-width">
                <div class="object-fit-left">
                    <img class="img-empresas" src="css/img/portada_BurgerKing.jpg" alt="">
                    <h5 id="description">${comidaRapida.descripcion}</h5>
                </div>
                <div class="object-fit-inside">
                    <h5>
                        Abierto: ${comidaRapida.horaDeAtencion}
                    </h5>
                    <h5>
                        Locales: ${comidaRapida.locales}
                    </h5>
                    <h5>
                        Calificación: ${comidaRapida.calificación}
                    </h5>
                </div>
            </div>
        </div>
    </div>
</div>`
    });
};

function generarSalud(){
    Salud.forEach(function(Salu){
        document.getElementById('empresas-salud').innerHTML+=
        `<div class="col-12" type="button" onclick="">
        <div class="card-empresas">
            <div class="object-fit-top">
                <h1>
                    ${Salu.nombre}
                </h1>
            </div>  
            <div class="object-fit-width">
                <div class="object-fit-left">
                    <img class="img-empresas" src="css/img/portada_BurgerKing.jpg" alt="">
                    <h5 id="description">${Salu.descripcion}</h5>
                </div>
                <div class="object-fit-inside">
                    <h5>
                        Abierto: ${Salu.horaDeAtencion}
                    </h5>
                    <h5>
                        Locales: ${Salu.locales}
                    </h5>
                    <h5>
                        Calificación: ${Salu.calificación}
                    </h5>
                </div>
            </div>
        </div>
    </div>
</div>`
    });
};

function generarAccesorios(){
    Accesorios.forEach(function(Accesorio){
        document.getElementById('empresas-accesorios').innerHTML+=
        `<div class="col-12" type="button" onclick="">
        <div class="card-empresas">
            <div class="object-fit-top">
                <h1>
                    ${Accesorio.nombre}
                </h1>
            </div>  
            <div class="object-fit-width">
                <div class="object-fit-left">
                    <img class="img-empresas" src="css/img/portada_BurgerKing.jpg" alt="">
                    <h5 id="description">${Accesorio.descripcion}</h5>
                </div>
                <div class="object-fit-inside">
                    <h5>
                        Abierto: ${Accesorio.horaDeAtencion}
                    </h5>
                    <h5>
                        Locales: ${Accesorio.locales}
                    </h5>
                    <h5>
                        Calificación: ${Accesorio.calificación}
                    </h5>
                </div>
            </div>
        </div>
    </div>
</div>`
    });
};



generarComidaRapida();
generarCategorias();
generarRopa();
generarSalud()
generarAccesorios();

function mostrarComidaRapida(){
    document.getElementById('landing-page-clientes').classList.add('oculto');
    document.getElementById('menu-comida-rapida').classList.remove('oculto');
    document.getElementById('menus').classList.remove('oculto');
    document.getElementById('menu-ropa').classList.add('oculto');
    document.getElementById('menu-salud').classList.add('oculto');
    document.getElementById('menu-accesorios').classList.add('oculto');
}

function mostrarRopa(){
    document.getElementById('landing-page-clientes').classList.add('oculto');
    document.getElementById('menu-ropa').classList.remove('oculto');
    document.getElementById('menus').classList.remove('oculto');
    document.getElementById('menu-comida-rapida').classList.add('oculto');
    document.getElementById('menu-salud').classList.add('oculto');
    document.getElementById('menu-accesorios').classList.add('oculto');
}

function mostrarSalud(){
    document.getElementById('landing-page-clientes').classList.add('oculto');
    document.getElementById('menu-ropa').classList.add('oculto');
    document.getElementById('menus').classList.remove('oculto');
    document.getElementById('menu-comida-rapida').classList.add('oculto');
    document.getElementById('menu-salud').classList.remove('oculto');
    document.getElementById('menu-accesorios').classList.add('oculto');
}

function mostrarAccesorios(){
    document.getElementById('landing-page-clientes').classList.add('oculto');
    document.getElementById('menu-ropa').classList.add('oculto');
    document.getElementById('menus').classList.remove('oculto');
    document.getElementById('menu-comida-rapida').classList.add('oculto');
    document.getElementById('menu-salud').classList.add('oculto');
    document.getElementById('menu-accesorios').classList.remove('oculto');
}






function comenzar(){
    document.getElementById('landing-page').classList.add('oculto');
    document.getElementById('registro').classList.remove('oculto');
};

function regresar(){
    document.getElementById('registro').classList.add('oculto');
    document.getElementById('landing-page').classList.remove('oculto');
    document.getElementById('iniciar-sesion').classList.add('oculto');

};
var a=1, b=1, c=1, d=1;

function validarCampoVacio(id){
    if (document.getElementById(id).value==''){
        document.getElementById(id).classList.add('input-error');
        document.getElementById(id).classList.remove('input-success');
        a=1;
    } else {
        document.getElementById(id).classList.add('input-success');
        document.getElementById(id).classList.remove('input-error');
        a=0;
    };
};

function validarCorreo(id){
    const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex.test(document.getElementById(id).value)){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
        b=0;
    }   else {
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
        b=1;
    }
};

function validarCelular(id){
    const regex = /^\(?[0-9]{3}\)?[ ]?([0-9]{4})[-]?([0-9]{4})$/;
    
    if (regex.test(document.getElementById(id).value)){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
        c=0;
        
    }   else {
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
        c=1;
    }
};


function validarPassword(id){
    const regex = /([^A-Za-z].{7})|(.[^A-Za-z].{6})|(.{2}[^A-Za-z].{5})|(.{3}[^A-Za-z].{4})|(.{4}[^A-Za-z].{3})|(.{5}[^A-Za-z].{2})|(.{6}[^A-Za-z].)|(.{7}[^A-Za-z])/
    
    if (regex.test(document.getElementById(id).value)){
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
        d=0;
        
    }   else {
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
        d=1;
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

function validarForm(){
    
}

function inicioClientes(){
    document.getElementById('iniciar-sesion').classList.add('oculto');
    document.getElementById('landing-page-clientes').classList.remove('oculto');
}
  
function regresarClientes(){
    document.getElementById('perfil-config').classList.add('oculto');
    document.getElementById('landing-page-clientes').classList.remove('oculto');
    document.getElementById('menus').classList.add('oculto');
}

function inicioConfig(){
    document.getElementById('perfil-config').classList.remove('oculto');
    document.getElementById('menus').classList.add('oculto');
    document.getElementById('landing-page-clientes').classList.add('oculto');
}
function volverInicio(){
    document.getElementById('landing-page').classList.remove('oculto');
    document.getElementById('perfil-config').classList.add('oculto');
}

function validarRegistro(){
    if (a==0 & b==0 & c==0 & d==0){
        document.getElementById('landing-page-clientes').classList.remove('oculto');
        document.getElementById('registro').classList.add('oculto'); 
        a=1, b=1, c=1, d=1;
    } else{
        alert('Campos en registro incorrectos o incompletos');
    }
}
