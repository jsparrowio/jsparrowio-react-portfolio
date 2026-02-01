export default function Nav({ links }) {
  return (
    <nav>
          <ul id="main-nav">
            {links.map((link) => link)}
          </ul>
    </nav>
  );
}
