import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-awat y fetch', () => {

    test('Deve retornar el url de la imagen', async () => {
        const url = await getImagen();

        expect( url.includes('https://') ).toBe( true );
    })
});