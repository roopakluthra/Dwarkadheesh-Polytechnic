const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {

    const variants = {
        primary:
            "bg-blue-800 hover:bg-blue-900 text-white",

        secondary:
            "bg-amber-500 hover:bg-amber-600 text-white",

        outline:
            "border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
    };

    return (
        <button
            className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;