import { useGlobalContext } from "../context"
import {BsHandThumbsUp} from 'react-icons/bs'

const Recipe = ()=>{
    const {meals, loading} = useGlobalContext()

    if(loading){
        return(
            <section className="container mt-5">
                <h4>Loading...</h4>
            </section>
        )
    }

    if(meals.length < 1){
        return(
            <section className="container mt-5">
                <h3>No meals matched your search term. Please try again.</h3>
            </section>
        )
    }

    return(
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                {
                    meals.map((meal)=>{
                        const {idMeal:id, strMeal:title, strMealThumb:image} = meal
                        return(
                            <div key={id} className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card m-2 shadow" style={{cursor: "pointer"}}>
                                    <img src={image} alt="" />
                                    <div className="card-body">
                                        <div className="row justify-content-evenly">
                                            <h5 className="col-6">{title}</h5>
                                            <button className="like-btn col-3 offset-md-3"><BsHandThumbsUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Recipe