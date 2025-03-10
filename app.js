// Admin login page
const user = document.getElementById("user");
const password = document.getElementById("password");

localStorage.setItem("user", "admin");
localStorage.setItem("password", "admin");

function login() {
  if (
    user.value === localStorage.getItem("user") &&
    password.value === localStorage.getItem("password")
  ) {
    window.location.href = "home.html";
  } else {
    alert("please enter a valid user");
  }
}

const restaurantName = document.getElementById("RestaurantName");
const restaurantDetails = document.getElementById("RestaurantDescription");
const restaurantLogo = document.getElementById("RestaurantLogo");

let restaurantList = [];
let previousValue = localStorage.getItem("restaurants");
if (previousValue) {
  restaurantList = JSON.parse(previousValue);
}

let restaurant;

function addRestaurant() {
  if (
    !restaurantName.value ||
    !restaurantDetails.value ||
    !restaurantLogo.files[0]
  ) {
    alert("Please fill all fields and select a logo.");
    return;
  }

  restaurant = {
    name: restaurantName.value,
    details: restaurantDetails.value,
    logo: URL.createObjectURL(restaurantLogo.files[0]),
    dishes: [],
  };

  restaurantList.push(restaurant);
  localStorage.setItem("restaurants", JSON.stringify(restaurantList)); //

  restaurantName.value = "";
  restaurantDetails.value = "";
  restaurantLogo.value = "";

  addtable();
}
console.log(restaurantList);
function addtable() {
  let tablebody = document.getElementById("tableHtml");
  if (!tablebody) {
    return;
  }
  tablebody.innerHTML = restaurantList
    .map(function (restaurant, index) {
      return `<tr class="bg-gray-800 hover:bg-gray-700 transition">
      <td class="border p-3" ><img src="${restaurant.logo}" width="50" height="50" style="border-radius: 5px;"></td>
      <td class="border p-3">${restaurant.name}</td>
      <td class="border p-3">${restaurant.details}</td>
      <td class="border p-3">
        <button onclick="deleteRestaurant(${index})"  class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded shadow-md transition">Delete</button>
      </td>
    </tr>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", addtable);

function deleteRestaurant(index) {
  restaurantList.splice(index, 1);
  localStorage.setItem("restaurants", JSON.stringify(restaurantList));
  addtable();
}
