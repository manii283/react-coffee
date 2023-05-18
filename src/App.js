import CoffeeImage from "../src/img/coffee.svg";
import imgCoffeeBag from "../src/img/coffee-bag.svg";
import imgCook from "../src/img/cook.svg";
import imgHotDrink from "../src/img/hot-drinks (1).png";
import imgSnak from "../src/img/snack.png";
import img29 from "../src/img/12.jpeg";
import img13 from "../src/img/13.jpeg";
import img14 from "../src/img/14.jpeg";
import videoTrailer from "../src/videos/woman_drinking_coffee.mp4";
import Card from "./components/Card";
import FlipCard from "./components/FlipCard";
import imgFacebook from "../src/img/facebook-red.svg";
import imgInstagram from "../src/img/instagram-red.svg";
import Header from "./components/Header";
import OverMenu from "./components/OverMenu"


function App() {
  return (
    <>
      <Header />
      {/* section 1 */}

      <div id="section-1">
        <div id="title-container">
          <h1>Crafted Coffees</h1>
          <h2>"Coffee पे चर्चा"</h2>
          <img src={CoffeeImage} width="30" height="30" />
        </div>
      </div>

      {/* section 2 start here */}
      <div id="section-2">
        <div id="card-gallery">
          <Card
            title="MADE IN US"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro."
            image={imgCoffeeBag}
          />
          <Card
            title="MADE IN INDIA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro."
            image={imgCook}
          />
          <Card
            title="MADE IN JAPAN"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro."
            image={imgCoffeeBag}
          />
          <Card
            title="MADE IN UK"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, porro."
            image={imgCook}
          />
        </div>

        <div id="card-gallery-bottom-section">
          <div id="left-section">
            <div className="video-mask">
              <video width="100%" height="400"  autoplay="" muted="" loop="">
                <source src={videoTrailer} type="video/mp4" />
              </video>
            </div>
          </div>
          <div id="right-section">
            <div id="About">
              <h1>About</h1>
              <h2 style={{ float: "left" , color: "black" }}>Crafted Coffee's</h2>
              <br />
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Corrupti, dolores
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Corrupti, dolores
              </p><br/>
              <button style={{border:"2px solid brown" , padding: "10px 20px"}}>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div id="section-3">
        {/*<div className="bgt">*/}
        {/*  <div id="title-container">*/}
        {/*    <h1>Discover</h1>*/}
        {/*    <br />*/}
        {/*    <h2>O U R M E N U</h2>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <OverMenu name="Discover" title-container="O U R M E N U" />
      </div>

      {/* section 4 */}

      <div id="section-4">
        <div id="section-4-top">
          <div id="section-4-top-left">
            <hr />
          </div>
          <div id="section-4-top-middle">
            <div id="section-4-top-middle-inner-item" class="float-left">
              <button id="button-1" onclick="switchLeftButton()" class="circle">
                <img src={imgHotDrink} />
              </button>
            </div>
            <div id="section-4-top-middle-inner-item" class="float-left">
              <button
                id="button-2"
                onclick="switchRightButton()"
                class="circle"
              >
                <img src={imgSnak} />
              </button>
            </div>
          </div>
          <div id="section-4-top-left">
            <hr />
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div id="section-5">
        <div id="snak">
          {/* <h1>snak</h1> */}
          <div class="section-margine-left">
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
          </div>

          <div class="section-margine-left">
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
            <FlipCard
              img={img29}
              para=" Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti, dolores."
              menu="PIZZA"
            />
          </div>
        </div>
      </div>

      {/* section 6 */}
      <section id="section-6">
        <div class="section-6-left">
          <div class="section-6-inner">
            <h1>YOUR RESPONSE</h1>
            <form class="formClass">
              <lable>Name</lable>
              <br />
              <br />
              <input type="text" placeholder="Alex Hunter" />
              <br />
              <br />
              <lable>City</lable>
              <br />
              <br />
              <input type="text" placeholder="city Name" />
              <br />
              <br />
              <lable>E-Mail</lable>
              <br />
              <br />
              <input type="text" id="email" placeholder="alexhunter@xyz.com" />
              <br />
              <br />
              <lable>Rate Us:</lable>
              <br />
              <br />
              <label>Your Reviews</label>
              <br />
              <br />
              <textarea
                id="thought"
                name="thought"
                placeholder="Your Thoughts"
                rows="4"
                cols="40"
              ></textarea>
              <br />
              <br />
              <button class="btn">Submit</button>
              <br />
              <br />
            </form>
          </div>
        </div>
        <div class="section-6-right">
          <div class="section-6-right-inner">
            <h1>TESTIMONIALS</h1>
            <div class="testimonial-top">
              <p>
                “ Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. ”
              </p>
              <div class="test">
                <img src={img13} />
                <h3 class="testimonial-border">Robort Webb</h3>
              </div>
            </div>

            <div class="testimonial-bottom">
              <p>
                “ Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. ”
              </p>
              <div class="test">
                <img src={img14} />
                <h3 class="testimonial-border-left">Robort Webb</h3>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 7 */}

      <section id="section-8">
        <OverMenu name="Discover" title-container="O U R M E N U" />
      </section>

      {/* section 8 */}

      <section id="section-9">
        <div class="section-9-left">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4197493657753!2d72.8202522!3d22.6007955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c699400001%3A0x7571b60b6c28001b!2sDevang%20Patel%20Institute%20of%20Advance%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1683616210281!5m2!1sen!2sin"
              width="700"
              height="400"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div class="section-9-right">
          <div class="container">
            <div class="child bg-one" style={{ height: "600px" }}>
              <h3 style={{ margin: "0" }}>O P E N H O U R S</h3>
              <p>Monday: Closed</p>
              <p>Thesday to Friday</p>
              <p>7:00 AM 9:00 AM</p>
              <p>Saturday to Sunday</p>
              <p>7:00 AM 9:00 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 9 */}

      <section class="section-10">
        <div class="section-10-icon" style={{ padding: "20px" }}>
          <img src={imgFacebook} style={{ width: "30px", height: "30px" }} />
          <img src={imgInstagram} style={{ width: "30px", height: "30px" }} />
          <img src={imgFacebook} style={{ width: "30px", height: "30px" }} />
          <img src={imgInstagram} style={{ width: "30px", height: "30px" }} />
          <img src={imgFacebook} style={{ width: "30px", height: "30px" }} />
        </div>
        <div class="section-10-p">
          <p style={{ textAlign: "center" }}>
            Copyright © 2020 | Crafted Coffee's
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
