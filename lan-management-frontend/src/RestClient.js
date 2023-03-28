//fetches api data from backend and extraxts json body
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
