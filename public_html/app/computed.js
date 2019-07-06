var variable = new Vue({
    el: "#prop",
    computed:{
        // Colocar el nombre de mi propiedad que voy utilizar.
        // creo una propiedad que sera una funcion, las computed 
        // properties pueden ser usadas como una variable simple.
        total(){
            return this.contador1 + this.contador2 + this.contador3;
        }
    },
    data: {
        contador1: 0,
        contador2: 0,
        contador3: 0
    },
    methods: {
        aumentar1() {
            return this.contador1++;
        },
        disminuir1() {
            if (this.contador1 > 0) {
                return this.contador1--;
            } else {
                return this.contador1;
            }
        },
        aumentar2() {
            return this.contador2++;
        },
        disminuir2() {
            if (this.contador2 > 0) {
                return this.contador2--;
            } else {
                return this.contador2;
            }
        },
        aumentar3() {
            return this.contador3++;
        },
        disminuir3() {
            if (this.contador3 > 0) {
                return this.contador3--;
            } else {
                return this.contador3;
            }
        }
    }
});


