import React from 'react';

const SelectFilter = ({ title, options, activeField, index }) => {
  return (
    <div className="select-filter">
      <div className="selection-input">
        <span className="select-placeholder">{title}</span>
        <ul className="selected-options d-none">
          <li>Studio</li>
          <li>1BR</li>
          <li>2BR</li>
        </ul>
      </div>
      {activeField === index && (
        <div className="filter-popup">
          <div className="filter-popup-wrap">
            <p>{title}</p>
            <ul className="filters-options">
              {options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label className="input-group">
                    {option}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </li>
              ))}
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
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
