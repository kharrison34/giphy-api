// Array of default coices
    var topics = ["Game of Thones", "Doctor Who", "American Dad!", "Futurama", "Mad Men", "Brooklyn 99", "How I Met Your Mother", "dare devil", "saved by the bell" ];

    console.log(topics);



	
	function renderButtons(){ 

		
		$('#televisonshows').empty();

		//loops through the array
		for (var i = 0; i < topics.length; i++){

			
			var a = $('<button>') 
		    a.addClass('newshow'); 
		    a.attr('data-name', topics[i]); 
		    a.text(topics[i]); 
		    $('#televisonshows').append(a); 
		}
	}

	//this function adds the users show to the list
	$('#addShow').on('click', function(){

		
		var newshow = $('#show-input').val().trim();

		
		topics.push(newshow);
		
		renderButtons();

		return false;
	})


        // this is the actual api and the key 
	  
	  $('#televisonshows').on('click', '.newshow', function() {
	  	var m = $(this).text();
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + m + "&api_key=qYPdHXjgilROMOCkF4N3RuIki9d69Bur&limit=10";
        $.ajax({url: queryURL, method: 'GET'})

        .done(function(response) {
        	console.log(response);
        	$('#gifsView').empty();
        	var results = response.data;

        	for (var i = 0; i < results.length; i++) {
        		var gifDiv = $('<div class="item">')

        		var rating = results[i].rating;

        		var p = $('<p>').text("Rating: " + rating);

        		var showImage = $('<img>').height(200).width(350);
	                    
	                    showImage.attr('src', results[i].images.fixed_height_still.url);
	                    showImage.attr('data-still', results[i].images.fixed_height_still.url);
	                    showImage.attr('data-animate', results[i].images.fixed_height.url);
	                    showImage.attr('data-state', 'still');


	                    gifDiv.append(p);
	                    gifDiv.append(showImage);

	                    $('#gifsView').prepend(gifDiv);

	                     
	                };	                    

	            });
	        });

	  $('#gifsView').on('click', 'img', function() {
	  	var state = $(this).attr('data-state'); 
	  	console.log(state);
	  	if ( state == 'still'){
	  		$(this).attr('src', $(this).data('animate'));
	  		$(this).attr('data-state', 'animate');
	  	}else{
	  		$(this).attr('src', $(this).data('still'));
	  		$(this).attr('data-state', 'still');
	  	}

	  });
	 



	
	renderButtons();