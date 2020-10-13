import React from 'react';
import PropTypes from 'prop-types';

import STOCKS_LIST from '../constants';

const CATEGORIES = Object.keys(STOCKS_LIST);

const CategoryFilter = ({ filterCategory }) => (
  <form className="filter">
    <select
      type="text"
      id="category"
      name="category"
      className="filter"
      onChange={filterCategory}
      defaultValue=""
    >
      <option value="All">All</option>
      { CATEGORIES.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </form>
);

CategoryFilter.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
