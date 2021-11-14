import {Routes,Route} from "react-router-dom";
import Post from "./post";
const RouterData = ({data}) =>
{
    return(
        <Routes>
        <Route path="/" element={
              <div className="joblist">
                 {
                   data.map((value,i)=> {
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
             } />
        <Route path="/:id" element={<Post id={"post"}/>} />
     </Routes>
    )
}

export default RouterData;