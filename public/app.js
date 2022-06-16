const country = document.querySelector(".select-country");
document.querySelector("h2").innerHTML = "hi";
const url = "https://travel-api-server.herokuapp.com/travel/api/country/";
fetch(url, {
  method: "get",
  mode: "cors",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
