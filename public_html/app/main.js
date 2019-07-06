/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = new Vue({
    el:'#app',
    data:{
        primermensaje:"Primer mensaje",
        segundomensaje:"Segundo mensaje",
        valor:5,
        urlLogo:'img/logo.png',
        enlace:"",
        contador:0
    },
    methods:{
        saludar(){
            return "Te saludo!";
        },
        comparar(){
            return this.valor>30?"Es mayor a 30":"Es menor a 30";
        },
        obtenerEnlace(){
            return "https://www.google.com.pe";
        },
        eventoClick(){
            alert("Hizo Click!");
        },
        aumentar(){
            this.contador++;
        },
        disminuir(){            
            if(this.contador === 0) this.contador = 0;
            else this.contador--;
        }
    }
});

