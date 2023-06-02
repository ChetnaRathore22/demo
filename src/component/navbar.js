import { Link } from "react-router-dom";

function navBar(){
    return <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <Link class="navbar-brand  text-white" href="#">Component</Link>
    <button class="navbar-toggler  text-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link  to='/student' class="nav-item nav-link text-white active" href="#">Stdent <span class="sr-only">(current)</span></Link>
        <Link to='/todo' class="nav-item nav-link text-white active" href="#">ToDo</Link>
        <Link to='/about' class="nav-item nav-link text-white active" href="#">About Us</Link>
        <Link to='/contact' class="nav-item nav-link text-white active" href="#">Contact Us</Link>
      </div>
    </div>
  </nav>
}

export default navBar;