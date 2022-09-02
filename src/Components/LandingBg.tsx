import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../Home.scss";

const SvgComponent = (props: any) => {
  const [mobX, setMobX] = useState(1920);
  const [mobY, setMobY] = useState(1920);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    isTabletOrMobile ? setMobX(480) : setMobX(1920);
    isTabletOrMobile ? setMobY(1080) : setMobY(1080);
  }, [isTabletOrMobile]);
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox={`0 0 ${mobX} ${mobY}`}
      style={{
        enableBackground: "new 0 0 1920 1080",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".st0{fill:#0a0612}.st1{fill:#ca8274}.st2{fill:none}.st3{fill:#339b97}"
        }
      </style>
      <path className="st0" d="M0 0h1920v1080H0z" />
      <path d="M399.9 1021.7H0v58.3l442.3.4zM1520.4 1021.7h399.9v58.3l-442.3.4z" />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1={500}
        y1={500}
        x2={800}
        y2={800}
      >
        <stop className="t2" offset={0} />
        <stop offset={500} className="t1" />
      </linearGradient>
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1={500}
        y1={500}
        x2={800}
        y2={800}
      >
        <stop className="t3" offset={0} />
        <stop offset={500} className="t4" />
      </linearGradient>
      <path
        //   className={`st1 ${styles.test}`}
        style={{
          fill: "url(#SVGID_2_)",
        }}
        d="m432.7 901.9-302-405L501.5.4h-17.8l-370 496.5 312 419h161l121.9 164.5h19.8L592 901.9z"
      />
      <path d="m-.5 495.2.5.6v-1.2z" />
      <path
        style={{
          fill: "url(#SVGID_3_)",
        }}
        d="M17 495.2 384.8 0h-17.4L8.3 483.5 0 494.6v1.2l8.3 11.1 293.3 395L0 900.1v14l312.1 1.8 17.5.2-10.4-14.1zM251.7 0 0 335.4V361L273.1 0zM450 1080h-17.2l-43-58.3 17.5.2z"
      />
      <path className="st2" d="M463.5 1080H450M415 1022l-7.7-.1" />
      <path className="st1" d="M62.8 1141.8c1.9 0 1.9-3 0-3s-1.9 3 0 3z" />
      <path
        style={{
          fill: "url(#SVGID_2_)",
        }}
        d="m1487.2 901.9 302-405L1418.5.4h17.8l369.9 496.5-312 419h-161l-121.9 164.5h-19.8L1328 901.9zM1920.4 495.2l-.4.6v-1.2z"
      />
      <path
        style={{
          fill: "url(#SVGID_3_)",
        }}
        d="M1903 495.2 1535.1 0h17.5l359.1 483.5 8.3 11.1v1.2l-8.3 11.1-293.4 395 301.7-1.8v14l-312.1 1.8-17.5.2 10.4-14.1zM1668.2 0 1920 335.4V361L1646.8 0zM1469.9 1080h17.2l43-58.3-17.4.2zM1469.9 1080h-13.4M1512.7 1021.9l-7.7.1"
      />
    </svg>
  );
};

export default SvgComponent;
