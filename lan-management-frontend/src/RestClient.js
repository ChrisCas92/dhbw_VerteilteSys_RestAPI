const fetch = require("node-fetch");

export async function fetchAllParties() {
  return await fetch("http://localhost:4000/events", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
