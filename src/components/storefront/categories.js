// component - person that needs contractor - call contracting agency: bring in contractor's skills and use that to render different stuff

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, changeCategories } from '../../store/categories.js';

function Categories (props) {

  const dispatch = useDispatch();
  // 'categories' is the name of the variable in store/index.js, and the 2nd 'categories' is the name of the state variable in store/categories.js
  const categories = useSelector((state) => state.categories.categories);
  console.log('categories', categories);

  function showCategory(e) {
    e.preventDefault();
    console.log(e.target.value);
    let category = e.target.value;
    dispatch(changeCategories(category));
  }

  return (
    <>
      <h3>Categories</h3>
      <ul>

        {categories.map((item, idx) => <li key={idx}><button onClick={showCategory} value={item.name}>{item.name}</button></li>)}

      </ul>
    </>
  )
}

export default Categories;
