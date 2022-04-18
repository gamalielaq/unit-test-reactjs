import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('Debe de retonar un hero por ID', () => {
        const id = 3;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar un undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar un arreglo con los herores de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(heroe => heroe.owner === owner);
        expect(heroes).toEqual(heroesData);
    })

    test('Debe retornar un arreglo con los heroesde marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    });
});

