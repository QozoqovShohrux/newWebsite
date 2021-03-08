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
        <a href="images/works/1.jpg" class="work">
          <img src="../images/works/1.jpg" alt="" />
          <div class="info">
            <h3>Work Title</h3>
            <div class="cat">Music, Headset</div>
          </div>
        </a>
        <a href="images/works/2.jpg" class="work">
          <img src="../images/works/2.jpg" alt="" />
          <div class="info">
            <h3>Work Title</h3>
            <div class="cat">Watch, Headset</div>
          </div>
        </a>
        <a href="images/works/3.jpg" class="work">
          <img src="../images/works/3.jpg" alt="" />
          <div class="info">
            <h3>Work Title</h3>
            <div class="cat">Krasovka, Headset</div>
          </div>
        </a>
        <a href="images/works/4.jpg" class="work">
          <img src="../images/works/4.jpg" alt="" />
          <div class="info">
            <h3>Work Title</h3>
            <div class="cat">Watch, Headset</div>
          </div>
        </a>
        <a href="images/works/5.jpg" class="work">
          <img src="../images/works/5.jpg" alt="" />
          <div class="info">
            <h3>Work Title</h3>
            <div class="cat">Camere, Headset</div>
          </div>
        </a>
        <a href="images/works/6.jpg" class="work">
          <img src="../images/works/6.jpg" alt="" />
          <div class="info">
            <h3>Work Title</h3>
            <div class="cat">Navushnik, Headset</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Works;
