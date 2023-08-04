// Filters.js
import React from 'react';
import SelectFilter from './SelectFilter';
import SubmitButton from './SubmitButton';
import Data from '../sample_data/sample_data.json'

const Filters = () => {

  // Your logic for the Filters section goes here

  const filters = Data.filters

  return (
    <section className="section filters">
      <div className="container">
        <div className="filter-wrap">
          {filters.map((filter, index) => {
            return (
              <div key={index}>
                <SelectFilter index={filter.id} title={filter.title} options={filter.options} />
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
