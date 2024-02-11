import { getMeals } from "../utils/http";
import { useState, useEffect, useContext } from "react";

import MealCard from "./MealCard"

export default function MealsList({ }) {

    const [availableMeals, setAvailableMeals] = useState();

    useEffect(() => {
        async function fetchMeals() {
            setAvailableMeals(await getMeals());
        }
        fetchMeals();

    }, []);

    return (
        <ul id="meals">
            {availableMeals && availableMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
            ))}
        </ul>
    );
};
