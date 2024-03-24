import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";
import "../index.css";
 
gsap.registerPlugin(ScrollTrigger); 
 
const TestPage = () => {
 
  useGSAP(() => {
    let section1 = document.getElementById('section1');
    let title1 = document.getElementById('title1')
 
    let section2 = document.getElementById('section2')
    let title2 = document.getElementById('title2')

    let orangeBoxContainer = document.getElementById('orangeBoxContainer');
    let grayBoxContainer = document.getElementById('grayBoxContainer');
 
    gsap.set(title1, {
      color: '#FFFFFF',
      top: '70%',
      left: '40%',
      position: 'absolute'
    });
 
    gsap.set(orangeBoxContainer, {
        position: 'relative',
        backgroundColor: "#e36435",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: "0px",
        width: "100vw",
        height: "100vh",
        transformOrigin: "50% 50%"

    });

    gsap.set(grayBoxContainer, {
        opacity: 1, //change to 0 later
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: "0 0 50px 50px",
        width: "85vw", 
        height: "66vh",
        zIndex: -1,
        rotationX: -90, 
        transformOrigin: "50% 50%",
        translateY: "-50%"
    });



    gsap.set("#section1", {
      transformStyle: "preserve-3d"
    });
    gsap.set("#section1 div", {
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50% -50px",
      transformPerspective: 1000
    });
    gsap.set("#grayBoxContainer", {
      rotationX: 270
    });


    


    let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: section1,
          start: "top top",
          end: "+=2000px",
          markers: true,
          scrub: 1,
          pin: section1,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" }
      });

    // Orange Section  
    tl1
    .to(title1, { opacity: 1, fontSize: '75px' })
    .to(title1, { top: "30%", left: "15%", duration: 6, color: "#FFFFFF"}, "<")
    .to(title1, {duration: 3, position:'fixed',top:"25%", left:"10%"})

    .to(orangeBoxContainer, {backgroundColor: "#f98b63",duration:6, width: "85vw", height: "66vh", marginTop: "17vh", borderRadius: "50px" })
    // Box is pinned
    .to(title1, {fontSize:"40px", fontWeight: '700' ,duration: 4, position:'absolute',top:"100px", left:"100px",color:"#3a4146"}, "<")
    .to(subtitle1, {position: 'absolute', bottom:"100px", right:"100px", color:"#ffffff"}, "<")

    // Text move up and down
    .to(subtitle1, {opacity:1, duration: 2, position: 'absolute', bottom:"100px", right:"100px", color:"#3a4146", y: -30})
    .to(title1, {y: 30, duration: 2, color: "#3a4146"}, "<")

    // text move left and right
    .to(subtitle1, {duration: 6, x: -40})
    .to(title1, {duration: 6, x: 40}, "<")

    .to(orangeBoxContainer, { rotationX: '+=90', ease: "none" })
    .to(grayBoxContainer, { rotationX: '+=90', ease: "none" }, "<")
    // .to("#sectionContainer", { perspective: 100, duration: 10}, "<");
    
    // // CUBE ROTATE BACK ANIMATIONS
    // // BEGIN
    // .to(orangeBoxContainer, {duration: 5, borderRadius: "50px 50px 0 0"})
    // .to(grayBoxContainer, {duration: 5, }, "<")

    //   // ROTATE
    // .to(orangeBoxContainer, {duration: 10, rotationX: 90, transformOrigin: "50% 50% -50"})
    // .to(grayBoxContainer, {duration: 10, rotationX: 0, transformOrigin: "50% 50% -50"}, "<")


    //       // text move and fade out
    //       .to(subtitle1, {opacity:0, duration: 4, y: -60}, "<")
    //       .to(title1, {opacity: 0, y: -60, duration: 4}, "<")

    // // END
    // .to(grayBoxContainer, {duration: 1, borderRadius: "0 0 50px 50px"})





  });



 
  return (
    <div id="sectionContainer">
        {/* Orange Container */}
      <section id="section1">
        <div id="orangeBoxContainer">
          <h3 id="title1" >We are the perfect combination of<br></br> robotic and human teams</h3>
          <h4 id="subtitle1">Alderton & Company are based in the Perth CBD providing first-class Accounting, Taxation, Corporate Services, & related Automation services.</h4>
        </div>
        {/* Grey Container */}
        <div id="grayBoxContainer">
          <h3 id="title2" >We are the perfect combination of<br></br> robotic and human teams</h3>
          <h4 id="subtitle2" >We are the perfect combination of<br></br> robotic and human teams</h4>
          <img id="logo-img" src="public\assets\images\AldertonBhudia-Logo-RGB-Horizontal-Standard.png" alt="robot" />
        </div>
      </section>


      <h2>GSAP 3D cube cross browser - rotateX relative tweening</h2>





      <div id="box">
        <div class="box">
          <div class="side6 bottom">6</div>
          <div class="side1 front">1</div>
        </div>
      </div>

      {/* <button id="rotateXplus" onClick={handleClick}>toggle rotateX cube 90deg</button> */}

      <section id="red">
        <p id="title12">OR not to THRIS <span>?</span></p>
      </section>
    </div>
  );
 
}
 
 
export default TestPage;