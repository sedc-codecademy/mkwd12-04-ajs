    // Movie array
    const movies = ["Lord of the Rings", "Harry Potter", "Joker", "Besa", "The Godfather"];

    // Function to check if a movie can be rented
    function searchMovie(title) {
      title = title.toLowerCase();
      for (let movie of movies) {
        if (movie.toLowerCase() === title) {
          return true;
        }
      }
      return false;
    }

    // Event listener for the form submission
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      const searchInput = document.getElementById('searchInput').value;
      const resultHeader = document.getElementById('result');

      if (!searchInput) {
        resultHeader.innerText = 'You must enter a movie title';
        resultHeader.style.color = 'black';
      } else {
        const canRent = searchMovie(searchInput);

        if (canRent) {
          resultHeader.innerText = 'The movie can be rented';
          resultHeader.style.color = 'green';
        } else {
          resultHeader.innerText = 'The movie can\'t be rented';
          resultHeader.style.color = 'red';
        }
      }
    });