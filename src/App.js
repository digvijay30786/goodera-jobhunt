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
import {Link,useParams} from "react-router-dom";
import Post from './component/post';
import RouterData from './component/routerData';
import Header from './component/header';
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

  const handleFilter = () => {
    setStatus(false);
    var url = `https://goodera-server-app.herokuapp.com/jobs?${keyword?'title='+keyword:""}${location?'&location='+location:""}`;
    console.log(url);
    axios.get(url)
    .then(({data})=>{
        setJobData([...data]);
        console.log(jobData);
        setStatus(true);
    });
  }

  useEffect(()=>{
       handleData();
       console.log('a');
  },[]);

  const {id} = useParams();
  return (
    <div className="App">
      {/* ******************main section***************  */}
     <div className="container">
           {/* *******Top Section ************ */}
              <div className="headerStyle__section">
                {/* **********Header menu section********* */}
                        <Header/>
                {/* **********Header menu section********* */}
              
                <div className="extra_content">
                     <div className="large_style">Find Your Dream Job</div>
                     <p className="small_style">Browse through thousands of full-time or part-time jobs near you</p>
                </div>

                {/* ****************search bar*********** */}
                       <div className="search-bar">
                         <div className="set_width">
                           <div><img src="https://imgur.com/1Avubq3.png" alt="secrch"/></div>
                           <div className="job_title"><input type="text" placeholder="job title or keywords" onChange={(e)=>{setKeyword(e.target.value)}}/></div>
                        </div>

                          <div className="set_width">
                            <div><img src="https://imgur.com/YpFH8Qp.png" alt="loaction"/></div>
                            <div><input type="text" placeholder="search location" onChange={(e)=>{setLocation(e.target.value)}}/></div>
                          </div>


                          <div className="search_btn">
                            <button onClick={handleFilter}>search</button>
                          </div>

                       </div>
                {/* ****************end search bar*********** */}
              
              {/* ***********job section ************** */}
                
                  <RouterData data={jobData}/>
                          
              {/* *************end job section********* */}
              </div>
            {/* *******End Top Section ************ */}
     </div>
     {/* ******************end main section***************  */}
    </div>
  );
}

export default App;
