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
          };
          const handleChangeAlcohol = e => {
            setSubmit(e.target.value);
            console.log('here', submit)
            console.log('here', drinks)
          };
    if (!drinks.drinks) {
        return <></>
    }

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
                width: "350px",
               height: "300px",
               color: "white"}}>
           <h1 className="searchTitle">{drink.strDrink}</h1>
           <img style={{width: '150px', height: '150px',
             borderRadius: '20%'}}
             alt = "" src={drink.strDrinkThumb} />
          <h2 className="instruc">{drinks.strInstructions}</h2>
          <img className="searchImage" alt = "" src={drinks.strDrinkThumb} />
        </div>
      </div>
        )
      })
      return (
        <div className="SearchBar" style= {{ display: "flex", 
             flexDirection: "column",
              alignContent: "center", 
              justifyContent: "center",
              alignItems: "center"}}> 
          <form onSubmit={handleSubmit} style= {{
               padding: "25px"}}>
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