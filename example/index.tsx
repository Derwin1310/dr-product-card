import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductBtns } from '../src/components'

const product = {
  id: "1",
  title: "Coffe Mug - Card"
  // img: ""
}

const App = () => {
  return (
    <>
      <ProductCard
        className="bg-dark"
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductBtns />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
