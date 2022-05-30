function addLike(element){
    var likes = element.parentElement.querySelector(".likes-count"); 
    var likesCounter = likes.innerText; 
    likesCounter++;
    likes.innerText = likesCounter;
}