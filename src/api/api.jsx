/*

let tmpList = [];


const fetchData = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const json = await response.json();
    console.log(json);
    debugger;
    if(json.meals.length > tmpList.length){

        json.meals.forEach((key)=> {
            let tmpItem = {
                name: key.strMeal,
                category: key.strCategory,
                area: key.strArea,
                desc: key.strInstructions
            }
            tmpList.push(tmpItem);
        });
        return tmpList;
    }
    
    tmpList.length = 0;
}




export default fetchData;
*/

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
                desc: key.strInstructions
            }
            tmpList.push(tmpItem);
        });
    }

    return tmpList;
}

export default fetchData;


