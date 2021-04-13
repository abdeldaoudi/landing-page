import React, {useState} from "react";
import hero from "../img/hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>
                <img src={hero} alt="desc"/>
                <div>
                    <h1>YOUR TRAVEL AGENCY
                    <br/> IN MOROCCO</h1>
                    <p><span>Coddiwomple</span> is a Travel agency Morocco created by passionate professionals. With our expertise in tourism, our desire to reach our clients’ high expectations along with our dedication, we offer a wide range of services that will certainly cover your needs. We want to offer you innovative, efficient and personalized services.Our offer is a range of comprehensive services.
                        Our desire is to add the little extra you need.
                        Since its creation, coddiwomple Tangier has gained considerable experience in different aspects. </p>
                    <Link to="/contact">Get in touch</Link>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2>Why you should choice us?</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">

                            <h3>Goals.</h3>
                            <div>Our team’s manly goal is to focus on the satisfaction of the client’s needs and desires. We respect your wishes and we work restlessly to deliver the most perfectly tailored services possible.</div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Choices.</h3>
                          <div>We offer both programmed tours and tailored ones. Our wide variety of destinations will allow you to choose from the world’s top destination and Morocco’s best hidden gems.</div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Availability.</h3>
                            <div>When choosing our services, we offer you a 24/7 assistance. Our team will answer your questions, help you and guide you with the necessary information whenever you need them.</div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Join our next travel.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;