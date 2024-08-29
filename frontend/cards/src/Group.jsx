
import Navbar from "./navbar";
import SearchBox from "./SearchBox";
import Axios from "./Axios";
import Footer from "./footer";
import "./index.css";

export default function Group(){

    return(
        <section className="nav-top">
        <Navbar/>
        <SearchBox/>
        <Axios/>
        <Footer/>
        </section>
    )
}