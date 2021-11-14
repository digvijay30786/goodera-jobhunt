/******************************
 * Subject : Goodera Assign.  *
 * Tech Stack : ReactJs       *
 * Created Date : 11-NOV-2021 *
 * version : ^11.2.7          *
 * Author : Digvijay Singh    *
 * ****************************/


import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [jobData,setJobData] = useState([]);
  const [status,setStatus] = useState(false);
  const [keyword,setKeyword] = useState("");
  const [location,setLocation] = useState("");
  const handleData = async ()=>{
    axios.get('https://goodera-server-app.herokuapp.com/jobs')
    .then(({data})=>{
        setJobData([...data]);
        console.log(jobData);
        setStatus(true);
    });
    
  }

  useEffect(()=>{
       handleData();
  },[]);
  return (
    <div className="App">
      {/* ******************main section***************  */}
     <div className="container">
           {/* *******Top Section ************ */}
              <div className="headerStyle__section">
                {/* **********Header menu section********* */}
                 <div className="header_menu flex">
                    <div className="flex">
                      <nav  className="bottom_border">Jobhunt</nav>
                      <nav>Finds Jobs</nav>
                      <nav>Upskills Yourself</nav>
                    </div>

                    <div className="flex">
                    <nav>Post a Job</nav>
                    <nav>Sign In</nav>
                    </div>
                 </div>
                {/* **********Header menu section********* */}
              
                <div className="extra_content">
                     <div className="large_style">Find Your Dream Job</div>
                     <p className="small_style">Browse through thousands of full-time or part-time jobs near you</p>
                </div>

                {/* ****************search bar*********** */}
                       <div className="search-bar">
                         <div className="set_width">
                           <div><img src="https://imgur.com/1Avubq3.png" alt="secrch"/></div>
                           <div className="job_title"><input type="text" placeholder="job title or keywords"/></div>
                        </div>

                          <div className="set_width">
                            <div><img src="https://imgur.com/YpFH8Qp.png" alt="loaction"/></div>
                            <div><input type="text" placeholder="search location"/></div>
                          </div>


                          <div className="search_btn">
                            <button>search</button>
                          </div>

                       </div>
                {/* ****************end search bar*********** */}
              
              {/* ***********job section ************** */}
                          <div className="joblist">
                            {
                              jobData.map((value,i)=> {
                                return <div className="job_card" key={i}>
                                <div className="img_bg"></div>
                                <div className="job_content">
                                  <h3>{value.title}</h3>
                                  <p>{value.description}</p>
                                </div>
                              </div>
                              })
                            }
                          </div>
              {/* *************end job section********* */}
              </div>
            {/* *******End Top Section ************ */}
     </div>
     {/* ******************end main section***************  */}
    </div>
  );
}

export default App;
