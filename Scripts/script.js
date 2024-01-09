// Adding active Class to car Buttons

let carButtons = document.querySelectorAll(".carBtn");
carButtons.forEach((button) => {
  button.addEventListener("click", function () {
    removeActiveClass();
    button.classList.add("active");
  });
});

function removeActiveClass() {
  carButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

// Displaying Cars on Click Function on Car Buttons
let image = document.querySelector(".rental-image");
let rentalTable = document.querySelector(".rental-table");


let audiBtn = document.getElementById("audiBtn");
audiBtn.addEventListener("click", function () {
  image.innerHTML = '<img src="images/cars-big/audia1.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$45</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>Audi</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>A1</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2012</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Manual</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Gasoline</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
});


let golfBtn = document.getElementById("golfBtn");
golfBtn.addEventListener("click", function () {
  image.innerHTML = '<img src="images/cars-big/golf6.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$37</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>Golf 6</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>Volkswagen</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2008</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Manual</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Diesel</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
});


let camryBtn = document.getElementById("camryBtn");
camryBtn.addEventListener("click", function () {
  image.innerHTML = '<img src="images/cars-big/toyotacamry.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$30</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>Camry</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>Toyota</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2006</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Automatic</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Hybrid</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
});


let bmwBtn = document.getElementById("bmwBtn");
bmwBtn.addEventListener("click", function () {
  image.innerHTML = '<img src="images/cars-big/bmw320.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$35</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>320</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>BMW</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2012</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Manual</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Diesel</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
});


let glkBtn = document.getElementById("glkBtn");
glkBtn.addEventListener("click", function () {
  image.innerHTML = '<img src="images/cars-big/benz.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$50</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>Benz GLK</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>Mercedes</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2006</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Manual</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Diesel</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
});


let passatBtn = document.getElementById("passatBtn");
passatBtn.addEventListener("click", function () {
  image.innerHTML = '<img src="images/cars-big/passatcc.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$25</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>Passat CC</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>Volkswagen</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2008</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Automatic</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Gasoline</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
});

// Display this content as default
window.onload =function (){
    image.innerHTML = '<img src="images/cars-big/audia1.jpg" alt="Audi">';
  rentalTable.innerHTML = `
  <p><span>$45</span> / rent per day</P>
  <table>
  <tr>
  <td>Model</td>
  <td>Audi</td>
  </tr>
  <tr>
  <td>Mark</td>
  <td>A1</td>
  </tr>
  <tr>
  <td>Year</td>
  <td>2012</td>
  </tr>
  <tr>
  <td>Doors</td>
  <td>4/5</td>
  </tr>
  <tr>
  <td>AC</td>
  <td>Yes</td>
  </tr>
  <tr>
  <td>Transmission</td>
  <td>Manual</td>
  </tr>
  <tr>
  <td>Fuel</td>
  <td>Gasoline</td>
  </tr>
  </table>
  <a href="#book" class="btn">RESERVE NOW</a>
  `
}


// Making FAQ section interactive
let questions = document.querySelectorAll(".question")
questions.forEach((question) =>{
  question.addEventListener("click", function(){
    question.classList.toggle("active")
  })
})