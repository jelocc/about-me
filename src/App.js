import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navBar">
        <img src="/img/hanni baby.png" alt="Hanni" id="hanniImg" />
          <div className="navBarTabs">
            <a href="#" className="Home">Home</a>
            <a href="#" className="Projects">Projects</a>
            <a href="#" className="About">About</a>
            <a href="#" className="Contact">Contact</a>
          </div>
        <div className="navBarLinks">
          <img src="/img/hanni baby.png" alt="gitHub" id="gitHubImg"/>
          <img src="/img/hanni baby.png" alt="linkedIn" id="linkedInImg"/>
        </div>
        </div>
        <div className="heading"> 
          <p className="headingGreet"> Hey there!
          {String.fromCodePoint(0x1F44B, 0x1F3FC)}
          </p>
          <h1>I am KING <br /> an upcoming Software Engineer.</h1>
          <br /><h4 className="introDesc"> I am a Computer Science Graduate. <br />Looking to learn a lot about Software Development. </h4>
        </div>
      </header>
    </div>
    
  );
}

export default App;
