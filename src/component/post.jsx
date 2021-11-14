import { useParams } from "react-router";

const Post = ()=>
{
    const {id} = useParams();
   return(
    <div className="joblist">
       <h1>afg {id}</h1>
       </div>
   );
}

export default Post;