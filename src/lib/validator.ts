export function isRutValid(rut: string) {
    const sanitizedRut = rut.toUpperCase().replace(/[^0-9K]+/g, '');

    if (![8, 9].includes(sanitizedRut.length)) {
        return false;
    }
    return isValidFormat(sanitizedRut);
}

function isValidFormat(sanitizedRut) {
    const factors = [3, 2, 7, 6, 5, 4, 3, 2];
    while (sanitizedRut.length !== factors.length + 1) {
        sanitizedRut = `0${sanitizedRut}`;
    }
    let total = 0;
    for (let i = 0; i < factors.length; i += 1) {
        total += Number(sanitizedRut[i]) * factors[i];
    }

    const validationSum = 11 - (total % 11);
    const controlCharacter = getControlCharacter(validationSum);
    return sanitizedRut[sanitizedRut.length - 1] === controlCharacter;
}

function getControlCharacter(validationSum: number) {
    if (validationSum === 10) {
        return 'K';
    }
    if (validationSum === 11) {
        return '0';
    }
    return String(validationSum);
}
