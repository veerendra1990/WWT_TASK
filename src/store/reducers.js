let albums = [];
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    albums = json.filter((val) => !val.title.includes("e"));
    console.log(albums.length);
  });
const rootReducer = (state = albums) => {
  return state;
};

export default rootReducer;
