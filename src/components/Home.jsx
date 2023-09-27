
import shape from '../../images/shape.png'
import boy from '../../images/boy.png'
import '../../css/responsive.css'
const Home = () => {
    return (
      <>
        <div className="container">
          <div className="text">
            <h1>
              {`I'M`} Rakib <span>Siddiki</span>
            </h1>
            <p>
              Energetic MERN stack developer with a passion for learning new
              technologies. Seeking a role where I can grow my skills and make a
              difference in the world.
            </p>
            <a
              href="https://docs.google.com/document/d/1hw_Y7m7ZHBxjM3WZTTl14vTCLBdyPopt/edit?usp=share_link&ouid=107622900685458882405&rtpof=true&sd=true"
              
            >
              Download CV
            </a>
          </div>
          <div className="images">
            <img src={shape} className="shape" />
            <img src={boy} className="boy" />
          </div>
          <div className="social">
            <a href="https://www.facebook.com/orakib901">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Frakib_e.mertinez%3Ffbclid%3DIwAR1gYGvaOvkSF2BXADVooSW0Tzxo2zdqw0azYAvCk9FwZQfAoQYRZH5gvDU&h=AT33VwDRDAQC8YzXtqvNfHK5nX1Xpm6Md-wqCf4y_xoelSYOaUEpe_LvzrDba3Ad4V0qAJnLlKdYE3xx-Hs-SIK1s1pvBR4lFQDRQxrmbd2HZhRP9oNFUOJaTI0PnM_8CY3O"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rakib-siddiki-543a28257/"
              target='blank'
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    );
};

export default Home;