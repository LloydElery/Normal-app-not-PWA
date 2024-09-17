/*
 * container Tar ett element som har klassen container
 */
const container = document.querySelector('.container');
/*
 * Skapar en array för kaffe samt bilder på kaffe
 */
const coffees = [
  {
    name: 'Perspiciatis',
    image: 'images/coffee1.jpg',
  },
  {
    name: 'Voluptatem',
    image: 'images/coffee2.jpg',
  },
  {
    name: 'Explicabo',
    image: 'images/coffee3.jpg',
  },
  {
    name: 'Rchitecto',
    image: 'images/coffee4.jpg',
  },
  {
    name: ' Beatae',
    image: 'images/coffee5.jpg',
  },
  {
    name: ' Vitae',
    image: 'images/coffee6.jpg',
  },
  {
    name: 'Inventore',
    image: 'images/coffee7.jpg',
  },
  {
    name: 'Veritatis',
    image: 'images/coffee8.jpg',
  },
  {
    name: 'Accusantium',
    image: 'images/coffee9.jpg',
  },
];

/* För varje kaffe vill vi plocka ut namn och bild
 * samt skriva ut dessa i vår html
 */
const showCoffees = () => {
  let output = '';
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCoffees);
