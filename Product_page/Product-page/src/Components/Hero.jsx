const Hero = () => {
  return (
    <main>
      <div className="hero_container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="btn_Container">
            <button className="btn_shop">Shop Now</button>
            <button className="btn_Category">Category</button>
        </div>
        <div className="shopping"> 
        <p>Also Available On</p>

        <div className="brand_images">
            <img src="Images/flipkart.png"/>
            <img src="Images/amazon.png"/>

        </div>
        </div>
      </div>
      <div id="hero_image">
        <img src="Images/shoe_image.png" alt="Shoo" />
      </div>
    </main>
  );
};

export default Hero;
