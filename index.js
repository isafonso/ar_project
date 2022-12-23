const bootstrap = async () => {
  const req = await fetch("http://localhost:1337/api/hospitals", {
    method: "GET",
  });
  const res = await req.json();
  console.log(res.data[0].attributes.name);

  document.getElementsByTagName("div")[0].innerHTML +=
    res.data[0].attributes.name + "<br>" + res.data[1].attributes.name;
};

let body = document.getElementsByTagName("body")[0];
body.addEventListener("load", bootstrap());

let h2 = document.getElementsByTagName("h2")[0];

h2.addEventListener("mouseover", () => {
  h2.setAttribute("class", "grown");
});

h2.addEventListener("mouseout", () => {
  h2.removeAttribute("class");
});

// h2.addEventListener("mouseover", () => {
//   h2.classList.toggle("grown", true);
// });

// h2.addEventListener("mouseout", () => {
//   h2.classList.toggle("grown", false);
//   h2.classList.toggle("down", true);
// });
