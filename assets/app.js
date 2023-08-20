const para = document.getElementById("para");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const img = document.getElementById('img');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

const myList = [
 {
    img: 'imgs/e200.jpg',
    title: 'Mercedes E200'
 },

 {
    img: 'imgs/msc.jpg',
    title: 'Michael Schumacher'
 },

 {
    img: 'imgs/f2004.jpg',
    title: 'F2004'
 }
];

img.src = myList[0].img;
para.innerHTML =  myList[0].title;
img1.src = myList[1].img;
para1.innerHTML = myList[1].title;
img2.src = myList[2].img;
para2.innerHTML = myList[2].title;









