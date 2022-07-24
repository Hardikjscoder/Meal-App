const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const btn = document.getElementById('getMealBtn')

btn.addEventListener('click', sendMeal)

function sendMeal() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = function () {
        if (this.status == 200) {
            let response = JSON.parse(this.responseText)
            let mealsArr = response.meals[0]
            const mealContainer = document.querySelector('.meal')

            let mealHtml = `
                            <div class="meal_content">
                                <img src="${mealsArr.strMealThumb}" alt="img">
                                <h2 class="mt-2">${mealsArr.strMeal}</h2>
                                <p class="my-3">${mealsArr.strInstructions}</p
                                <span><b>Category</b> : ${mealsArr.strCategory}</span> <br>
                                <span><b>Area</b> : ${mealsArr.strArea}</span> <br>                                        
                                <h3>Ingredients</h3>
                                <ul class="ingredient_list">
                                    <li>${mealsArr.strIngredient1}</li>
                                    <li>${mealsArr.strIngredient2}</li>
                                    <li>${mealsArr.strIngredient3}</li>
                                    <li>${mealsArr.strIngredient4}</li>
                                    <li>${mealsArr.strIngredient5}</li>
                                </ul>
                                <h3>Measures</h3>
                                <ul class="measures_list">
                                    <li>${mealsArr.strMeasure1}</li>
                                    <li>${mealsArr.strMeasure2}</li>
                                    <li>${mealsArr.strMeasure3}</li>
                                    <li>${mealsArr.strMeasure4}</li>
                                    <li>${mealsArr.strMeasure5}</li>
                                </ul>
                                <a href="${mealsArr.strYoutube}" target="__blank">Video Recipe</a>
                            </div>
                    `
            mealContainer.innerHTML = mealHtml
        }
    }

    xhr.send()
}