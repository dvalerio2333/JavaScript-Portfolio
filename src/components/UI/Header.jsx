import {useState, useEffect} from 'react'
import './Header.css';

function Header() {
    const [isWidth,setIsWidth] = useState("600px")
    const [isHeight,setIsHeight] = useState("600px")
    const handleResize = ()=>{
        if(window.innerWidth<720){
            setIsWidth("300px")
            setIsHeight("300px")
        }
    };

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
    });

  return (
    <div className='container-fluid' style={{backgroundColor:"#0A2E46"}}>
        <div className='row'>

            <div className="co-lg-6 col-md-6 col-sm-12 col-xs-12">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_1cazwtnc.json" 
             background="#0A2E46"
             speed="1"  
             style={{width: {isWidth}, height: {isHeight}}}
             loop  autoplay>
             </lottie-player>
            </div>
            <div className="co-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 className="main-title">
                    <span style={{color: "red"}}>&lt;</span>Development<span style={{color: "red"}}>&gt;</span> <br /> Out of this World!
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Header