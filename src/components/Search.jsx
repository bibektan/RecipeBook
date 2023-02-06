import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = ()=>{

    const [text, setText] = useState('')
    const {setSearchTerm, fetchRandomData} = useGlobalContext()

    const handleChange = e=>{
        console.log(e.target.value)
        setText(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = ()=>{
        setSearchTerm('')
        setText('')
        fetchRandomData()
    }

    return(
        <header className="container mt-5">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="text" value={text} onChange={handleChange} className="form-control" id="" placeholder="type favorite meal" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">search</button>
                </div>
                <div className="col-auto">
                    <button onClick={handleRandomMeal} type="submit" className="btn btn-success mb-3">Suprise Me!</button>
                </div>
            </form>
        </header>
    )
}

export default Search