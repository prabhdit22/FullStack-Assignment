import { useEffect,useState } from "react";
import axios from "axios";
import "./App.css";
const Axios = () =>{
    const [myCard,setMyCard]=useState([]);
    const getData=() =>{
    axios.get("http://localhost:8080/cards").then((res)=>{
        setMyCard(res.data);
    }).catch((err)=>{
        console.log(err);
    })
    }

    useEffect(()=>{
     getData()
    },[])


    return(
        <>
       <div className="grid ">
        {
            myCard.map((cards)=>{
                const {id,title,description}=cards;
                return(
                  
                   <div className="card" key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                   
                );
            })
        }
        </div>
        </>
    )
   
}


export default Axios;