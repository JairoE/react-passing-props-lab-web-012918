import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

  return (
    <div className="fruit-basket">
      <Filter handleFilterChange={props.updateFilterCallback} filters={props.filters} />
      <FilteredFruitList
        filter={props.currentFilter} items={props.fruit} />
    </div>
  );

}

FruitBasket.defaultProps={
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
