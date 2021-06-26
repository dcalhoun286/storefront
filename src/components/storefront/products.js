import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../store/products.js';

function Products (props) {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  console.log('products', products);

  return (
    <>
      <h3>Products</h3>
      <ul>

        {products.map((item, idx) => <li key={idx}>{item.name}</li>)}

      </ul>
    </>
  )
}

export default Products;