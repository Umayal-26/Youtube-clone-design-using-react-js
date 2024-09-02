import './App.css';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { ImEmbed } from "react-icons/im";
import { FaMusic } from "react-icons/fa6";
import { PiSmileyWinkBold } from "react-icons/pi";
import { IoMdLaptop } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import youtubelogo from './youtubelogo.png'; 

function App() {
  const cardData = [
    { title: "Exciting Highlights from Recent Game", description: "Watch the most thrilling moments from the latest game." },
    { title: "Game Recap: Top Moments", description: "Relive the top moments of the recent game with this comprehensive recap." },
    { title: "Key Plays and Highlights", description: "Check out the key plays and highlights from the recent game." },
    { title: "Best Moments from Recent Match", description: "Enjoy the best moments from the recent match in this video." },
    { title: "Match Highlights Compilation", description: "A compilation of the best highlights from the recent game." },
    { title: "Game Highlights and Analysis", description: "Watch the highlights and get an analysis of the recent game." }
  ];

  return (
    <div className="App">
      <header className="header">
        <img src={youtubelogo} alt="YouTube Logo" className="logo" />
        <input type="text" placeholder="Search Here..." className="search-bar" />
      </header>
      <div className="sidebar">
        <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <FiAlignJustify className='icon'/>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
              <IoMdHome className='homeicon' />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Embed" data-bs-original-title="Embed">
              <ImEmbed className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
              <SiYoutubeshorts className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Music" data-bs-original-title="Music">
              <FaMusic className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Smiley" data-bs-original-title="Smiley">
              <PiSmileyWinkBold className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Laptop" data-bs-original-title="Laptop">
              <IoMdLaptop className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Sports" data-bs-original-title="Sports">
              <MdSportsCricket className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="History" data-bs-original-title="History">
              <FaHistory className='icon'/>
            </a>
          </li>
        </ul>
      </div>
      <main className="container mt-3">
        <div className="row">
          {cardData.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <iframe
                  width="80%"
                  height="180" 
                  src="https://www.youtube.com/embed/7PIji8OubXU?si=ligX711y6L3fS3G4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated {index + 1} year ago</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
