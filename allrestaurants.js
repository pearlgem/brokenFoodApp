document.addEventListener("DOMContentLoaded", function () {
  let restaurantContainer = document.getElementById("restaurantContainer");
  let storedRestaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

  if (storedRestaurants.length === 0) {
    restaurantContainer.innerHTML = "<p>No restaurants available.</p>";
    return;
  }

  restaurantContainer.innerHTML = storedRestaurants
    .map((restaurant) => {
      return `<div class="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
                  <img src="${restaurant.logo}" alt="${
        restaurant.name
      }" class="w-16 h-16 rounded-full mb-2">
                  <h2 class="text-xl font-bold">${restaurant.name}</h2>
                  <p class="text-gray-300">${restaurant.details}</p>
                  <h3 class="text-lg font-semibold mt-2">Dishes:</h3>
                  <ul class="list-disc ml-5 text-gray-200">
                    ${
                      restaurant.dishes.length > 0
                        ? restaurant.dishes
                            .map((dish) => `<li>${dish}</li>`)
                            .join("")
                        : "<li>No dishes added.</li>"
                    }
                  </ul>
                </div>`;
    })
    .join("");
});
