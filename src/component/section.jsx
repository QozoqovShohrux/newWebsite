import "../fileCss/section.scss";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>;
const Section = () => {
 return ( 
  <section id="home">
  <div className="container">
    <div className="content">
    <h1>Hi I'm </h1>
    <div className="sm">
                    <a href="https://www.facebook.com/" className="fab fa-facebook-f" target="_blank"></a>
                    <a href="t.me/abdirahimovich" className="fab fa-telegram" target="_blank"></a>
                    <a href="https://www.instagram.com/shoxrux_77775/" className="fab fa-instagram" target="_blank"></a>
                    <a href="https://youtu.be/fX87iHCDyr4" className="fab fa-youtube" target="_blank"></a>
    </div>
    <div className="buttons">
                    <a href="#portfolio">Portfolio</a>
    </div>
    </div>
  </div>
 </section>
  );
}
 
export default Section;