import "../Home.scss";
import SvgComponent from "../Components/LandingBg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IoMdOptions,
  IoMdDocument,
  IoMdRocket,
  IoIosStopwatch,
  IoIosStar,
  IoMdColorPalette,
  IoLogoDesignernews,
  IoMdBrush,
  IoIosEasel,
  IoIosContacts,
  IoIosShirt,
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <div className="homeContainer">
      <div className="homeBg">
        <SvgComponent />
      </div>
      <div className="packageContainer">
        <h1>Select your Package</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          freeMode={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="SwiperSlide">
            <div className="packageSlideContainer">
              <h3>Standard</h3>
              <div className="packageSlides">
                <div className="packageItems">
                  <IoMdColorPalette size={50} />
                  <h3>Customize Color</h3>
                </div>
                <div className="packageItems">
                  <IoMdBrush size={50} />
                  <h3>Add Logo(Only 1)</h3>
                </div>
                <div className="packageItems">
                  <IoIosContacts size={50} />
                  <h3>Add Name</h3>
                </div>
                <div className="packageItems">
                  <IoIosShirt size={50} />
                  <h3>Add Number</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="packageSlideContainer">
              <h3>Advanced</h3>
              <div className="packageSlides">
                <div className="packageItems">
                  <IoMdColorPalette size={50} />
                  <h3>Customize Color</h3>
                </div>
                <div className="packageItems">
                  <IoLogoDesignernews size={50} color="#fff" />
                  <h3>Customize Design</h3>
                </div>
                <div className="packageItems">
                  <IoMdBrush size={50} />
                  <h3>Add Logo(Only 1)</h3>
                </div>
                <div className="packageItems">
                  <IoIosEasel size={50} />
                  <h3>Add Sponsor</h3>
                </div>
                <div className="packageItems">
                  <IoIosContacts size={50} />
                  <h3>Add Name</h3>
                </div>
                <div className="packageItems">
                  <IoIosShirt size={50} />
                  <h3>Add Number</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="packageSlideContainer">
              <h3>Limited</h3>
              <div className="packageSlides">
                <div className="packageItems">
                  <IoMdColorPalette size={50} />
                  <h3>Customize Color</h3>
                </div>
                <div className="packageItems">
                  <IoLogoDesignernews size={50} color="#fff" />
                  <h3>Customize Design</h3>
                </div>
                <div className="packageItems">
                  <IoMdBrush size={50} />
                  <h3>Add Logo(Only 1)</h3>
                </div>
                <div className="packageItems">
                  <IoIosEasel size={50} />
                  <h3>Add Sponsor</h3>
                </div>
                <div className="packageItems">
                  <IoIosContacts size={50} />
                  <h3>Add Name</h3>
                </div>
                <div className="packageItems">
                  <IoIosShirt size={50} />
                  <h3>Add Number</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="packageSlideContainer">
              <h3>Uncharted</h3>
              <div className="packageSlides">
                <div className="packageItems">
                  <IoMdColorPalette size={50} />
                  <h3>Customize Color</h3>
                </div>
                <div className="packageItems">
                  <IoLogoDesignernews size={50} color="#fff" />
                  <h3>Customize Design</h3>
                </div>
                <div className="packageItems">
                  <IoMdBrush size={50} />
                  <h3>Add Logo(Only 1)</h3>
                </div>
                <div className="packageItems">
                  <IoIosEasel size={50} />
                  <h3>Add Sponsor</h3>
                </div>
                <div className="packageItems">
                  <IoIosContacts size={50} />
                  <h3>Add Name</h3>
                </div>
                <div className="packageItems">
                  <IoIosShirt size={50} />
                  <h3>Add Number</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="packageButton">
          <Link to={"/select-color"}>
            <button>Select</button>
          </Link>
        </div>
        {/* <table>
        
          <tbody>
            
           
            <tr>
              <td>
                <div
                  className={styles.tableLabel}
                  style={{ fontWeight: "900" }}
                >
                  <p>Product Vendor</p>
                </div>
              </td>
              <td>
                <p style={{ fontWeight: "900", margin: 0, color: "#F3AD94" }}>
                  Juniper Jersey
                </p>
              </td>
              <td>
                <p style={{ fontWeight: "900", margin: 0, color: "#eb7e91" }}>
                  Juniper Jersey
                </p>
              </td>
              <td>
                <p style={{ fontWeight: "900", margin: 0, color: "#6d7daa" }}>
                  Your Own
                </p>
              </td>
              <td>
                <p style={{ fontWeight: "900", margin: 0, color: "#6dac97" }}>
                  Open Market
                </p>
              </td>
            </tr>
            <tr className={styles.getStartedBtn}>
              <td></td>
              <td>
                <Link to="/select-cut">
                  <button>
                    <p>Get Started</p>
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/select-cut">
                  <button>
                    <p>Get Started</p>
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/select-cut">
                  <button>
                    <p>Get Started</p>
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/select-cut">
                  <button>
                    <p>Get Started</p>
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Package;
