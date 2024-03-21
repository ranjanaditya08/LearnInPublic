const meals = document.getElementById("meals");

getRandomMeal();

async function getRandomMeal() {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const resp = await fetch(URL);
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getMealsById(id) {
  const meal = await fetch(
    "www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getMealsBySearch(term) {
  const meals = await fetch(
    "www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
          <div class="meal_header">
           ${random ? `<span class="random">Random Recipe</span>` : ""}
            <img
              src="${mealData.strMealThumb}"
              alt="${mealData.strMeal}"
            />
          </div>
          <div class="meal_body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav_btn">
              <i class="fas fa-heart"></i>
            </button>
          </div>
    `;

  const btn = meal.querySelector(".meal_body .fav_btn");

  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      removeMealFromLocalStorage(mealData.idMeal);
      btn.classList.remove("active");
    } else {
      addMealToLocalStorage(mealData.idMeal);
      btn.classList.add("active");
    }

  });

  meals.appendChild(meal);
}

function addMealToLocalStorage(mealId) {
  const mealIds = getMealsFromLocalStorage();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealFromLocalStorage(mealId) {
  const mealIds = getMealsFromLocalStorage();
  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

function getMealsFromLocalStorage() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));

  return mealIds === null ? [] : mealIds;
}
