// carousal(src,title,details)
let arr=[['../danceimg1.jpg','New York','New York Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, commodi.'],['../danceimg2.jpg','Los Angeles','Los Angeles orem ipsum dolor sit amet consectetur adipisicing elit. Fuga, commodi.'],['../danceimg3.jpg','Chicago','Chicago orem ipsum dolor sit amet consectetur adipisicing elit. Fuga, commodi.']];
let idx=0;
function slideshow (idx){
    document.getElementById('home-img').src =arr[idx][0];
    document.getElementById('title').innerHTML =arr[idx][1];
    document.getElementById('description').innerHTML =arr[idx][2];   
}

let carousal = setInterval(function(){
idx++;
if(idx >=3){
    // clearInterval(carousal);
    idx=0; 
}
slideshow(idx)
},3000)
 
//navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }