import './Search.css'
import React, {useState, useEffect} from "react"


function Search() {
    const [search, setSearch]= useState("brandy")
    const [drinks, setDrinks]= useState([])
    const [submit, setSubmit]= useState("")
    

    
      useEffect(() => {
          const randomUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
          const makeAPICall = async () => {
            const res = await fetch(randomUrl);
            const json = await res.json();
            setDrinks(json);
          };
          makeAPICall();
        }, [search]);
    
        const handleSubmit = e => {
            e.preventDefault();
            setSearch(submit)
            
            console.log('hersearch', search)
            // handleSubmitted(submit);
          };
          const handleChangeAlcohol = e => {
            setSubmit(e.target.value);
            console.log('here', submit)
            console.log('here', drinks)
          };
    if (!drinks.drinks) {
        return <></>
    }
    console.log('checking state', drinks.drinks)

    const drinksMap = drinks.drinks.map((drink, i) => {
      return (
          <div key={i}>
            <div className="card" style={{
          alignItems: "center",
          flexWrap: "wrap",
          display:"flex", 
          borderRadius: "10px",
          boxShadow: "0px 5px 20px rgb(71,71,71)",
          margin: "20px",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: "linear-gradient(45deg, #3B0D10 0%, #BBBBBB 100%)",
          alignItems: "center",
          minWidth: "40%",
          padding: "1em",
          width: "400px",
          height: "500px",
          color: "white"}}>
              <h1 className="searchTitle">{drink.strDrink}</h1>
              <ul className="ingredientSearch">
            <li>{drinks.strIngredient1}</li>
            <li>{drinks.strIngredient2}</li>
            <li>{drinks.strIngredient3}</li>
            <li>{drinks.strIngredient4}</li>
          </ul>
             <img style={{width: '150px', height: '150px',
             borderRadius: '20%'}}
             alt = "" src={drink.strDrinkThumb} />
          {/*<h1 className="titleDrink">{drink.strDrink}</h1> */}
          <h2 className="instruc">{drinks.strInstructions}</h2>
          <img className="searchImage" alt = "" src={drinks.strDrinkThumb} />
        </div>
           </div>
        )
      })
      return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Enter Alcohol"
                    type="text"
                    value={submit}
                    onChange={handleChangeAlcohol} 
                />

                <input type='submit' value='Submit' />
            </form>
            <h2>Suggestions</h2>
          {drinksMap} 
          </div>
      )
    }
export default Search