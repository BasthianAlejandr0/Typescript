(() => {

    const fullName= (firstName:string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }
    const auto= fullName('Volskswagen', 'Golf', 'Gti');

    console.log({auto});
})();