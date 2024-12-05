export default function Skills({ links }) {
let x = 1;
    return (
        links.map((link) => <img src ={`${link}`} className="skills-icon" key={'skill'+x++}></img>)
    );
  }