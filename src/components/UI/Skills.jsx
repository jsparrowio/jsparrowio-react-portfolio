// export the skills UI function to be imported elsewhere
export default function Skills({ links }) {
    // incremental number for both alt text and key
    let x = 1;
    // returns a skill icon for every item in the array fed into the function as an argument
    return (
        links.map((link) => <img src={`${link}`} className="skills-icon" alt={'skill-icon-' + x++} key={'skill-' + x++}></img>)
    );
}