(() => {

    const fullName= (firstName:string, lastName?:string) => {
        if(!firstName){
            throw new Error('Nombre requerido');
        }
        return `${ firstName } ${ lastName || 'Valor por defecto'}`;   
    }

    const name= fullName('Dakota', /* argumento opcional */);
    console.log({ name });
})();