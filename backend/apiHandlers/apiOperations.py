import requests

# Call with the saved recipe ID
#
# extendedIngredients : a list that contains all the ingredients req by recipe
# analyzedInstructions : a list that contains cooking instructions
# nutrition : an object that contains detailed nutrition info ab recipe
def get_recipe_details(recipe_id):
    url = "https://api.spoonacular.com/recipes/{}/information".format(recipe_id)
    params = {
        "apiKey": "a581f0a1ab1043379b3c2bc3a853d918",
        "includeNutrition": True
    }
    response = requests.get(url, params=params)
    return response.json()


# Include "breakfast", "lunch", or "dinner" as input
#
# Returns 30 options for that particular kind of meal
def get_meal_recipes(meal_type):
    url = "https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "apiKey": "a581f0a1ab1043379b3c2bc3a853d918",
        "type": meal_type,
        "number": 30,
        "instructionsRequired": True
    }
    response = requests.get(url, params=params)
    return response.json()