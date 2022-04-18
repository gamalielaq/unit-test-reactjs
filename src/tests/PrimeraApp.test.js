
import React from "react"; //Esta importacion es en las veriones anteriores actualmente ya no es necerario
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp/>', () => {
    
    // test('Deve de mostrar el mensaje "Hola Soy Goku"', () => {
    //     const saludo = 'Hola Soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo = { saludo } />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Deve de mostrar <PrimeraApp/> correctamente', () =>{
        const saludo = 'Hola Soy Goku';
        const wrapper = shallow(  <PrimeraApp saludo = { saludo } /> );

        expect(wrapper).toMatchSnapshot();
    });

    test('Deve de mostrar el subtitulo enviado por props', () =>{
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un Subtitulo';
        const wrapper = shallow(  <PrimeraApp saludo = { saludo } subtitulo= { subTitulo }  /> );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);
    });
});