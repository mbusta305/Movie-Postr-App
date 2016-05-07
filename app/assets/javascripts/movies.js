$(document).ready(function() {

  function wrapHtml(movie){
    var moviehtml = '<div>' +
      '<h3>' + movie.Title + ": " + movie.Year + '</h3>' +
      '<img src= "' + movie.Poster + '"/>' +
      '</div>';
      return moviehtml;
  }

  $('input#searchMovie').on("keyup",function() {
    var searchVal = $(this).val();

    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + searchVal,
      type: 'GET',
      dataType: 'json',
    })

    .done(function(data) {
      if (data.Response == "True") {
        $('#movies').empty();
        var movies = data.Search;
        movies.forEach(function(movie){

          $('div#movies').append(wrapHtml(movie));
        });
      }else {
        $('#movies').html('Keep Searching');
      }
    })
    .error(function(){
      console.log("Error!")
    });
  });
});
