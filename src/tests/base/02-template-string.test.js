import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test', () => {
    test('getSaludo debe de retornar Hola Gamaliel!', () => {
        const nombre = 'Fernado';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre+'!');
    });

    test('getSaludo debe de retornar Hola Carlos! si no hay ningun argumento', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos'+'!');
    })
})