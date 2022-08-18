var dinamizador= {
    nombre1 : "Diego",
    nombre2 : "Armando",
    apell1 : "Gomez",
    apell2: "Guzman", 
    datalleDinam: function(){
        console.log(`dinam ${this.nombre1} ${this.nombre2}`);
    }
};

console.log (dinamizador.nombre1);
dinamizador.datalleDinam();
