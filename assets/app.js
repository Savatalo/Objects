let newText = document.createElement("p");
let newImg = document.createElement("img");
let div = document.getElementById("div");

const myList = [
  {
    img: "imgs/e200.jpg",
    title: "Mercedes E200"
  },

  {
    img: "imgs/msc.jpg",
    title: "Michael Schumacher"
  },

  {
    img: "imgs/f2004.jpg",
    title: "F2004"
  },

  {
    img: "imgs/agera.jpg",
    title: "Koenigsegg agera"
  },

  {
   img: "imgs/rari.jpg",
   title: "Ferrari 458"
  }
];


for (const content in myList) {
  let i;
  div.innerHTML += `
  <img src="${myList[content].img}" class ="img">
  <p class = "para">${myList[content].title}</p>
  `
  i++
}
