import '../Componet/Profile.css'
import Data from "../src/Data/Data1.json"

 export const Profiles=()=>{
  
    return(
        <>
        {
           Data && Data.Profile.map((el)=>{
          
            <main key={el.name}>
                
                <section>
                     
                     <div className='info'>

                       <img src={el.img}></img>

                     </div>

                     <div className='proimg'></div>
                       <h1> {el.name}</h1>
                       <p>{el.text}</p>
                       <p>{el.Discription}</p>
                       

                </section>

                <section></section>
            </main>


           })
        }
           
        </>
 
    )
}