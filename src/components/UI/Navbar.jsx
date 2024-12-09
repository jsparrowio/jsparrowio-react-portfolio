// export the Nav UI function to be imported elsewhere
export default function Nav({ links }) {
  // returns a navbar link for every item in the array fed into the function as an argument
  return (
    <nav>
          <ul id="main-nav">
            {links.map((link) => link)}
          </ul>
    </nav>
  );
}
