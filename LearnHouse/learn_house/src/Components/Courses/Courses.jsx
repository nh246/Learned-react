
function Courses(props) {
  const { courseName, price, img, basicDetails } = props.course;
  return (
    <div className="w-auto p-4 m-4 border-b-2 border-black">
      <div>
        <img src={img} className="w-auto h-32 object-cover" alt="Course" />
      </div>
      <div>
        <h1>
          Course Name:
          {courseName}
        </h1>
        <h3>Price: ${price}</h3>
        <p>
          Description:
          {basicDetails}
        </p>
        <button onClick={()=>props.handlePrice(price)} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2" >ADD COURSE</button>
      </div>
    </div>
  );
}

export default Courses;
