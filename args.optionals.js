"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName || 'Valor por defecto'}`;
    };
    const name = fullName('Dakota');
    console.log({ name });
})();
