import { expect } from 'chai';
import { isRutValid } from '../src';

const TOO_SHORT_RUT = '123';
const TOO_LONG_RUT = '1234567890';
const RUT_STARTING_WITH_CHARACTER = 'A2140661-0';
const WRONG_RUT_NUMBER = '621406610';
const LETTER_RUT = 'QWERTYui';
const SPECIAL_CHARACTER_RUT = '!@#$%^&&*(';

const INVALID_RUT = [
    TOO_SHORT_RUT,
    TOO_LONG_RUT,
    RUT_STARTING_WITH_CHARACTER,
    WRONG_RUT_NUMBER,
    LETTER_RUT,
    SPECIAL_CHARACTER_RUT,
];
const VALID_RUT = [
    '50556735',
    '5055673-5',
    '321406610',
    '32140661-0',
    '32597186K',
    '32597186k',
    '32597186-k',
    '32597186-K',
    '32,140,661-0',
    '32,597,186-K',
];

describe('RUT Validator', () => {
    context('Invalid RUT', () => {
        it('Should fail validation', () => {
            INVALID_RUT.forEach(rut => {
                const isValidRut = isRutValid(rut);
                expect(isValidRut).to.equal(false);
            });
        });
    });
    context('Valid RUT', () => {
        it('Should pass validation', () => {
            VALID_RUT.forEach(rut => {
                const isValidRut = isRutValid(rut);
                expect(isValidRut).to.equal(true);
            });
        });
    });
});
