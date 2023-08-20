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

for (let i = 0; i < myList.length; i++) {
  let para = document.createElement("para");
  let img = document.createElement("img");
  para.className = "my-list-text";
  img.className = "my-list-img";
  para.innerHTML = myList[i].title;
  img.src = myList[i].img;
  document.body.appendChild(img);
  document.body.appendChild(para);
}
