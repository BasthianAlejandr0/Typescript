"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'Valor por defecto'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'Valor por defecto'}`;
        }
    };
    const name = fullName('Dakota', 'Araya', true);
    console.log({ name });
})();
