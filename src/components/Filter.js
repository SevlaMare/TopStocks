import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = ['GOOG', 'FB', 'AAPL'];

const CategoryFilter = ({ filterStock }) => (
  <form>
    <select
      type="text"
      id="category"
      name="category"
      className="filter"
      onChange={filterStock}
      defaultValue={''}
    >
    <option value='' disabled> --- Select --- </option>
    { CATEGORIES.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
    </select>
  </form>
)

// CategoryFilter.propTypes = {
//   filterStock: PropTypes.func.isRequired,
// };

export default CategoryFilter;
