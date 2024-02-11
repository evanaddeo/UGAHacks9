import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../app/recipe.css";

const Recipe = () => {
  const router = useRouter();
  const { recipe_id } = router.query;
  const [recipeInfo, setRecipeInfo] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/get_meal_info/${recipe_id}`);

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
          }
        const data = await response.json();
        console.log('Response data:', data);
        if (!data) {
            throw new Error("API response is empty");
          }
        setRecipeInfo(data);
      } catch (error) {
        console.error('Error fetching meal recipes:', error);
      }
    };

    if (recipe_id) {
      fetchRecipe();
    }
  }, [recipe_id]);

  if (!recipeInfo) {
    // Render loading or placeholder content while fetching data
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">{recipeInfo.title}</h1>
  
      <div className="ingr">
        <h2>Ingredients:</h2>
        <ul>
          {recipeInfo.ingredients.map((ingredient, index) => (
            <li key={index}>
              {`${ingredient.amount} ${ingredient.measures.us.unitShort} ${ingredient.name}`}
            </li>
          ))}
        </ul>
      </div>
  
      <div className="inst">
        <h2>Instructions:</h2>
        <ol>
          {recipeInfo.instructions.map((instruction, index) => (
            <div key={index}>
              <ol className="lefty">
                {instruction.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{`${step.step}`}</li>
                ))}
              </ol>
            </div>
          ))}
        </ol>
      </div>
  
      <div className="nutr">
        <h2>Nutrition:</h2>
        <p className="over">{`Carbs: ${recipeInfo.nutrition.caloricBreakdown.percentCarbs}%`}</p>
        <p className="over">{`Fat: ${recipeInfo.nutrition.caloricBreakdown.percentFat}%`}</p>
        <p className="over">{`Protein: ${recipeInfo.nutrition.caloricBreakdown.percentProtein}%`}</p>
      </div>
    </div>
  );
  
  
  
  
};

export default Recipe;
