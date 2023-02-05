import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMeal = 'www.themealdb.com/api/json/v1/1/random.php'


const AppProvider = ({children})=>{
    const [meals, setMeals] = useState([])
    
    const fetchData = async (url)=>{
        try{
            const {data} = await axios(url)
            setMeals(data.meals)
        }catch(e){
            console.log(e.response)
        }
    }

    useEffect(()=>{
        fetchData(allMealsUrl)
    },[])

    return <AppContext.Provider value={{meals}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}