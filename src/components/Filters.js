// Filters.js
import React,{useState} from 'react';
import SelectFilter from './SelectFilter';
import SubmitButton from './SubmitButton';
import Data from '../sample_data/sample_data.json'

const Filters = () => {
  const [activeField, setActiveField] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = (index) => {
    setActiveField((prevActiveField) => (prevActiveField === index+1 ? null : index+1));
  };

console.log(activeField);
  // Your logic for the Filters section goes here

  const filters = Data.filters

  return (
    <section className="section filters">
      <div className="container">
        <div className="filter-wrap">
          {filters.map((filter, index) => {
            return (
              <div key={index} onClick={(()=>handleShowFilter(index))} >
                <SelectFilter index={filter.id} title={filter.title} activeField={activeField} showFilter={showFilter} options={filter.options} />
              </div>
            )
          })}

          <SubmitButton />
        </div>
      </div>
    </section>
  );
};

export default Filters;
