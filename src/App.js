import React from './App.css';
import ImageAgencyBlack from "./components/Agency black.png";
import ImageAgency from "./components/Agency.png";
import ImageCard_1 from "./components/Card 1.png";
import ImageCard_2_1 from "./components/Card 2.1.png";
import ImageCard_2_2 from "./components/Card 2.2.png";
import ImageCard_2 from "./components/Card 2.png";
import ImageCard_3 from "./components/Card 3.png";
import ImageMans from "./components/Mans.png";
import ImageMans_2 from "./components/Mans 2.png";
import ImageMonitor from "./components/monitor.png";
import ImagePentool from "./components/pen-tool.png";
import ImageSettings from "./components/settings.png";
import ImageTV from "./components/tv.png";
import ImageWoman from "./components/Woman.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div>
      <header>
        <img src={ImageAgency} alt="" />
        <ul className="ul1">
            <li className="Home">Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        <button>Contact us</button>
    </header>
    <div className="Dream">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle4"></div>
        <h1>Make your dream <br />business goal come true</h1>
        <p>when you need us for improve your business,<br />then come with us to help your business have reach it, you just sit and feel that goal</p>
        <button>Start Project</button>
        <img src={ImageMans} alt="" />
    </div>
    <div className="Teammate">
        <p className="Head_p">About us</p>
        <h1 className="Head">Our Teammate</h1>
        <div className="img_text">
            <div className="img">
                <div className="circles">
                    <div className="circles_team1">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                        <div className="circle5"></div>
                        <div className="circle6"></div>
                    </div>
                    <div className="circles_team2">
                        <div className="circle7"></div>
                        <div className="circle8"></div>
                        <div className="circle9"></div>
                    </div>
                    <div className="circles_team3">
                        <div className="circle10"></div>
                        <div className="circle11"></div>
                    </div>
                    <div className="circles_team4">
                        <div className="circle12"></div>
                        <div className="circle13"></div>
                    </div>
                </div>
                <img src={ImageMans_2} alt="" />
                <div className="circles2">
                    <div className="circles2_team4">
                        <div className="circle12"></div>
                        <div className="circle13"></div>
                    </div>
                    <div className="circles2_team3">
                        <div className="circle10"></div>
                        <div className="circle11"></div>
                    </div>
                    <div className="circles2_team2">
                        <div className="circle7"></div>
                        <div className="circle8"></div>
                        <div className="circle9"></div>
                    </div>
                    <div className="circles2_team1">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                        <div className="circle5"></div>
                        <div clasNames="circle6"></div>
                    </div>
                </div>
            </div>
            <div className="text">
                <p className="p_2">We move with make a Creative Strategy for help your business <br />goal, we help to improve your income by a services we have. <br />make your content look interesting and make people look for <br />your business</p>
                <p className="p_3">We move with make a Creative Strategy for help your business <br />goal, we help to improve your income by a services we have. <br />make your content look interesting and make people look for <br />your business</p>
                <button className="btn1">About Us</button>
                <button className="btn2"> Our Story</button>
            </div>
        </div>
    </div>
    <div className="Movemed">
        <div className="text">
            <p className="p_4">Our services</p>
            <h1>Perfect and Fast <br />Movement</h1>
            <p className="p_1">We move with make a Creative Strategy for help your business <br />goal, we help to improve your income by a services we have. <br />make your content look interesting and make people look for <br />your business</p>
            <p className="read">Read more →</p>
        </div>
        <div className="Card_4">
            <div className="Card_4__1">
                <div className="card1">
                    <div className="card_4_1">
                        <img src={ImageMonitor} alt="" />
                    </div>
                    <h3>Social Media <br />Management</h3>
                </div>
                <div className="card2">
                    <div className="card_4_2">
                        <img src={ImageSettings} alt="" />
                    </div>
                    <h2>Search Engine <br />Opimization</h2>
                </div>
            </div>
            <div className="Card_4__2">
                <div className="card3">
                    <div className="card_4_3">
                        <img src={ImagePentool} alt="" />
                    </div>
                    <h2>Design</h2>
                </div>
                <div className="card4">
                    <div className="card_4_4">
                        <img src={ImageTV} alt="" />
                    </div>
                    <h2>Ads</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="Portfolio">
        <p>Our portfolio</p>
        <h1>What do we do</h1>
        <p clasNames="p_5">all projects that we have already done , proven can help to use <br />more comfortable, then can used by client from our business</p>
        <div className="rasmlar">
            <img src={ImageCard_1} alt="" />
            <div className="card_img2">
                <img src={ImageCard_2} alt="" />
            </div>
            <img src={ImageCard_3} alt="" />
        </div>
        <button>See All Portfolio</button>
    </div>
    <div className="About">
        <p className="Home">Testimonial</p>
        <h1>People Talk about us</h1>
        <div className="cards">
            <div className="card">
                <div className="Woman">
                    <img src={ImageWoman} alt="" />
                    <div className="text_1">
                        <h4>Angel Rose</h4>
                        <h5>Creative Manager</h5>
                    </div>
                </div>
                <div className="text">
                    <p>There are many variations <br />passages of Lorem Ipsum majority <br />some by words which don't look . </p>
                </div>
            </div>
            <div class="card_2">
                <div class="card">
                    <div class="Woman">
                        <img src={ImageWoman} alt="" />
                        <div className="text_1">
                            <h4>Angel Rose</h4>
                            <h5>Creative Manager</h5>
                        </div>
                    </div>
                    <div className="text">
                        <p>There are many variations <br />passages of Lorem Ipsum majority <br />some by words which don't look . </p>
                    </div>
                </div>
                <div className="card">
                    <div className="Woman">
                        <img src={ImageWoman} alt="" />
                        <div className="text_1">
                            <h4>Angel Rose</h4>
                            <h5>Creative Manager</h5>
                        </div>
                    </div>
                    <div className="text">
                        <p>There are many variations <br />passages of Lorem Ipsum majority <br />some by words which don't look . </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Interesting">
        <div className="text">
            <h1>Interesting <br />Collaboration <br />With Us?</h1>
            <p>Help you to reach you business goal</p>
            <button>Get Started</button>
        </div>
        <div class="imgs">
            <img class="img1" src={ImageCard_2_1} alt="" />
            <img class="img2" src={ImageCard_2_2} alt="" />
        </div>
    </div>
    <footer>
        <img src={ImageAgencyBlack} alt="" />
        <div className="uls">
            <div className="uls1">
                <ul>
                    <h3>Terms & policies</h3>
                    <li>Terms of service</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul>
                    <h3>Company</h3>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <ul>
                <h3>Contact</h3>
                <li>(+62) 893912392190</li>
                <li>agecnycr@gmail.com</li>
            </ul>
            <ul>
                <h3>Location</h3>
                <li>PT Osiris Real Estate Internasional</li>
                <li>Jl. KH. Wahid Hasyim Kel No.10D</li>
                <li>Jakarta, Indonesia</li>
                <li>team@OsirisRealEstate.com</li>
            </ul>
        </div>
        <div className="icons">
            <div className="facebook">
                <FaFacebook className='icon' />
            </div>
            <div className="instagram">
                <FaInstagram className='icon' />
            </div>
            <div className="linkedin">
                <FaLinkedinIn className='icon' />
            </div>
            <div className="pochta">
                <FaEnvelope className='icon' />
            </div>
            <div className="twitter">
                <FaTwitter className='icon' />
            </div>
        </div>
        <div className="line">
            
        </div>
        <p>Copyright @ 2022 Agency Creative. All Right Reserved</p>
    </footer>
    </div>
  )
}

export default App