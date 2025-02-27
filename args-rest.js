"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const auto = fullName('Volskswagen', 'Golf', 'Gti');
    console.log({ auto });
})();
