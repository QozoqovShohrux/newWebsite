import "owl.carousel/dist/assets/owl.carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import "../fileCss/about.scss";
const About = () => {
  return (
    <main>
      <section id="about">
        <div className="me my-5">
          <h1 className="text-center">
            <a className="color" href="#about">
              About me
            </a>
          </h1>
        </div>
      </section>
      <div className="row mt-5">
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="../../images/1122.jpg"
            className="img-fluid rounded-circle"
            alt=""
          />
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h1>Kazakoff Shohrux</h1>
            </div>
            <div className="card-body">
              <p className="text text-info">
                I am Kazakoff Shohrux, I was born on April 5, 2002 year in the
                Jizzax region and is currently studying at Tashkent University
                of Information Technologies. I studied Frontend at the PDP IT
                Academy. My technical skills: HTML 5, CSS 3, SASS, BOOTSTRAP 4,
                JS, JQUERY, REACT JS. My goal: I am looking for a sincere team.
                I can promise to be stronger by working on myself, and I won’t
                stop there. I want to have a place in your team in the future!
              </p>
            </div>
            <div className="card-footer">
              <div className="d-flex foter align-items-center justify-content-around">
                <div  size={{ fontSize: "24px" }}>
                  <i
                    className="far fa-envelope fa-2x"
                    style={{ verticalAlign: "-5px" }}
                  ></i>
                  Email : shohchakiller@gmail.com
                </div>
                <div  size={{ fontSize: "24px" }}>
                  <i
                    className="fas fa-phone fa-2x"
                    style={{ verticalAlign: "-5px" }}
                  ></i>
                  Phone : +998995554053
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <section id="skills" className="my-5 mt-5">
      <div className="me my-5">
          <h1 className="text-center">
            <a className="color" href="#skills">
            Technical skills
            </a>
          </h1>
        </div>
      </section>
      <div className="row my-5 owl-carousel owl-theme">
              <div className="col-sm-12 col-md-6 colmd6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top html5"></div>
                <div>
                  <h2 className="text-center" style={{color: "#e44d26"}}>HTML 5</h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top css3"></div>
                <div>
                  <h2 className="text-center" style={{color: "#264de4"}}>CSS 3</h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top sass"></div>
                <div>
                  <h2 className="text-center" style={{color: "#cf649a"}}>SASS 1</h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top bootstrap"></div>
                <div>
                  <h2 className="text-center" style={{color: "#563d7c"}}>BOOTSTRAP 4</h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top javascript"></div>
                <div>
                  <h2 className="text-center" style={{color: "#f7df1e"}}>JavaScript </h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top jquery"></div>
                <div>
                  <h2 className="text-center" style={{color: "#131b28"}}>JQUERY </h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top react"></div>
                <div>
                  <h2 className="text-center" style={{color: "#61dafb"}}>REACT JS</h2>
               </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" data-aos="zoom-in">
               <div className="img-top redux"></div>
                <div>
                  <h2 className="text-center" style={{color: "#764abc"}}>REDUX</h2>
               </div>
              </div>
      </div>
    </main>
  );
};

export default About;
