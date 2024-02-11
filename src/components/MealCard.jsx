import { useContext } from "react";
import { CartContext } from "./cartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";


export default function MealCard({ meal }) {

  const {addToCart} = useContext(CartContext);

  return (
    <li className="meal-item">

      <article>

        <img src={`http://localhost:3000/${meal.image}`} />

        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions">
          <Button onClick={() => addToCart(meal)}>Add to Cart</Button>
        </p>

      </article>
    </li>

  );
};


