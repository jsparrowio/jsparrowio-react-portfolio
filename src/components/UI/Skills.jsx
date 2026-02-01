export default function Skills({ links }) {
    let x = 1;
    return (
        links.map((link) => <img src={`${link}`} className="skills-icon" alt={'skill-icon-' + x++} key={'skill-' + x++}></img>)
    );
}