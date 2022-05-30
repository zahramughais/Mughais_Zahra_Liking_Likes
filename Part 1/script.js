var likes = 3;
var likesDisplay = document.querySelector("#likes-count");

function addLike(){
    likes++;
    likesDisplay.innerText = likes + " like(s)";
}