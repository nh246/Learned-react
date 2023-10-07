import ContactForm from "./component/ContactForm";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Footer from "./component/footer";

const App = () => {
  let marks = 20;

  return (
    <div>
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
      {/* This is inline if else  */}
      <div className="inline-if-else">
        {marks > 80 ? <h1>Briliant result</h1> : <h1>Avarage result</h1>}
      </div>

      {/* IMiediately - Invoked function */}

      <div className="immedately-invoked-function">{(() => {
       
      if(marks>80 && marks<100){
        return <h1>A+</h1>
      }
      else if(marks>70 && marks<80){
        return <h1>A</h1>
      }
      else if(marks>60 && marks<70){
        return <h1>A-</h1>
      }
      else{
        return <h1>F</h1>
      }

      })()}</div>
    </div>
  );
};

export default App;
