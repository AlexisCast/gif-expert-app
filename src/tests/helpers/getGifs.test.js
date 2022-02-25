import { GetGifs } from "../../helpers/getGifs"


describe('Pruebas con fetGifs Fetch',()=>{
   test('debe de traer 10 elementos',async()=>{
      const gifs=await GetGifs('One Punch');
      // console.log(gifs);
      expect(gifs.length).toBe(10);
   });
   test('debe de traer 0 elementos',async()=>{
      const gifs=await GetGifs('');
      // console.log(gifs);
      expect(gifs.length).toBe(0);
   });
})