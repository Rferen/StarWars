const cardContainer = document.querySelector('#card-container');
const url = "https://mocki.io/v1/7e215178-20c4-4b8c-8ce5-302b33e1a2e9";
async function main() {
  const characters = await fetch(url).then(res => res.json());
  for (let i = 0; i < characters.length; i++) {
    const cardTemplate = `
      <div class="card">
        <img class="card-img" src="${characters[i].image}" alt="${characters[i].name}">
        <p class="character-name">${characters[i].name}</p>
        <button onclick="showVideos(${i})">See More</button>
        <div id="videoContainer${i}" style="display: none;">        
          <iframe width="560" height="315" src="${characters[i].video}" allowfullscreen></iframe>
        </div>
      </div>
    `;
    cardContainer.innerHTML += cardTemplate;
  }
}

/* const characters = [
  {
    id: 1,
    name: 'Luke Skywalker',
    video: './videos/luke.mp4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3koTbzJJDLaPGoPOIFnP8woGx1uWnDfFwl5SuMNuP29zpcsXN6jDWJbr4b2PfjIt_sQ&usqp=CAU',
  },
  {
    id: 2,
    name: 'Darth Vader',
    video: './videos/darth-vader.mp4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CagerwTzyLVcbO4J8-cUa6qnxOKyFHX7wkjb-bIJIF6uVE7vF51hU7JMfJ6S_lhZTv0&usqp=CAU',
  },
  {
    id: 3,
    name: 'Yoda',
    video: './videos/yoda-dies.mp4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAz-zBlMM3FG-RJVmbzXVEBzcCF1B6o67yfcWd9ONl5efASOs1IGnDOMHtJcgjkdtBn28&usqp=CAU',
  },
  {
    id: 4,
    name: 'Palpatine',
    video: './videos/palpatine.mp4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcpaktCWrELo5qwJJ-rEzvCZJQz0IC2oJp4XtEZe8jtqKjnMRlTLybF9_RhPeDa3MrXY&usqp=CAU',
  },
]; */

function showVideos(index) {
  const videoContainer = document.getElementById(`videoContainer${index}`);

  // Ellenőrizzük, hogy a videókonténer látható-e vagy sem
  if (videoContainer.style.display === 'none') {
      // Ha nem látható, akkor megjelenítjük
      videoContainer.style.display = 'block';
  } else {
      // Ha látható, akkor elrejtjük
      videoContainer.style.display = 'none';
  }
}

main();
