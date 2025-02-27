(() => {

    const fullName= (firstName:string, lastName?:string, upper:boolean=false) => {
        if ( upper ) {
            return `${ firstName } ${ lastName || 'Valor por defecto'}`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'Valor por defecto'}`
        }
    }

    const name= fullName('Dakota', 'Araya', true);
    console.log({ name });
})();