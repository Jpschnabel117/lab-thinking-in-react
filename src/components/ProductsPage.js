import { useState } from 'react';
import jsonData from '../data.json';
import ProductsRow from './ProductRow';
import SearchBar from './SearchBar';

function ProductsPage(props) {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isChecked, setIsChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchProducts = (term) => {
    const filteredList = products.filter((element) => {
      return element.name.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredProducts(filteredList);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={searchProducts} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          console.log(!isChecked)
          let stockedProducts;
          if(!isChecked){
            stockedProducts = filteredProducts.filter((element) => {
              return element.inStock;
            });
          } else {
            stockedProducts = products.filter((element) => {
              return element.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
          }
          setFilteredProducts(stockedProducts);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((element) => {
            return <ProductsRow product={element} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;
