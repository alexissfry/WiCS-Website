import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Socials } from "./components/Socials";
import { Landing } from "./components/Landing";
import { Mission } from "./components/Mission";
import { Calendar } from "./components/Calendar";
import { Footer } from "./components/Footer";
import Resources from "./components/Resources";

function App() {
  const styleAll = {
    "background-color": "#EBE5F3",
  };

  const styleSocials = {
    "background-color": "#EBE5F3",
    "height": "150vh",
  };

  return (
    <div className="App">
      <div id="navbar">
        <Navbar />
      </div>
      <main>
        <section id="Landing" style={styleAll}>
          <Landing />
        </section>
        <section id="Mission" style={styleAll}>
          <Mission />
        </section>
        <section id="Calendar" style={styleAll}>
          <Calendar />
        </section>
        <section id="Socials" style={styleSocials}>
          <Socials />
        </section>
        <section id="Resources" style={styleAll}>
          <Resources />
        </section>
        <section id="Contacts" style={styleAll}>
          <Contact />
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
