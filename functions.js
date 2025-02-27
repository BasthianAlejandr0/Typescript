"use strict";
(() => {
    const nameMascota = 'Dakota';
    const nameMascota2 = 'Denver';
    //Puedes definir el tipo de datos que devuelve la función.
    function getName() {
        return 'Denver';
    }
    getName();
    const getName2 = () => {
        return console.log(nameMascota);
    };
    getName2();
})();
