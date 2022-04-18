import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    test('deve de retornar un heroe async', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync(id).then( heroe => {
            expect( heroe ).toBe( heroes[0] );
            done();
        });

    });

    // donde -->  Para indicarle que es una tarea asyncoran

    test('Deve de obtener un error si el heroe no existe', ( donde ) =>{
        const id = 10;
        getHeroeByIdAsync(id).catch( error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            donde();
        })
    });
});