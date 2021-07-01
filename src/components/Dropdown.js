import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelected }) => {

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef()

    useEffect(() => {

        const onBodyClick = (event) => {

            if (ref.current.contains(event.target)) {
                return;
            }

            setIsOpen(false)
        }

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, [])

    const renderedOptions = options.map(option => {

        if (selected.value === option.value) {
            return null;
        }

        return (
            <div key={option.label} onClick={() => onSelected(option)} className='item'>
                {option.label}
            </div>
        )
    });

    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={() => setIsOpen(!isOpen)} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${isOpen ? 'visible' : ''} transition`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;