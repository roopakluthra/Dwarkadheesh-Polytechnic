import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-800 text-white">
                <GraduationCap size={24} />
            </div>

            <div>
                <h1 className="text-lg font-bold text-slate-800">
                    Dwarkadheesh
                </h1>

                <p className="text-xs text-slate-500">
                    Polytechnic
                </p>
            </div>
        </Link>
    );
};

export default Logo;