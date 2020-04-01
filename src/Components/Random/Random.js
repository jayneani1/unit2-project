import React, {useState, useEffect} from "react"
import './Random.css'

function Random() {
    const [random, setRandom] = useState("")
    {/*const [randomDrinks, setRandomDrinks] = useState([]) */}

      useEffect(() => {
          const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
          const makeAPICall = async () => {
            const res = await fetch(randomUrl);
            const json = await res.json();
            setRandom(json);
          };
          makeAPICall();
        }, []);
    
    console.log('test', random)
    if (!random.drinks) {
        return <></>
    }

  {/*const randomDrinksMap = randomDrinks.randomDrinks.map((randomDrinks, i) => {
      return (
          <div key={i}>
              <h1>{randomDrinks.strRandomDrinks}</h1>
             <img alt = "" src={randomDrinks.strRandomDrinksThumb} />
           </div>
        )
      }) */}

    return (
        <div className="card">
          <h1 className="titleDrink">{random.drinks[0].strDrink}</h1>
          <ul className="ingredient">
            <li>{random.drinks[0].strIngredient1}</li>
            <li>{random.drinks[0].strIngredient2}</li>
            <li>{random.drinks[0].strIngredient3}</li>
            <li>{random.drinks[0].strIngredient4}</li>
          </ul>
          <h2 className="instruc">{random.drinks[0].strInstructions}</h2>
          <img className="randomImage" alt = "" src={random.drinks[0].strDrinkThumb} />
          {/*{randomDrinksMap}*/}
        </div>
    )
    }

export default Random;