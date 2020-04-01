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
              <h1>{drink.strDrink}</h1>
             <img alt = "" src={drink.strDrinkThumb} />
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
          {drinksMap} 
          </div>
      )
    }
export default Search