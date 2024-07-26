import twitter from './img/twitterpng.png'
import linkedin from "./img/linkedinpng.png"
import insta from "./img/instapng.png"

export default function Socials(){
    return(<div className="socials">
        <h2 className="text-3xl font-bold m-3">Socials</h2>
        <div className="sm:grid sm:grid-cols-3 sm:justify-items-center sm:mt-16  grid grid-cols-2 justify-items-center mt-10">
                       
          <div className="skill-icon ">
                <a href="https://x.com/SirAyushman888" target="_blank">
                
                <img className="logo" src={twitter}></img>
                <span>Twitter/X</span>
               </a>
               </div>
          <div className="skill-icon">
                <a href="https://www.linkedin.com/in/ayushman-sharma-77687b237/">
                
                <img className="logo" src={linkedin}></img>
                <span>linkedin</span>
               </a>
               </div>
          <div className="skill-icon">
                <a href="">
                
                <img  className="logo" src={insta}></img>
                <span>Instagram</span>
               </a>
               </div>
            </div>
        </div>
    )
}