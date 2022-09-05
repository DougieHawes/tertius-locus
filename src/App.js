import { Element } from "react-scroll";

import Header from "./components/Header";

import Landing from "./components/Landing";
import About from "./components/About";
import SlideShow from "./components/SlideShow";
import MailList from "./components/MailList";

import "./style.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Landing />
      <About />
      <SlideShow />
      <MailList />
      <Element name="test5" className="element">
        test 5
      </Element>
    </div>
  );
}

export default App;
