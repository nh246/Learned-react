function Cart({ addprice ,addedcourse}) {
  return (
    <div className="w-[30%] fixed top-10 p-4 h-full ">
      <h3>Total Courses: {addedcourse}</h3>
      <p>Total Price: ${addprice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
