import numeral from 'numeral';

export const centToRand = (centValue) => {
    return parseInt(centValue) / 100;
}

export const centToRandDisplay = (centValue) => {
    return `R${numeral(centToRand(centValue)).format('0.00')}`;
}