
import "./index.css";

export default function Navbar()
{
   return(
    
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
 <div className="nav-start">
 <i class="fa-solid fa-circle-arrow-right nav-icon"></i>
 <a class="navbar-brand">Abstract</a>
 <a className="navbar-text">Help Center</a>
 </div>
    <form class="d-flex">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
      <a href="http://localhost:8080/cards/new" className="submit">Submit a request</a>
    </form>
  </div>
</nav>
 
   
   )
}