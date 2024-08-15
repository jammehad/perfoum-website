import React from "react";
import mine from "../src/images/mine.png";
import { Link, NavLink } from "react-router-dom";
import Elegant from "../src/images/Elegant.png";
import great from "../src/images/great.png";
import kind from "../src/images/kind.png";
import love from "../src/images/love.png";
import sweet from "../src/images/sweet.png";
import yours from "../src/images/yours.png";
import smell from "../src/images/smell.png";
import chaming from "../src/images/chaming.jpeg";
import princess from "../src/images/princess.jpeg";
import prince from "../src/images/prince.jpeg";
import queen from "../src/images/queen.jpeg";
import king from "../src/images/king.jpeg";
import Facebook from "../src/images/icon/Facebook.svg";
import instagram from "../src/images/icon/instagram.svg";
import twitter from "../src/images/icon/twitter.svg";
const Header = () => {
  return (
    <>
      <header className="max-w-screen">
        <div className="max-w-screen h-96 bg-pink-400">
          <Link to="/"></Link>

          <div className="logo text-2xl font-bold text-white position relative left-28 top-8 ">
            perf
          </div>
          <nav>
            <ul className="flex items-center gap-x-7 position relative left-[25rem] text-white">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <Link to="/category">category</Link>
              </li>

              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>

          <div className="position relative top-16 left-96">
            <p className="position relative top-10 font-bold text-2xl right-28 text-white">
              Fall in love with our signature perfume <br /> and Discover the
              perfect fragrance wihh <br /> our wide selection of perfume.
            </p>
            <div>
              <ul className=" flex items-center gap-x-7 position relative top-20 font-bold text-1xl text-white">
                <li>
                  90+ <br /> perfume
                </li>
                <li>
                  15M+ <br /> customers
                </li>
              </ul>
              <div className="position relative -top-[228px] left-80">
                <img src={mine} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div />

        <div>
          <p className="position relative left-[38rem] font-bold text-lg text-white top-10 tracking-widest ">
            shop our wide selection of <br />{" "}
            <span className="poaition relative left-24">scents </span>
          </p>
          <div className="flex justify-center align-center gap-20 position relative -left-20">
            <div className="w-[20rem] h-80 drop-shadow-lg bg-white rounded-lg position relative left-32 top-20 hover:bg-pink-400">
              <img
                className="position relative top-20"
                src={Elegant}
                alt=""
                width={900}
              />
              <p className="position relative left-24 top-10">
                Rosewood Blliss <br />{" "}
                <span className="position relative left-7  font-bold text-lg">
                  $50.0
                </span>
              </p>
            </div>
            <div className="w-[20rem] h-80 drop-shadow-lg bg-white rounded-lg position relative left-32 top-20  hover:bg-pink-400">
              <img
                className="position relative left-10"
                src={great}
                alt=""
                width={200}
              />
              <p className="position relative left-32 -top-3">
                Citrus zest <br />{" "}
                <span className="position relative left-5  font-bold  text-lg">
                  $90.0
                </span>
              </p>
            </div>
            <div className="w-[20rem] h-80 drop-shadow-lg bg-white rounded-lg position relative left-32 top-20 hover:bg-pink-400">
              <img
                className="position relative bottom-6 left-14"
                src={kind}
                alt=""
                width={200}
              />
              <p className="position relative left-28 -top-11">
                Woodland Walk <br />{" "}
                <span className="position relative left-9  font-bold  text-lg">
                  $70.0
                </span>
              </p>
            </div>
          </div>

          <div className=" flex justify-center align-center position relative left-[50rem] bottom-80 w">
            <div className="w-[20rem] h-60 drop-shadow-lg bg-white rounded-lg position relative right-[62rem] top-[30rem] hover:bg-pink-400">
              <img
                className="position relative top-6 right-10"
                src={love}
                alt=""
              />
              <p className="position relative left-28 -top-7">
                Rosewood Blliss <br />{" "}
                <span className="position relative left-8  font-bold  text-lg">
                  $80.0
                </span>
              </p>
            </div>
            <div className="w-[20rem] h-60 drop-shadow-lg bg-white rounded-lg position relative right-[56rem]  top-[30rem]  hover:bg-pink-400">
              <img className="position relative top-4" src={sweet} alt="" />
              <p className="position relative left-28 -top-10">
                Citrus zest <br />{" "}
                <span className="position relative left-5  font-bold  text-lg ">
                  $70.0
                </span>
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </header>

      <footer className="  ">
        <div className=" max-screen h-[29rem]  position relative top-60 rounded-3xl bg-white drop-shadow-lg ">
          <h2 className="POSITION relative left-[36rem] top-6 font-bold text-2xl ">
            customer reviews{" "}
          </h2>

          <div className=" flex justify-center align-center position relative top-10 right-28">
            <div className="w-[25rem] rounded-3xl py-2 m-4 h-36 bg-pink-400 drop-shadow-2xl position relative left-28 hover:bg-pink-500">
              <p className="position relative top-10 left-8 text-white">
                i absoultely love Rosewood Bliss! the scent is <br /> so
                beautiful and lasts all day. i get so many <br /> compliment
                when i wear it. highly recommend!
              </p>
            </div>

            <div className="w-[25rem] rounded-3xl py-2 m-4 h-36 bg-pink-400 drop-shadow-2xl position relative left-28">
              <p className="position relative top-10 left-8 text-white">
                perfume follows you; it chase you and lingers <br /> behind you.
                it's a prefernce mark <br /> perfumemakes silence talk
              </p>
            </div>

            <div className="w-[25rem] rounded-3xl py-2 m-4 h-36 bg-pink-400 drop-shadow-2xl position relative left-28">
              <p className="position relative top-10 left-8 text-white">
                i love love woodland work cause <br />
                the perfume smell like rose and which makes <br /> it my
                favorite perfume ever i just can't go without <br /> it
              </p>
            </div>
          </div>
          <div className=" flex position relative top-8 justify-center align-center right-52  ">
            <div className="w-[25rem] rounded-3xl py-2 m-4 h-36 bg-pink-400 drop-shadow-2xl position relative left-right-60">
              <p className="position relative top-10 left-8 text-white">
                i absoultely love Rosewood Bliss! the scent is <br /> so
                beautiful and lasts all day. i get so many <br /> compliment
                when i wear it. highly recommend!
              </p>
            </div>

            <div className="w-[25rem] rounded-3xl py-2 m-4 h-36 bg-pink-400 drop-shadow-2xl position relative right-1">
              <p className="position relative top-10 left-8 text-white">
                when ever i wear Rosewood i got thuns of <br /> comments so
                which makes me feel spcial <br /> so i recommen Rosewood over
                any perfume <br /> out there
              </p>
            </div>
          </div>
        </div>
      </footer>

      <main className="max-w-screen position relative top-60 left-20">
        <div>
          <h1 className="position relative left-[31rem] top-20 font-bold text-3xl">
            our distinctive qualities
          </h1>

          <div
            className="relative bg-gradient-to-b from-pink-400 rounded-full w-96 h-80 position 
          left-[25rem] top-44"
          >
            <img
              className="rounded-s-sm position relative -right-5 top-16 w-[900rem] "
              src={smell}
              alt=""
              width={5000}
            />
          </div>
          <div className="position relative left-[51rem] bottom-32  ">
            <div className="position relative bottom-5 ">
              <h1 className="position relative bottom-2 font-bold ">
                Natural ingredients
              </h1>

              <p>
                we use a blend of natural essential oils <br /> and plant
                extract to creat our <br /> fragrances, ensuring a pure and{" "}
                <br /> authentic scent.
              </p>
            </div>

            <div className="position relative top-20">
              <h1 className="position relative bottom-2 font-bold">
                unique scents
              </h1>

              <p>
                from floral and woody to citrus and <br /> spicy, we offer a
                wide range of scents <br />
                to suit every prefernce. our perfumes <br /> are crafted by
                skilled perfumers.
              </p>
            </div>
          </div>

          <div className="position relative bottom-[23rem] left-20  ">
            <div className="position relative bottom-5 ">
              <h1 className="position relative bottom-2 font-bold left-40 ">
                Long-lasting wear
              </h1>

              <p>
                <span className="position relative left-20">
                  {" "}
                  our perfume are design to last <br />{" "}
                </span>{" "}
                <span className="position relative left-11">
                  {" "}
                  throughout the day, so you can feel <br />{" "}
                </span>{" "}
                <span className="position relative left-14">
                  {" "}
                  confident that scent will stay with <br />{" "}
                </span>{" "}
                <span className="position relative left-24">
                  {" "}
                  you from morning to night.{" "}
                </span>
              </p>
            </div>

            <div className="position relative top-20">
              <h1 className="position relative bottom-2 font-bold left-28">
                sustainable packaging
              </h1>

              <p>
                <span className="position relative left-4">
                  {" "}
                  we are committed to sustainable and <br />{" "}
                </span>{" "}
                <span className="position relative left-2">
                  use enviromentally-friendly packaging <br />{" "}
                </span>
                <span className="position relative left-1">
                  for our perfumes. our bottles are made <br />
                </span>
                <span className="position relative left-28">
                  from recycled materials.
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className=" max-w-screen h-[40rem]  rounded-3xl bg-white drop-shadow-2xl ">
        <div className=" h-20 w-96 position relative top-36 left-[25rem]">
          <div className="rounded-lg position relative left-10">
            <img className="rounded-2xl h-96" src={chaming} alt="" />
          </div>
          <div className="position relative left-[28rem] bottom-[25rem] ">
            <div className="position relative top-4">
              <img className="w-80 h-40 rounded-3xl" src={princess} alt="" />
            </div>
            <div className="position relative top-20">
              <img className="w-80 h-40  rounded-3xl" src={prince} alt="" />
            </div>
          </div>

          <div className="position relative right-[19rem] bottom-[45rem] ">
            <div className=" position relative top-4">
              <img className="w-80 h-40 rounded-3xl" src={queen} alt="" />
            </div>
            <div className="position relative top-20">
              <img className="w-80 h-40  rounded-3xl" src={king} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="position relative top-10 bg-pink-400  h-96 max-w-screen ">
        <div className="position relative top-32 left-10">
          <h1 className="position relative bottom-2 text-white font-bold text-2xl ">
            perf
          </h1>
          <p className="text-gray-100">
            we use a blend of natural essential <br />
            oils and plant extracted to creat our <br /> fragrance, ensuring a
            pure and <br /> authentic scent.{" "}
          </p>
          <div></div>
          <div className="flex gap-3 position relative top-14">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={Facebook} alt="" />
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-x-7 position relative left-[26rem] text-white bottom-16 ">
          <div>
            <h1 className="position relative bottom-4">OUR STROES</h1>
            <ul className="leading-loose">
              <li>New York</li>
              <li>London</li>
              <li>cockfosters Bp</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
            </ul>
          </div>
          <div>
            <h1 className="position relative bottom-4 left-28">USEFUL LINKS</h1>
            <ul className="position relative  bottom-1 leading-loose  left-28">
              <li>privacy policy</li>
              <li>Return</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
              <li>Latest News</li>
            </ul>
          </div>
        </div>
        <div className="position relative left-[60rem] bottom-60 py-2 m-2 w-60 ">
          <h1 className="position relative left-20 top-2 text-white">
            Join USE
          </h1>
          <div className="w-20 ">
            <label htmlFor="email"></label>
            <input
              className="w-52 py-2 m-3 rounded-full "
              type="Enter Email"
              placeholder="enter email "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
