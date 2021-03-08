import "bootstrap/dist/css/bootstrap.css";
import "../fileCss/works.scss";
const Works = () => {
  return (
    <>
      <section id="works">
        <div className="me my-5">
          <h1 className="text-center">
            <a className="color" href="#about">
              Works
            </a>
          </h1>
        </div>
      </section>
      <div className="row back mt-5 pt-5 mb-5 px-5">
        <a href="images/works/1.jpg" className="work">
          <img src="../images/works/1.jpg" alt="" />
          <div className="info">
            <h3>Work Title</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>
        <a href="images/works/2.jpg" className="work">
          <img src="../images/works/2.jpg" alt="" />
          <div className="info">
            <h3>Work Title</h3>
            <div className="cat">Watch, Headset</div>
          </div>
        </a>
        <a href="images/works/3.jpg" className="work">
          <img src="../images/works/3.jpg" alt="" />
          <div className="info">
            <h3>Work Title</h3>
            <div className="cat">Krasovka, Headset</div>
          </div>
        </a>
        <a href="images/works/4.jpg" className="work">
          <img src="../images/works/4.jpg" alt="" />
          <div className="info">
            <h3>Work Title</h3>
            <div className="cat">Watch, Headset</div>
          </div>
        </a>
        <a href="images/works/5.jpg" className="work">
          <img src="../images/works/5.jpg" alt="" />
          <div className="info">
            <h3>Work Title</h3>
            <div className="cat">Camere, Headset</div>
          </div>
        </a>
        <a href="images/works/6.jpg" className="work">
          <img src="../images/works/6.jpg" alt="" />
          <div className="info">
            <h3>Work Title</h3>
            <div className="cat">Navushnik, Headset</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Works;
