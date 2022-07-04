import React from 'react'
import { Button,Container,Offcanvas,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import './navbar.css'
function Navbar() {
  return (
    <>


  <header id="header" class="fixed-top">

    <div className="container-fluid head-1 d-flex align-items-center justify-content-between">
    
    <marquee style={{behavior:"scroll", direction:"left" ,width:"100%"}}>
     Let's leave a better planet for the coming generations!
    </marquee>

</div>

 <div class="container d-flex head-2 align-items-center justify-content-between">

<nav id="navbar" class="navbar">
  <ul>
    <li><a class="nav-link scrollto" href="https://www.facebook.com/virmanshadesigns/" target="_blank" ><i><img src="https://www.virmansha.com/assets/img/fb.png"/></i></a></li>

    <li><a class="nav-link scrollto" href="https://www.instagram.com/virmansha_designs/" target="_blank"><i><img src="	https://www.virmansha.com/assets/img/insta.png"/></i></a></li>

    <li><a class="nav-link scrollto" href="https://www.linkedin.com/company/virmanshadesigns" target="_blank"><i><img src="	https://www.virmansha.com/assets/img/linkedin.png"/></i></a></li>
  </ul>
</nav>
<a href="" class="logo"><img src="https://www.virmansha.com/assets/img/logo3.png" alt="" class="img-fluid" /></a>


<nav id="navbar" class="navbar">
  <ul>
  
    <li>
    
<div class="searchbar">
<form action="" method="POST">
<input type="text" name="name" class="search-head" placeholder="Search..." required />
  <i class="fa fa-search searchIcon" aria-hidden="true"></i>
<div class="icon">


</div>
</form>
</div>
    
    <form id="content-search" class=" d-none">
<input type="text" name="name" class="input" id="search-input" placeholder="" required />
<button type="reset" class="search" id="search-btn"></button>
</form>
    </li>
    <li><a class="nav-link scrollto " href="#"><i>
    
    

    <i class="fa fa-shopping-bag" aria-hidden="true"></i>




</i></a></li>
    <li class="dropdown"><a href="#"><i class="fa fa-bars" aria-hidden="true"></i>
</a>
      <ul>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Impact</a></li>
    <li><a href="#" data-bs-toggle="collapse" data-bs-target="#dropnav"><span>Products</span> <i class="fa fa-chevron-down" aria-hidden="true"></i>
</a>
          <div class="nav-header-drop collapse" id="dropnav">
            <p><a href="">Home furnishings</a></p>
            <p><a href="">Home Decor</a></p>
            <p><a href="">Bags</a></p>
            <p><a href="">Accessories</a></p>
            <p><a href="">Toys</a></p>
          </div>
    </li>
    <li><a href="">Shop</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Contact</a></li>
      </ul>
    </li>
  </ul>
</nav>

</div>
</header>
  </>
  )
}

export default Navbar
