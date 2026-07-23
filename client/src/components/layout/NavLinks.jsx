import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navigation";

const NavLinks = ({ mobile = false, onClick }) => {
    return (
        <>
            {NAV_LINKS.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClick}
                    className={({ isActive }) =>
                        `${mobile ? "block py-3" : ""
                        } font-medium transition-colors duration-300 ${isActive
                            ? "text-blue-800"
                            : "text-slate-700 hover:text-blue-800"
                        }`
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    );
};

export default NavLinks;