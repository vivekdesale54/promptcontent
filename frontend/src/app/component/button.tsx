import React from "react";



const Button = () => {
    return(
    <div>
        <button className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all duration-300">
            Get Started Free
            <svg xmlns="" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
        </button>
        <h3 className="mt-2 ml-3"> No credit card Required </h3>
    </div>
    );
};

export default Button;