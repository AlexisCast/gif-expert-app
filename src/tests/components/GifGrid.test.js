import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>',()=>{
   const category='Goku';
   test('debe de mostrar el componente correctamente',()=>{
      useFetchGifs.mockReturnValue({
         data:[],
         loading:true,
      });
      const wrapper=shallow(<GifGrid category={category}/>);
      expect(wrapper).toMatchSnapshot();
   });
   test('debe de mostrar items cuando se carga imagnes useFetchGifs',()=>{
      const gifs=[{
         id:'abc',
         url:'https://google.com',
         title:'cualquier cosa',
      },
      {
         id:'123',
         url:'https://maps.com',
         title:'maps',
      },]
      useFetchGifs.mockReturnValue({
         data:gifs,
         loading:false,
      });
      const wrapper=shallow(<GifGrid category={category}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('p').exists()).toBe(false);
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
   })
})


