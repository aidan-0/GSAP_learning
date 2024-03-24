import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../pages/cube.css";

gsap.registerPlugin(ScrollTrigger);

const CubePage = () => {
  let box = document.getElementById('box');
  let body = document.getElementsByTagName('body')[0];



  useGSAP(() => {
    gsap.set("#box", {
      perspective: 1000,
    });
    gsap.set(".box", {
      transformStyle: "preserve-3d",
    });
    gsap.set(".box div", {
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50% -370",
      transformPerspective: 1000,
    });
    gsap.set(".bottom", {
      rotationX: 270,
    });

    gsap.set(".front", { borderRadius: "50 50 50 50" });
    gsap.set(".bottom", { borderRadius: "50 50 50 50", opacity: 0 });


    const tlFaces = gsap.timeline({
      scrollTrigger: {
        trigger: ".box",
        start: "top 14%",
        end: "+=2000px",
        markers: true,
        scrub: 1,
        pin: box,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });
    tlFaces
      .to(".front", { borderRadius: "50 50 0 0", duration: 2,})
      .to(".bottom", { opacity: 1, borderRadius: "0 0 50 50", duration: 2 }, "<")
      .to(".front", { rotationX: "+=90", ease: "none", duration: 2,})
      .to(".bottom", { rotationX: "+=90", ease: "none", duration: 2 }, "<")
      .to(".front", { opacity: 0 })
      .to(".bottom", { borderRadius: "50 50 50 50" })
      .to(body, { backgroundColor: "#e57146" })
      .to(".bottom", { backgroundColor: "#e57146" }, "<")

      
  });

  return (
    <>
      <div>
        <h2>GSAP 3D cube cross browser - rotateX relative tweening</h2>

        <div id="box">
          <div className="box">
            <div className="side6 bottom">6</div>
            <div className="side1 front">1</div>
          </div>
        </div>
        <h2 id="end">End</h2>

      </div>
    </>
  );
};

export default CubePage;
