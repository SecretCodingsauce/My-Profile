import githublogo from './img/github.png'
import calculator from "./img/icons8-calculator-64.png"
import listicon from "./img/icons8-list-64.png"
import quotesicon from "./img/icons8-quote-80.png"
export default function Projects (){
    return (
        <div className="" >
           
               
                <a className="flex border-2 border-none  justify-center p-2 m-5 ml-14 mr-14 rounded-lg bg-slate-300 min-w-max hover:rounded-2xl hover:bg-slate-400 active:bg-slate-500  "  href="https://github.com/SecretCodingsauce" target="_blank">
                <img className="max-w-14 max-h-14 object-contain" src={githublogo}></img>
                <p className='mt-2 ps-4 text-center text-slate-600 text-3xl font-semibold'>Visit my Github</p>
                </a>
                
                
            <div className='sm:grid sm:grid-cols-3 sm:justify-items-center sm:mt-10  grid grid-cols-2 justify-items-center mt-10' >
            <div className="skill-icon">
                <a href="https://fetch-and-display-user-data.vercel.app/" target="_blank">
                <img className="logo" src={listicon}></img>
                <p className='text-sm'>Fetch and display Data</p>
                </a>
            </div>
            <div className="skill-icon">
                <a href="https://random-quote-fetcher.vercel.app/" target="_blank">
                <img className="logo" src={quotesicon}></img>
                <p className='text-xs'>Random Quote Generator</p>
                </a>
            </div>
            <div className="skill-icon">
                <a href="" target="_blank">
                <img className="logo" src={calculator}></img>
                <p className='text-sm'>Simple Calculator App</p>
                </a>
            </div>
            <div className="skill-icon">
                <a href="" target="_blank">
                <img className="logo" src={calculator}></img>
                <p className='text-sm'>Simple Calculator App</p>
                </a>
            </div>
            <div className="skill-icon">
                <a href="" target="_blank">
                <img className="logo" src={calculator}></img>
                <p className='text-sm'>Simple Calculator App</p>
                </a>
            </div>
            <div className="skill-icon">
                <a href="" target="_blank">
                <img className="logo" src={calculator}></img>
                <p className='text-sm'>Simple Calculator App</p>
                </a>
            </div>
            </div>
        </div>
    )
}