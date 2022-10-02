/*  1. Grab the input value */


setTimeout(function(){

document.querySelector(".js-go").addEventListener('click',function(){
	
	var input = document.querySelector("input").value;
	console.log(input);
	getInput(input);
	

},1);

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	
	var input = document.querySelector("input").value;
	console.log(input);
	

	if(e.which === 13){
		getInput(input);
		
	}

});

},10);

/*2. Do the data stuff with the API */

function getInput(item){

	var query = item.split(' ').join('+');

	var url = "http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=1uF0i2WktL36PzyHwL7eYEwHC51NRw4u";

	//AJAX Request

	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

		var data = e.target.response;
		pushToDOM(data);

		});

	}


/* 3. Show me the GIFs */

function pushToDOM(input){

	var response = JSON.parse(input);
	var f = document.querySelector(".js-container");
	var results = document.querySelector(".results");

	clear(f);
	clear(results);


	var imageUrls = response.data;
	

	imageUrls.forEach(function(image){

	var src = image.images.fixed_height.url;
	console.log(src);

	var container = document.querySelector(".js-container");
	container.innerHTML = container.innerHTML + "<img src=\"" + src + "\" class=\"container-image\">";

	});


	function clear(item) {
        item.innerHTML = "";
    }
	

}
