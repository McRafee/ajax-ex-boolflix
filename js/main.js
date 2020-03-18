$(document).ready(function() {
    // *** LOGIC ENGINE *** //

    // *** HANDLEBARS *** //
    var source = $("#movie-template").html();
    var movieTemplate = Handlebars.compile(source);

    $("#search").click(function(event){
        var searchedInput = $("#search-input").val().toLowerCase();
        var encodedInput = encodeURI(searchedInput)
        console.log(searchedInput);
        console.log(encodedInput);


        var apiBaseUrl = 'https://api.themoviedb.org/3';
        $.ajax({
            url: apiBaseUrl + '/search/movie',
            data: {
                api_key: '40d241ffdfaeaa669119b9a7a36e648c',
                query: searchedInput,
                language: 'it-IT'
            },
            method: 'GET',
            success: function (data) {
                console.log(data);
                var movies = data.results;
                for (var i = 0; i < movies.length; i++) {
                    var movie = movies[i];
                    console.log(movie.title);
                    var movieInformation = {
                        title: movie.title,
                        original_title: movie.original_title,
                        original_language: movie.original_language,
                        vote_average: movie.vote_average
                    }
                    var templateWithData = movieTemplate(movieInformation);
                    $('.movies-container').append(templateWithData);
                }
            },
            error: function (err) {
                alert('Error');
            }
        });
    });


    // var apiBaseUrl = 'https://api.themoviedb.org/3';
    // $.ajax({
    //     url: apiBaseUrl + '/search/movie',
    //     data: {
    //         api_key: '40d241ffdfaeaa669119b9a7a36e648c',
    //         query: 'ritorno al futuro',
    //         language: 'it-IT'
    //     },
    //     method: 'GET',
    //     success: function (data) {
    //         console.log(data);
    //         var movies = data.results;
    //         for (var i = 0; i < movies.length; i++) {
    //             var movie = movies[i];
    //             console.log(movie.title);
    //             var movieInformation = {
    //                 title: movie.title,
    //                 original_title: movie.original_title,
    //                 original_language: movie.original_language,
    //                 vote_average: movie.vote_average
    //             }
    //             var templateWithData = movieTemplate(movieInformation);
    //             $('.movies-container').append(templateWithData);
    //         }
    //     },
    //     error: function (err) {
    //         alert('Error');
    //     }
    // });


});
