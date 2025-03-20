import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={`bg-[#011588] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${className}`}>
            {text}
        </button>
    );
};

export default Button;