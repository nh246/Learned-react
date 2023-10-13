import ContactForm from "./component/ContactForm";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Footer from "./component/footer";
import Cndi from "./component/Cndi";
import Childpass from "./component/Childpass";
import Objpass from "./component/Objpass";
import Functionpass from "./component/Functionpass";
import Hooks from "./component/Hooks";
import MutableValue from './component/MutableValue';
import Caching from './component/Caching';

const App = () => {
  let marks = 20;
  const city = ["dhaka", "london", "kolkata", "delhi"];
  const Itemobj = {
    name: "Nazmul Hossain",
    age: 21,
    city: "Dhaka",
  };

  const BtnClick = () => {
    alert("Hallow there!");
  };

  const PostFromData = (event) => {
    event.preventDEfaolt();
  };

  return (
    <div>
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
      <MutableValue/>
      <Cndi />
      <Hooks/>
      <Caching/>

      <Childpass
        title="passing data from parent to child"
        des="This is just a discription"
      />

      {/* This is inline if else  */}
      <div className="inline-if-else">
        {marks > 80 ? <h1>Briliant result</h1> : <h1>Avarage result</h1>}
      </div>

      {/* IMiediately - Invoked function */}

      <div className="immedately-invoked-function">
        {(() => {
          if (marks > 80 && marks < 100) {
            return <h1>A+</h1>;
          } else if (marks > 70 && marks < 80) {
            return <h1>A</h1>;
          } else if (marks > 60 && marks < 70) {
            return <h1>A-</h1>;
          } else {
            return <h1>F</h1>;
          }
        })()}
      </div>

      {/* Loops in jsx */}
      <div className="Loop-in-jsx">
        <ol>
          {city.map((item, i) => {
            return <li key={i.toString()}>{item}</li>;
          })}
        </ol>
      </div>
      {/* From submit */}
      <div className="Fromsubmiut">
        <h1>From submuit</h1>
        <form onSubmit={PostFromData}>
          <input placeholder="name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
