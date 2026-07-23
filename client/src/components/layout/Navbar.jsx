import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-700"
                >
                    Dwarkadheesh Polytechnic
                </Link>

                <div className="hidden gap-8 md:flex">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/faculty">Faculty</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;