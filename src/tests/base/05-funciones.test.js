import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';



describe('Pruebas en 05-funciones.js', () => {
    test('getUser Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    });

    test('getUsuarioActivo Debe de retornar un objeto', () => {
        const nombre = 'Gamaliel';

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    })
}) 