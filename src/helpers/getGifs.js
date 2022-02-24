



export const GetGifs = async (category) => {
   const url =
      `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oBJaWvD8oC03bP7ULhrHGNOkar6Jns6Y`;
   const resp = await fetch(url);
   const { data } = await resp.json();
   const gifs = data.map((img) => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url,
      };
   });
   // console.log(data);
   // setImages(gifs);
   console.log(gifs);
   return gifs
};