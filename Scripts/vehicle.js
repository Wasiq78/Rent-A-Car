let Cars = [
    {
        image: "images/cars-big/audi-box.png",
        carName: "Audi A1",
        price: 45,
        model: "Audi",
        doors: "4/5",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        image: "images/cars-big/golf6-box.png",
        carName: "Golf 6",
        price: 37,
        model: "VW",
        doors: "4/5",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        image: "images/cars-big/toyota-box.png",
        carName: "Toyota",
        price: 30,
        model: "Camry",
        doors: "4/5",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        image: "images/cars-big/bmw-box.png",
        carName: "BMW 320",
        price: 35,
        model: "ModernLine",
        doors: "4/5",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        image: "images/cars-big/benz-box.png",
        carName: "Mercedes",
        price: 50,
        model: "Benz GLK",
        doors: "4/5",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        image: "images/cars-big/passat-box.png",
        carName: "VW Passat",
        price: 25,
        model: "CC",
        doors: "4/5",
        transmission: "Manual",
        fuel: "Diesel"
    }
]

let carsHTML = "";
Cars.forEach((car) =>{
   carsHTML += `
   <div class="vehicle">
                <div class="vehicle-img">
                    <img src="${car.image}" alt="">
                </div>
                <div class="vehicle-content">
                    <div class="vehicle-info">
                        <h3>${car.carName}</h3>
                        <div class="vehicle-rating">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div class="vehicle-rent">
                        <h3>$${car.price}</h3>
                        <p>Per Day</p>
                    </div>
                </div>
                <div class="vehicle-specifications">
                    <div class="vehicle-group">
                        <div class="model">
                            <i class="fa-solid fa-car"></i>
                            <p>${car.model}</p>
                        </div>
                        <div class="doors">
                            <p>${car.doors}</p>
                            <i class="fa-solid fa-car"></i>
                        </div>
                    </div>
                    <div class="vehicle-group">
                        <div class="transmission">
                            <i class="fa-solid fa-car"></i>
                            <p>${car.transmission}</p>
                        </div>
                        <div class="fuel">
                            <p>${car.fuel}</p>
                            <i class="fa-solid fa-car"></i>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="book-btn">
                <a href="#" class="btn">Ride Now</a>
            </div>
            </div>
   `
})

let vehicleContainer = document.querySelector(".vehicles-container");
vehicleContainer.innerHTML = carsHTML;