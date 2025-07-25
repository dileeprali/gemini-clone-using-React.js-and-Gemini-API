import React,{useContext} from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'



const Main = () => {

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Dileep</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>How to become an AI engineer</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarixe this topic: Gradient descent</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Sugggest beautiful names in srikakulam </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Write code to make an snake game using python</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
                        <hr />
                        <hr />
                        <hr />

                    </div>
                    :<div dangerouslySetInnerHTML={{ __html: resultData }} />

                    }
                    
                </div>


            </div>
            
            }


            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value = {input}type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate information, so always verify critical details from reliable sources before making decisions based on its responses.

                </p>
            </div>
        </div>

      
    </div>
  )
}

export default Main
