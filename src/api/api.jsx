// https://github.com/b-arslan/FoodRecipeApp
const fetchData = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const json = await response.json();

    console.log(json);
    let tmpList = [];

    if (json.meals) {
        json.meals.forEach((key) => {
            let tmpItem = {
                name: key.strMeal,
                category: key.strCategory,
                area: key.strArea,
                desc: key.strInstructions,
                image: key.strMealThumb,
            }
            tmpList.push(tmpItem);
        });
    }

    return tmpList;
}

export default fetchData;


