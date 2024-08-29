
import "./index.css";
export default function SearchBox()
{
   return (
    <div className="Search">
        <h1 style={{fontSize:"60px"}} className="col-md-12 Search-heading ">How can we help? </h1>
        <div class="dropdown">
  <button class="btn dropdown-toggle  offset-3 col-md-6 Search-drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <b> Search </b>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="http://localhost:8080/cards/new">Create a Card</a></li>
    {/* <li><a class="dropdown-item" href="#">Get a Card </a></li> */}
    <li><a class="dropdown-item" href="http://localhost:8080/cards/details">Info about a specific Card</a></li>
  </ul>
</div>
    </div>
   )
}