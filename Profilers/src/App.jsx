import './App.css'
import Data from "./Data/Data.json"
export function App() {

 return (
    <>
       {
           Data && Data.Profile.map((el)=>(
          
            <main key={el.name}>
                
                <div className='mainparents'>

              
                <section className='prents_div1'>
                     
                     <div className='info'>

                       <img src={el.img} className='img_1'></img>

                     </div>

                     <div className='proimg'>
                       <h1> {el.name}</h1>
                       <p className='p2'>{el.text}</p><hr></hr>
                       <p>{el.Discription}</p>

                    <div className='icon'>
                       {
                       el?.socialMedia.map((els)=>(
                          <img src={els.icon} className='img_2'></img>
                       ))
                      }
                    </div>
                    </div>
                </section>


                <section className='parents_div2'>
                   {
                              el?.info.map((elss) => (
                          <div className="details">
                            <img src={elss.img} className='img_3'></img>
                            <p className='p1'>{elss.text}</p>
                          </div>
                                  ))
                    }
                </section>

                </div>
            </main>

           ))
        } 
        
    </>
  )
}

export default App