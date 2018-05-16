// list of shows 

    var topics = ["Game of Thones", "Doctor Who", "American Dad!", "Futurama", "Mad Men", "Brooklyn 99", "How I Met Your Mother", "dare devil" ];

    console.log(topics);

    function renderButtons(){
        $('#televisonshows').empty();

        for (var i = 0; i < topics.length; i++){
            var j = $('<button>')
            j.addClass('newshow');
            j.attr('data-name', topics[i]);

            j.text(topics[i]);

            $('#televisonshows').append(j);

        }
    }

    $('#addShow').on('click', function(){

        var topics = $('#show-input').val().trim();

        topics.push(newshow);

        renderButtons();

        return false;
    })

        $('#televisionshows').on('click', '.newshow', function() {
            var s = $(this).text();

            var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + s + "&api_key=qYPdHXjgilROMOCkF4N3RuIki9d69Bur&limit=10";
            
            $.ajax({
                url: queryUrl,
                method: "GET"
            })

            .done(function(response) {
                console.log(response);
                $('#gifsView').empty();
                var results = response.data;

                for (var i = 0; < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("rating: " + rating);

                    var showImage = $('<img>').height(200).width(350);

                        showImage.attr('src', results[i].images.fixed_height_still.url);
                        showImage.attr('data-still', results[i].images.fixed_height_still.url);
                        showImage.attr('data-animate', results[i].images.fixed_height_still.url);
                        showImage.attr('data-state', 'still');

                        gifDiv.append(p);
                        gifDiv.append(showImage);


                        $('#gifsView').prepend(gifDiv);

                };
            });
        });


        