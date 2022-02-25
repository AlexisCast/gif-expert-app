import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe('Pruebas em <GifExpertApp',()=>{
   test('debe de mostrar correctamente',()=>{
      const wrapper=shallow(<GifExpertApp/>);
      expect(wrapper).toMatchSnapshot();
   });
   test('debe de mostrar una vista de categoris',()=>{
      const categories=['One Punch','Dragon ball'];
      const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })
})