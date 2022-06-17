const country = document.querySelector(".select-country");
document.querySelector("h2").innerHTML = "hi";
const url = "/api";
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(info),
})
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
