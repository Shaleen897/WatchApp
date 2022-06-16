import React from 'react';


const Input = props => {
    return (
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-[60%] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange ? (e) => props.onChange(e) : null} />
        

    );
}

export default Input;