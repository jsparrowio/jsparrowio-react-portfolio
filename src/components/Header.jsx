// import the navagation component to generate the nav bar
import Navigation from '../components/Navigation';
// export the header function to be imported elsewhere
export default function Header() {
    // return the header code
    return (
        <header>
            <h1>Josh Garrett - jsparrowio</h1>
            <Navigation />
        </header>
    );
}
