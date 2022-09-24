import "./assets/styles/main.scss";
import logo from "./assets/images/logo.png";
import arrow from "./assets/images/arrow-white.png";
import bg from "./assets/images/banner-bg.png";
import downArrow from "./assets/images/down-arrow.png";
import rightArrow from "./assets/images/right-arrow.png";
import actor1 from "./assets/images/actor1.png";
import actor2 from "./assets/images/actor2.png";
import actor3 from "./assets/images/actor3.png";
import share from "./assets/images/share.png";
import upArrow from "./assets/images/up-arrow.png";
import fb from "./assets/images/fb.png";
import linkedin from "./assets/images/linkedIn.png";
import insta from "./assets/images/insta.png";
import youtube from "./assets/images/youtube.png";
import twitter from "./assets/images/twitter.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated, SpringValue } from "react-spring";
import actorImg from "./assets/images/actor.png";

function App() {
  const pRef = useRef(null);

  const [y] = useState(new SpringValue(0));
  const { headerTrans } = useSpring({
    from: {
      headerTrans: 0,
    },
    config: {
      duration: 300,
    },
  });

  const onScroll = useCallback(() => {
    const currentPage = pRef.current.current / pRef.current.space;
    y.start(currentPage);
    console.log(currentPage);
    if (currentPage >= 0.6) {
      headerTrans.start({
        to: {
          headerTrans: 1,
        },
      });
    } else {
      headerTrans.start({
        to: {
          headerTrans: 0,
        },
      });
    }
  }, [headerTrans, y]);

  useEffect(() => {
    if (!pRef.current || !pRef.current.container.current) return;
    pRef.current.container.current.addEventListener("scroll", onScroll);
  }, [onScroll]);

  const whiteToBlackOnNavStyles = {
    color: headerTrans.to([1, 0], ["white", "black"]),
  };

  return (
    <div className="App">
      <div className="main-container">
        <animated.header
          style={{
            background: headerTrans.to([0, 1], ["white", "black"]),
          }}
        >
          <div className="brand__logo">
            <div className="logo-image">
              <img src={logo} alt="logo" />
            </div>
            <animated.span style={whiteToBlackOnNavStyles}>
              Quam <br />
              Suspendisse
            </animated.span>
          </div>
          <ul className="nav__links">
            <animated.li style={whiteToBlackOnNavStyles} className="active">
              About Us
            </animated.li>
            <animated.li style={whiteToBlackOnNavStyles}>
              Our Progress
            </animated.li>
            <animated.li style={whiteToBlackOnNavStyles}>FAQ</animated.li>
          </ul>
          <div className="join__btn">
            <div>Join today</div>
            <div className="arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </animated.header>
        <Parallax pages={6} ref={pRef}>
          <ParallaxLayer></ParallaxLayer>
          <ParallaxLayer offset={0}>
            <section className="banner-section">
              <h1>Eleifend amet in amet.</h1>
              <p>
                Lorem ipsum dolor consectetur elit. Quam vel rhoncus facilisis
                ac lectus suspendisse
              </p>
              <div className="down-arrow">
                <img src={downArrow} alt="down-arrow" />
              </div>
              <div className="banner-image">
                <img src={bg} alt="bg" />
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            // offset={0.6}
            // speed={0.5}
            sticky={{
              start: 0.6,
              end: 1.6,
            }}
          >
            <animated.section
              className="actor-section"
              style={{
                width: y.to([0, 0.6], ["90%", "100%"], "clamp"),
                borderRadius: y.to([0.5, 0.6], ["10px", "0px"], "clamp"),
              }}
            >
              <animated.img
                src={actorImg}
                style={{
                  width: y.to([0, 0.6], ["60%", "100%"], "clamp"),
                  scale: y.to([0, 0.6], [2.5, 1], "clamp"),
                }}
                alt="actor"
                className="actor-image"
              />
              <animated.h1
                style={{
                  opacity: y.to([0.5, 0.6], [0, 1], "clamp"),
                }}
              >
                Quam in auctor odio viverra
              </animated.h1>
            </animated.section>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1.6, end: 1.6 }}
            style={{
              background: "white",
            }}
          >
            <section className="section-3">
              <div className="left-section">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  vel rhoncus, nisl tellus ultricies facilisis ac suspendisse.
                </p>
                <animated.div
                  className="right-arrow"
                  style={{
                    left: y.to([1.2, 1.6], ["-50%", "0%"], "clamp"),
                  }}
                >
                  <img src={rightArrow} alt="right-arrow" />
                </animated.div>
              </div>
              <div className="right-section">
                <h1>Tortor arcu, ornare risus.</h1>
                <div className="join__btn">
                  <div>Join today</div>
                  <div className="arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer offset={2} sticky={{ start: 2.6, end: 2.6 }}>
            <section className="section-4">
              <animated.h1
                style={{
                  position: "relative",
                  scale: y.to([1.6, 2.5], [7, 1], "clamp"),
                  left: y.to([1.6, 2.5], ["297", "0%"], "clamp"),
                  translateY: y.to([1.2, 1.6], ["-40%", "0%"], "clamp"),
                }}
              >
                6 million
              </animated.h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 3.3, end: 4.3 }}>
            <animated.section
              className="section-5"
              style={{
                width: y.to([2.5, 3.2], ["90%", "100%"], "clamp"),
                borderRadius: y.to([3.1, 3.2], ["10px", "0px"], "clamp"),
              }}
            >
              <animated.div
                className="actors-wrapper"
                style={{
                  scale: y.to([2.5, 3.2], [4.9, 1.7], "clamp"),
                  translateX: y.to(
                    [2.5, 3.2, 4],
                    ["-35%", "-25%", "10%"],
                    "clamp"
                  ),
                }}
              >
                <div className="actor-image">
                  <img src={actor2} alt="actor" />
                </div>
                <div className="actor-image">
                  <img src={actor1} alt="actor" />
                </div>
                <div className="actor-image">
                  <img src={actor2} alt="actor" />
                </div>
                <div className="actor-image">
                  <img src={actor1} alt="actor" />
                </div>
                <div className="actor-image">
                  <img src={actor3} alt="actor" />
                </div>
              </animated.div>
            </animated.section>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 5.2 }}
            style={{
              height: "600px",
            }}
          >
            <section className="section-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                vel rhoncus,tellus ultricies facilisis ac lectus suspendisse.
                <span>
                  Tortor arcu ornare ut nec risus, id libero auctor id.
                </span>
                Nulla est vestibulum elementum bibendum facilisis pellentesque
                integer.
              </p>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </section>
            <footer>
              <ul className="left-section">
                <li>© 2022 Lorem ipsum dolor</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <li>Terms of Use</li>
              </ul>
              <ul className="right-section">
                <li className="footer-icon">
                  <img src={fb} alt="fb" />
                </li>
                <li className="footer-icon">
                  <img src={linkedin} alt="linkedin" />
                </li>
                <li className="footer-icon">
                  <img src={insta} alt="insta" />
                </li>
                <li className="footer-icon">
                  <img src={youtube} alt="youtube" />
                </li>
                <li className="footer-icon">
                  <img src={twitter} alt="twitter" />
                </li>
              </ul>
            </footer>
          </ParallaxLayer>
        </Parallax>

        <animated.div
          className="links__wrapper"
          style={{
            opacity: y.to([0.5, 0.6], [0, 1], "clamp"),
          }}
        >
          <div className="link">
            <span>Share</span>
            <div className="icon">
              <img src={share} alt="share" />
            </div>
          </div>
          <div className="link">
            <span>Top</span>
            <div className="icon">
              <img src={upArrow} alt="arrow" />
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
