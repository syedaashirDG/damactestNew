// Filters.js
import React,{useState} from 'react';
import SelectFilter from './SelectFilter';
import SubmitButton from './SubmitButton';
import Data from '../sample_data/sample_data.json'

const Filters = ({onStateChange}) => {
  const [activeField, setActiveField] = useState(null);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleShowFilter = (index) => {
    setActiveField((prevActiveField) => (prevActiveField === index ? null : index));
  };

console.log(activeField);
  // Your logic for the Filters section goes here

  const filters = Data.filters

  const handleChildStateChange = (newState) => {
    setCheckedValues(newState);
  };

  // console.log('checked======',checkedValues);

  const handleSubmit=(e)=>{
    e.preventDefault();
    onStateChange(checkedValues);

  }

  return (
    <section className="section filters">
      <div className="container">
        <div className="filter-wrap">
          {filters.map((filter, index) => {
            return (
              <div key={index}  >
                <SelectFilter onStateChange={handleChildStateChange} index={filter.id} handleShowFilter={handleShowFilter} title={filter.title} activeField={activeField} options={filter.options} />
              </div>
            )
          })}

<div className="primary-anchor">
      <button type='submit' onClick={(e)=>handleSubmit(e)} className="w-100">
        <span>SUBMIT</span>
      </button>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
