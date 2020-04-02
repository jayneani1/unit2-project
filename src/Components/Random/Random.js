import React, {useState, useEffect} from "react"
import './Random.css'

function Random() {
    const [random, setRandom] = useState("")

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

      return (
        <div className="sectionRandom" style= {{ alignContent: "center"}}>
          <h2>Featured Cocktail</h2>
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
        </div>
        </div>
    )
    }

    {/* shoutout to Doug who helped walk me through pulling API*/ }

export default Random;