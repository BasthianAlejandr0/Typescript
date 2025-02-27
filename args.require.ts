(() => {

    const fullName= (firstName:string, lastName:string) => {
        if(!firstName){
            throw new Error('Nombre requerido');
        }
        return `${ firstName } ${ lastName }`;   
    }

    const name= fullName('Dakota', 'Araya');
    console.log({ name });
})()