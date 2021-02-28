import React, { Profiler } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Blogs from './Blogs';
import './Home.css';
import LODASH from 'lodash'
import 'jquery';
if (process.env.NODE_ENV !== 'production') console.log(LODASH)

function Home() {
  
    // if(window.screen.width <= 520){
    //     if(window.innerHeight != document.body.scrollHeight){
    //     setTimeout(function(){ 
    //             var num = 0
    //             setInterval(() => {
    //                 if(window.innerHeight == document.body.scrollHeight){
    //                     return '';
    //                 }else{
    //                     window.scrollTo({ left: 0, top: num, behavior: "smooth" });
    //                     num +=10;
    //                 }
    //             }, 100);
    //          }, 7000);
    //         }
    // }
    
  return (
    <div className="App">
        <div className='container main-div'>
          <div className="row align-items-start header-div p-5 pb-0">
            <div className="col-8 intro">
                <h1 id="typedtext">Hey 👋<span className='hide'>, How's it going?</span></h1>
            </div>
            <div className="col-4 img-div">
                <a href='https://twitter.com/_neerajchouhan' target='_blank'><img  className='img' src='https://pbs.twimg.com/profile_images/1361225951678357504/54aQSGQs_400x400.jpg'/></a>
            </div>
        </div>
            <p className='content p-5'>
            I am Neeraj, Currently working as a product management intern at <a data-content='Upraised' href='https://upraised.co' target="_blank">Upraised</a>. Learning <em className='i'>everything</em> to build frontier technology in near future.
Interested in Psychology & Business, running a newsletter with 200+ members on same. 
Before Upraised, I was working as a freelance full stack web developer and a front end developer at <a data-content='Upraised' href='https://www.revoteen.com/' target="_blank">Revoteen</a>.
Also, did some other stuff which you can check <a href='https://twitter.com/_neerajchouhan/status/1343755915061841920?s=20' target='_blank'>here</a>. 
Right now working on a side project - <em className='i'>Study for exam</em>. Doing it because of my <del>passion</del> parents.
Also, I do write sometimes which you can check by clicking the button below 👇. <Link to='/random'>Bookshelf</Link>
Also, did some other stuff which you can check <a href='https://twitter.com/_neerajchouhan/status/1343755915061841920?s=20' target='_blank'>here</a>.      
I do write, which you can check by clicking the button below 👇. <Link to='/random'>Bookshelf</Link>
            </p>
        </div>
        <div className="container">
            <div className="header row p-4">
                <div className='psych-btn' id='psych-btn'>
                    <a className='essay-link' href='https://api.whatsapp.com/send/?phone=917247796922&text=Hey,+Neeraj,+Hope+you%27re+doing+good.+I+got+to+know+about+Psych.+I+would+love+to+be+part+of+it!&app_absent=0' target='_blank'><button>Psych 🧠</button></a>
                </div>
                <div className='blog-btn' id='essay-btn'>
                    <Link className='essay-link' to='/essays'><button>Essay ✍🏻</button></Link>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Home;


{/* {<div className='col-6 text-align-center my-img-div'>
                <img className='my-img' src='https://images.pexels.com/photos/5745979/pexels-photo-5745979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='40' height='40'/>
            </div>} */}
