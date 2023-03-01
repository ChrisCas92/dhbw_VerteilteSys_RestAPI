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

export async function addParty(name, location, participants) {
  return await fetch("http://localhost:4000/events/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      name: name,
      location: location,
      participants: participants,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
