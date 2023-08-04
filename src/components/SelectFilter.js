// SelectFilter.js
import React from 'react';
import { useState, useRef, useEffect } from 'react';
const SelectFilter = ({ title, options, index }) => {
    // Your logic for the select filter component goes here

    const [showFilter, setShowFilter] = useState(false)
    // const [activeIndex, setActiveIndex] = useState(-1);
    const activeRef = useRef(0)

    const handleShowFilter = (e) => {
        console.log(e.target.id, "e")
        if (e.target.id == activeRef.current.id) {
            console.log('yes');
            setShowFilter(!showFilter)
        }

        else {
            setShowFilter(false)
        }
    }

    return (
        <div className="select-filter">
            {/* Your select filter UI */}
            <div className="select-filter">
                <div id={`${index}`} className="selection-input" onClick={(e) => { handleShowFilter(e) }}>
                    <span className="select-placeholder ">{title}</span>
                    <ul className="selected-options d-none">
                        <li>Studio</li>
                        <li>1BR</li>
                        <li>2BR</li>
                    </ul>
                </div>
                {showFilter && <div ref={activeRef} id={`${index}`} className='filter-popup'>
                    <div className="filter-popup-wrap">
                        <p>{title}</p>
                        <ul className="filters-options">
                            {options.map((option, index) => {
                                return (
                                    <li key={index}>
                                        <label className="input-group">{option}
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="filters-btn">

                            <div className="primary-anchor large-btn">
                                <button className="w-100 outline-btn" type="reset">
                                    <span>RESET</span>
                                </button>
                            </div>
                            <div className="primary-anchor large-btn">
                                <button className="w-100">
                                    <span>APPLY</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}


            </div>
        </div>
    );
};

export default SelectFilter;
