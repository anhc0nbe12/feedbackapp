import { Link} from "react-router-dom"
function About() {
   // const status = 200
   // if (status === 200){
   //    return <> <Navigate to='/' /></>
   // }
  return <div className="container">
     <h1>This is about page</h1>
      <Link to={{pathname:'/', search:'?product=smartphone',hash:'#remove'}}>Back Home</Link>
  </div>
}

export default About
