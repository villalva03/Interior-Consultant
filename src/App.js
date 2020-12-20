import './App.css';
import './components/navBar/navBar.css';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import Navbar from './components/navBar/navBar';

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <div className="info">
        <p className="modernInterior">Modern interior</p>
        <p className="fullService">A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
        <p className="readMore">Read more</p>
        <div>
          <i className="material-icons arrow">arrow_right_alt</i>
        </div>
      </div>

      <div className="maskGroup">
        <img className="photo1" src={photo1} alt="photo1" />
        <div className="rectangle78">
          <div className="rectangle80">
            <img className="photo2" src={photo2} alt="photo2" />
          </div>
          <p className="userName">Aliza Webber</p>
          <p className="interiorDesigner">Interior designer</p>
          <p className="userDetail">Designed in 2020 by Aliza Webber</p>
        </div>
      </div>
      <div className="footer">
        <footer className="footerMail">Villalva Francisco @ DevChallenges.io</footer>
      </div>
    </div>
  );
}

export default App;
