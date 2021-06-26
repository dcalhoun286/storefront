import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../store/products.js';

function Products (props) {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  console.log('products', products);

  const currentCategory = useSelector((state) => state.categories.activeCategory);

  const filteredProducts = products.filter(product => {
    return product.category === currentCategory;
  });

  console.log('products of active category', filteredProducts);

  return (
    <>
      <h3>{currentCategory}</h3>
      <ul>

        {filteredProducts.map((item, idx) => <li key={idx}><button>{item.name}</button></li>)}

      </ul>
    </>
  )
}

export default Products;