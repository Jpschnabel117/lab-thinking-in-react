import { useState } from 'react';

function ProductsRow(props) {
  return (
    <tr>
      {props.product.inStock ? (
        <td>{props.product.name}</td>
      ) : (
        <td style={{ color: 'red' }}>{props.product.name}</td>
      )}

      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductsRow;
