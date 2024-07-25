import githublogo from './img/github.png'

export default function Projects (){
    return (
        <div className="projects">
            <h2>Projects</h2> 
            <div className="rect-card">
                <a href="https://github.com/SecretCodingsauce" target="_blank"><p>Link to my Github</p>
                <img className="logo" src={githublogo}></img>
                </a>
                
            </div>
            <div className="sq-card">
                <a href="" target="_blank">
                <p>Simple Calculator App</p>
                <img src=""></img>
                </a>
            </div>
            <div className="sq-card">
                <a href="" target="_blank">
                <p>Simple Calculator App</p>
                <img src=""></img>
                </a>
            </div>
            <div className="sq-card">
                <a href="" target="_blank">
                <p>Simple Calculator App</p>
                <img src=""></img>
                </a>
            </div>
            <div className="sq-card">
                <a href="" target="_blank">
                <p>Simple Calculator App</p>
                <img src=""></img>
                </a>
            </div>
        </div>
    )
}