export const getGifs = async (find) => {
  const API_KEY = 'J51EoLGDLK1rEc5LDee9d69TVxAtWrBZ';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    find
  )}&limit=10&api_key=${API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
