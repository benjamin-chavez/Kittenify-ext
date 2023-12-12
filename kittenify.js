// THIS IS THE CONTENT SCRIPT
console.log('KITTENIFY ME!!');

let fNames = [
  'kitty_img1.jpg',
  'kitty_img2.jpg',
  'kitty_img3.jpg',
  'kitty_img4.jpg',
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  // console.log(imgElt.src);
  let r = Math.floor(Math.random() * fNames.length);
  let file = 'images/' + fNames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  // console.log(url);
}
