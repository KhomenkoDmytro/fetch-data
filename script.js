const rootDiv = document.querySelector(`#root`);
const filmsUrl = `https://ajax.test-danit.com/api/swapi/films`;
fetch(filmsUrl)
  .then((response) => response.json())
  .then((starWarsFilms) => {
    starWarsFilms.forEach((starWarsFilm) => {
      let filmDiv = document.createElement('div');
      filmDiv.textContent = `${starWarsFilm.episodeId} ${starWarsFilm.name} ${starWarsFilm.openingCrawl}`;
      rootDiv.append(filmDiv);
      let charactersList = document.createElement('ul');

      starWarsFilm.characters.forEach((characterUrl) => {
        rootDiv.append(charactersList);
        fetch(characterUrl)
          .then((characterResponse) => characterResponse.json())
          .then((starWarsCharachters) => {
            let characterListItem = document.createElement('li');
            characterListItem.textContent = `${starWarsCharachters.name}`;
            console.log(characterListItem);
            charactersList.append(characterListItem);
          })
          .catch((error) => console.log(error));
      });
    });
  })
  .catch((error) => console.log(error));
