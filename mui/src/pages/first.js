import React, { useState, useEffect } from 'react';
import '../css/contect.css';

export default function Rendering() {
  const initial={home:false,news:false,newlog:false}
  const [render, setRender] = useState([]);
  const [display,hidedisp]=useState({...initial,home:true});
  function renderOne() {
    hidedisp({...initial,home:true});
    fetch("http://localhost:3002/data/gether")
      .then(result => result.json())
      .then(data => {
        console.log(data[0].data);
        setRender(data[0].data)
      });
  }
  function renderTwo() {
    hidedisp({...initial,news:true});
    fetch("http://localhost:3002/data/gether")
      .then(result => result.json())
      .then(data => {
        console.log(data[1].data2);
        setRender(data[1].data2)
      });
  }
  function renderThree(){
    hidedisp({...initial,newlog:true});
    fetch("http://localhost:3002/data/gether")
      .then(result => result.json())
      .then(data => {
        console.log(data[2].data3);
        setRender(data[2].data3)
      });
  }
  useEffect(() => {
    renderOne();
    renderTwo();
    renderThree();
    return () => {
    };
  }, []);
  return (
    <>
    <div className='showdata'><button className="somedata" id="loginbtn" onClick={renderOne}>
        home
      </button> 
      <br/>
      <button className="moredat" id="loginbtn" onClick={renderTwo}>
        new-tab
      </button>
      <br/>
      <button className="moredat" id="loginbtn" onClick={renderThree}>
        new-tab2
      </button>
      <div className='showcase'>
      <p>{render}</p>
      </div>
      </div>
      
    </>
  );
}
