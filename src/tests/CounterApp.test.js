
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp/> ', () => {

    test('Deve mostrar <CounterApp/> Correctamente', () => {
        const valor = 10;
        const wrapper = shallow( <CounterApp value= {valor} /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Deve mostrar el valor por defecto de 100', () =>{
        const valorBase = 100;
        const wrapper = shallow( <CounterApp value= {valorBase} /> );

        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe(valorBase.toString());

    });
});