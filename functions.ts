(() => {
    const nameMascota: string= 'Dakota';
    const nameMascota2: string= 'Denver';
    //Puedes definir el tipo de datos que devuelve la función.
    function getName():string{
        return 'Denver'
    }
    getName();

    const getName2=() => {
        return console.log(nameMascota);
    }
    getName2(); 

}) ()