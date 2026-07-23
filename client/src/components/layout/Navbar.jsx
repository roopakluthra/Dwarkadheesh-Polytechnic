import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../shared/Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    <NavLinks />

                    <Button variant="primary">
                        Apply Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t bg-white lg:hidden">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        <NavLinks
                            mobile
                            onClick={() => setIsOpen(false)}
                        />

                        <Button
                            variant="primary"
                            className="w-full"
                        >
                            Apply Now
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;