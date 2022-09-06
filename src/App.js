import Header from "./components/Header";

import Landing from "./components/Landing";
import About from "./components/About";
import SlideShow from "./components/SlideShow";
import MailList from "./components/MailList";
import Contact from "./components/Contact";

import "./style.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Landing />
      <About />
      <SlideShow />
      <MailList />
      <Contact />
    </div>
  );
}

export default App;
