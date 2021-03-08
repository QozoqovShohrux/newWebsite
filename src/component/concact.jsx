import "bootstrap/dist/css/bootstrap.css";
import "../fileCss/contact.scss";
const Contact = () => {
 return ( 
 <>
  <section id="contact" className="mt-5 pt-5">
        <div className="me my-5">
          <h1 className="text-center">
            <a className="color" href="#contact">
              Contact
            </a>
          </h1>
        </div>
  </section>
  <main>
     <div className="row contant my-5 py-3">
            <div
              className="col-md-6 mx-auto p-4 rounded text-center contacts"
              style={{fontSize: "18px"}}
            >
              <div>
                <h5 className="text-center">Adress</h5>
                <p className="text-info text-center" >Uzbekistan, Tashkent, Yunusobod</p>
              </div>
              <div className="my-5">
                <h5>Phone</h5>
                <p style={{letterSpacing: "5px", cursor: "pointer"}}>
                  <a href="tel: +998939980989" className="text-info"
                    >+998995554053</a
                  >
                </p>
              </div>
              <div>
                <h5>Email</h5>
                <p><a href="#email" className="text-info">shohchakiller@gmail.com</a></p>
              </div>
            </div>
          </div>
  </main>
 </>
  );
}
 
export default Contact;