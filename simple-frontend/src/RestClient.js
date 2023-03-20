const fetch = require("node-fetch");

/* fetches api data from backend and extracts its json body */
export async function fetchAllBooks() {
  return await fetch("http://localhost:4000/books", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
