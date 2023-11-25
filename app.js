const cardContainer = document.querySelector('#card-container');
const characters = [
    {
      id: 1,
      name: 'Luke Skywalker',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3koTbzJJDLaPGoPOIFnP8woGx1uWnDfFwl5SuMNuP29zpcsXN6jDWJbr4b2PfjIt_sQ&usqp=CAU',
    },
    {
      id: 2,
      name: 'Darth Vader',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CagerwTzyLVcbO4J8-cUa6qnxOKyFHX7wkjb-bIJIF6uVE7vF51hU7JMfJ6S_lhZTv0&usqp=CAU',
    },
    {
      id: 3,
      name: 'Yoda',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAz-zBlMM3FG-RJVmbzXVEBzcCF1B6o67yfcWd9ONl5efASOs1IGnDOMHtJcgjkdtBn28&usqp=CAU',
    },
    {
      id: 4,
      name: 'Palpatine',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcpaktCWrELo5qwJJ-rEzvCZJQz0IC2oJp4XtEZe8jtqKjnMRlTLybF9_RhPeDa3MrXY&usqp=CAU',
    },
  ];
  for(let i = 0; i < characters.length; i++){
    const cardTemplate = `
      <div class="card">
        <img src="${characters[i].image}" alt="${characters[i].name}">
        <p>${characters[i].name}</p>
        <button class="card-button">See more</button>
      </div>
    `;
    cardContainer.innerHTML += cardTemplate;
}
let video = document.getElementById("myVideo");
let btn = document.getElementById("videoBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
