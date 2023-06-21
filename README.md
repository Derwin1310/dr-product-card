# DR-product-card

Paquete de pruebas para despliegue de npm

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductBtns } from "dr-product-card"

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
```