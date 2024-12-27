import Product from "../Product/Product"
function Shop() {

  const products = [
    {name:'Lenovo', id:1},
    {name:'Dell', id:2},
    {name:'HP', id:3},
    {name:'Asus', id:4},
    {name:'Acer', id:5}

  ]
  return (
    <div>
      <h2>This is shop</h2>
      {
        products.map(pd => <Product key={pd.id} product={pd}></Product>)
      }
    </div>
  )
}

export default Shop