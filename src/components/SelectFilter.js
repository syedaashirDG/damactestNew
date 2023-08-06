import React, { useState } from 'react';

const SelectFilter = ({ title, options, activeField, index,handleShowFilter,onStateChange }) => {

  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (event, option) => {
    const { checked } = event.target;
    if (checked) {
      // Add the option value to the array if it's checked
      setCheckedValues((prevChecked) => [...prevChecked, option]);
    } else {
      // Remove the option value from the array if it's unchecked
      setCheckedValues((prevChecked) => prevChecked.filter((value) => value !== option));
    }
  };

  const handleApply=()=>{
    handleShowFilter(null)
    onStateChange(checkedValues);
  }
  
  // console.log(checkedValues);


  return (
    <div className="select-filter">
      <div className="selection-input" onClick={(()=>handleShowFilter(index))}>
        {checkedValues.length === 0 ?
        <span className="select-placeholder">{title}</span>:
        <div className='flex gap-2 justify-center' >
          {checkedValues.map((item,index)=>{
            return(
              <div key={index} className='bg-gray-200 h-[22px] p-[5px] px-[10px]' >
                <p className='text-gray-400 text-[13px] ' >{item}</p>
                </div>
            )
          })}
          
        </div>
        }
        <ul className="selected-options d-none">
          <li>Studio</li>
          <li>1BR</li>
          <li>2BR</li>
        </ul>
      </div>
      {activeField === index && (
        <div className="filter-popup">
          <div className="filter-popup-wrap" >
            <p>{title}</p>
            <ul className="filters-options">
              {options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label className="input-group">
                    {option}
                    <input type="checkbox" value={option} checked={checkedValues.includes(option)} onChange={(e) => handleCheckboxChange(e, option)} />
                    <span className="checkmark"></span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="filters-btn">
              <div className="primary-anchor large-btn">
                <button onClick={()=>setCheckedValues([])} className="w-100 outline-btn" type="reset">
                  <span>RESET</span>
                </button>
              </div>
              <div className="primary-anchor large-btn">
                <button onClick={()=>handleApply()} className="w-100">
                  <span>APPLY</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
