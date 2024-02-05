# Workshop part 2

- Only attempt the below steps if you have completely finished the steps from the first part

## Requirements

1. Refactor your code to use higher order functions intead of normal loops and use async/await instead of promises (.then) this includes everyhing ( from looping over data to generating html)
2. Add another type of data tha needs to be fetched: Planets
   - Add a planet picture in the landing page
   - On clicking on it a table containing the follwing columns needs to be rendered with the planet data from swapi ( research and find the url for planets on the website):
     - Planet Name
     - Population
     - Climate
     - Gravity
     - Terrain
3. When all 3 resources are working (people, ships, planets) and are paginated properyly, add a CSS spinner that will only show up when the backend is being called in the backgroind (when we are waiting on a response from the server), google for inspiration, there are many that are ready made
4. Add an error message to the screen when the backend responds with some error. For example when the url returns not found or server error, tell the user that something went wrong in the screen (good place to render this is in the place of the tables)
