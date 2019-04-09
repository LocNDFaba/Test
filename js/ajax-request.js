//Ajax javascript
let author = ["William Smith","Emilia Blue","Edison Cavani","Lionel Messi","Pattrick Evra","Luis Nani"];
let title = ["iOS App Development","Working Space Design","Apple Package Design","Wall Shelves Design","Bottle & Logo Design","Watch Interaface Design"];
let like = [12,24,55,45,123,221];
let category = ["Mobile Apps","Package design","Interior design","Branding","Interior design","Mobile Apps"];
let eventImg = ["images/portfolio/04.jpg","images/portfolio/05.jpg","images/portfolio/06.jpg","images/portfolio/07.jpg","images/portfolio/08.jpg","images/portfolio/09.jpg"];

let button = document.querySelector('#ajax-event');

button.addEventListener('click',function(){
    let output = "";
	let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    xhr.onload = function(){

    //console.log(category);
    let data = JSON.parse(this.responseText); //however i don't use this data
  	//console.log("The call status is : " + this.status);
	  	if(this.status === 200){
	  		//console.log(category);
		  	for(let i = 0; i<6; i++){
			  	output += `<div class="event-card"><a class="event-thumb" href="#"><img src="${eventImg[i]}" alt="Event Thumbnail"></a><div class="event-card-body"><div class="event-meta"><span class="mr-3"><i class="fa fa-user-o" aria-hidden="true"></i> ${author[i]}</span><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i>${like[i]}</a></div><h5 class="event-title"><a href="#">${title[i]}</a></h5><a class="tag-link" href="#">${category[i]}</a></div></div>`;	  	
			}
            $('#wrap-ajax').append(output);
		}else{
        console.log("connected error !!!");
      	}
    }
    xhr.send();
    
    $('.remove-btn-ajax').remove();
})