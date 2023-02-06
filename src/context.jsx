import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php'


const AppProvider = ({children})=>{
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    
    const fetchData = async (url)=>{
        setLoading(true)
        try{
            const {data} = await axios(url)
            if(data.meals){
                setMeals(data.meals)
            }else{
                setMeals([])
            }
        }catch(e){
            console.log(e.response)
        }
        setLoading(false)
    }

    const fetchRandomData = ()=>{
        fetchData(randomMeal)
    }

    useEffect(()=>{
        fetchData(allMealsUrl)
    },[])

    useEffect(()=>{
        if(!searchTerm) return
        
        fetchData(`${allMealsUrl}${searchTerm}`)
    },[searchTerm])

    return <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomData }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}