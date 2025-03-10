let storedRestaurant = JSON.parse(localStorage.getItem("restaurants"));
console.log(storedRestaurant);

for (let item of storedRestaurant) {
  //   console.log("test");

  let restaurantSelection = document.getElementById("selectedRestaurant");
  restaurantSelection.innerHTML += `<option class="from-neutral-950" >${item.name}</option>`;

  // restoName = item.name;
}

function addDish() {
  let selectedRestaurant = document.getElementById("selectedRestaurant");
  let dishName = document.getElementById("dishName");
  // let dishlogo = document.getElementById("dishface");

  let foundRestaurant = storedRestaurant.find(function (restaurant) {
    return restaurant.name === selectedRestaurant.value;
  });
  console.log(selectedRestaurant.value);
  foundRestaurant.dishes.push(dishName.value);
  localStorage.setItem("restaurants", JSON.stringify(storedRestaurant));
}
