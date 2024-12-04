export default function Skills({ links }) {

    return (
        links.map((link) => <img src ={`${link}`} className="skills-icon"></img>)
    );
  }