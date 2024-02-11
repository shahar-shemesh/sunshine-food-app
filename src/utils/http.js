

export async function getMeals() {
    const meals = await fetch("http://localhost:3000/meals")
        .then((response) => response.json())
        .then((res) => res)
        .catch((error) => JSON.stringify(error));


    return meals;
}