document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        $('button').click();
        var movieHTML = movieArray.map(function (currentMovie)  {
            
            return `
            <div class="movie">
                              <div class="card" style="width: 18rem;">
                                      <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                      <div class="card-body">
                                          <h5 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                                          <p class="card-text">IMDB ID: ${currentMovie.imdbID}</p>
                                          <a href="#" class="btn btn-primary"onclick="saveToWatchList('${currentMovie.imdbID}')>Add</a>
                                          /
                                      </div>
                              </div>
            </div>
            `;
        });

        return movieHTML.join('');
       
    }


    //content.innerHTML = renderMovies(movieData);
    const searchInput = document.getElementById("searchInput")
    const searchForm = document.getElementById('search-form')
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log(searchInput.value)
        var content = document.getElementById('movies-container');
        const filteredMovies = movieData.filter(movie => movie.Title.toLowerCase().includes(searchInput.value.toLowerCase()))
        content.innerHTML = renderMovies(filteredMovies); 
    });


});

  //$('button').click(); for adding button 