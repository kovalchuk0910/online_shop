import "./styles/About.css";

export default function About() {
    return(
        <div className="about">
            <img src={require('../images/about/Photo.jpg')} />
            <h1>Denis Koval</h1>
            <h3>Phone number: <span>+380688297625</span></h3>
            <h3>Email: <span>ddkovalchuk0910@gmail.com</span></h3>
        </div>
    )
}