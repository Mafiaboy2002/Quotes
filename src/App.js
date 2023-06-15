import React, { useEffect ,useRef } from 'react';
import { useState } from 'react';
//  npm install react-icons --save then use below thing
import { BsInstagram,BsTwitter,BsFacebook} from "react-icons/bs";
import './App.css';

const App = () => {

  const [quotes,setQuotes] = useState('');
  // const textref = useRef();
  // var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
	// 	  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  //     "#7AD236",	"#7260D8",	"#1DEAA7",	"#06F43A",	"#823C59",	"#E3D94C",	"#DC1C06",
  //     "#F53B2A",	"#B46238",	"#2DFFF6",	"#A82B89",	"#1A8011",	"#436A9F",	"#1A806A",
  //     "#4CF09D",	"#C188A2",	"#67EB4B",	"#B308D3",	"#FC7E41",	"#AF3101",	"#FF065",
  //     "#71B1F4",	"#A2F8A5",	"#E23DD0",	"#D3486D",	"#00F7F9",	"#474893",	"#3CEC35",
  //     "#1C65CB",	"#5D1D0C",	"#2D7D2A",	"#FF3420",	"#5CDD87",	"#A259A4",	"#E4AC44",
  //     "#1BEDE6",	"#8798A4",	"#D7790F",	"#B2C24F",	"#DE73C2",	"#D70A9C",	"#25B67",
  //     "#88E9B8",	"#C2B0E2",	"#86E98F",	"#AE90E2",	"#1A806B",	"#436A9E",	"#0EC0FF",
  //     "#F812B3",	"#B17FC9",	"#8D6C2F",	"#D3277A",	"#2CA1AE",	"#9685EB",	"#8A96C6",
  //     "#DBA2E6",	"#76FC1B",	"#608FA4",	"#20F6BA",	"#07D7F6",	"#DCE77A",	"#77ECCA"];
  // const getQuotes = ()=>{
  //   fetch("https://type.fit/api/quotes")
  //   .then((res) => res.json())
  //   .then(data => console.log(data))
  // }

  const getQuotes = ()=>{
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then ((data) =>{
      let randomNum = Math.floor(Math.random()*data.length);
      setQuotes(data[randomNum]);
      console.log(data[randomNum]);
    });
  };
  
  useEffect(()=>{
    getQuotes()
  },[]);
  //show quotes in different color
  // useEffect(()=>{
  //   textref.current.style.color = colorArray[Math.floor(Math.random()*colorArray.length)]
  // },[quotes]);
  return (
   <>
   <div class="header">
  <a  class="logo">Quotes</a>
  </div>
  <div className='App'>
    <div className='quote'>
      {/* used when we need different color
    <p ref={textref}>{quotes.text}</p> */}
      <p >{quotes.text}</p>
      <p>Author: {quotes.author}</p>
  <div className='btnContainer'>
    <button className='btn' onClick={getQuotes}>Get Quote</button>

  </div>
    </div>
  </div>
 
  <footer id="footer">
    <BsInstagram  />
    <i className="bi bi-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <BsFacebook/>
    <i className="fa fa-github" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-pinterest-square" style={{fontSize:'20px', padding: '10px'}}></i>
 
    < BsTwitter/>
    <p style={{color:'#333333',fontFamily:'Euclid Circular,sans-serif',paddingTop:'4px'}}> Copyright © 2023 Quotes. All right reserved</p>
   

  </footer>
 

   </>
  );
}

export default App;
