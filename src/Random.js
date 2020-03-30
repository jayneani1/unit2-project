import React, {useState, useEffect} from "react"

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
    
    console.log('asdasdsa', random)
    if (!random.drinks) {
        return <></>
    }
    return (
        <div style={{paddingLeft:'200px'}}>
          <h1>{random.drinks[0].strDrink}</h1>
          <h2>{random.drinks[0].strInstructions}</h2>
          <img alt = "" src={random.drinks[0].strDrinkThumb} />
        </div>
    )
    }

export default Random