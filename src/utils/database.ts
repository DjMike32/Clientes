


import mongoose from 'mongoose';  

const password= 'XjgSoNd5dgZbDf4Z';
const uri= `mongodb+srv://DjMike:${password}@practica.tmhyprt.mongodb.net/?retryWrites=true&w=majority`;

export class Database{  
    constructor() { 
        this.conectar(); 
    } 
    conectar(){ 
        mongoose  
        .connect(uri) 
        .then(res=>console.log('se conecto a mongodb usuarios')) 
        .catch(error=>console.log(error)); 
    } 
}
