
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp/> ', () => {

    let wrapper = shallow( <CounterApp /> );
    
    beforeEach( () => { //Se ejecuta antes de cada pruba
        wrapper = shallow( <CounterApp /> );
    })

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

    test('deve de incrementar mas 1 con el boton +1', () =>{
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('11');
    });

    test('deve de decrementar menos 1 con el boton -1', () =>{
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('9');
    });
});