import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import React from 'react'
import { useState } from "react";

import styled from 'styled-components'
import { mobile } from "../responsive";


import { sliderItems } from "../data";
const Container=styled.div`
width: 100%;
height:100vh;
display :flex;

position:relative;
overflow:hidden;
${mobile({ display: "none" })}

`
const Arrow=styled.div`
display:flex;
height:50px;
width:50px;
border-radius:50%;
background-color:red;
align-items:center;
justify-content:center;
 position:absolute;
 transparent:0.5;
 top:0;
 bottom:0;
 z-index: 2;
 opacity: 0.5;
 
 left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
 margin:auto;

`
const Wrapper =styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);


`


const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items:center;
justify-content: center;
background-color: #${(props) => props.bg};

`
const ImgContainer=styled.div`
height: 100%;
flex: 1;
`
const Image=styled.img`
//height:80%;
height:80%;
width:80%;
// width:inherit;
margin-top:10px;
margin-left:10px;
background-color:white;

`
const InformationContainer=styled.div`
flex:1;
`

const Title=styled.h1` font-size: 70px;`
const Desc=styled.p`margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;`
const Button=styled.button`padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
    

  return (
     
   
    <Container>
        
        <Arrow direction="left"  
         onClick={()=>handleClick("left")}
        >
       <ArrowLeftOutlined></ArrowLeftOutlined>
       
        </Arrow>
   <Wrapper slideIndex={slideIndex}>

{sliderItems.map((item)=>(

   

   <Slide>
       <ImgContainer>
       <Image  src= {item.img } alt=""></Image>
       {/* <img src={img3} alt="" /> */}
       </ImgContainer> 
       <InformationContainer>
           <Title>
           {item.title}
           </Title>
           <Desc>{item.desc}</Desc>
           <Button> Get Started</Button>
       </InformationContainer>
   </Slide>


  ))};

   </Wrapper>


        <Arrow direction="right" 
         onClick={()=>handleClick("right")}
        >
        
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider