import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const name = JSON.parse(localStorage.getItem("user"))?.user?.name;
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div>

    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-green-900">
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 link-secondary text-white">Home</a></li>
        <li><a href="*" class="nav-link px-2  text-white">Product</a></li>
        <li><a href="*" class="nav-link px-2  text-white">Post</a></li>
        <li><a href="*" class="nav-link px-2  text-white">FAQs</a></li>
        <li><a href="/about" class="nav-link px-2  text-white">About</a></li>
      </ul>
      
      <div class="col-md-3 text-end text" >
     
        {name ? ( 
          <div class="list-none">
              <a type="button" class="btn btn-outline-light me-2">Hello,{name}</a>
              <a type="button" class="btn btn-outline-light me-2" onClick={logOut}>Logout</a>
          </div>
        ):(
         <div class="list-none">
            <a href="/login" type="button" className="btn btn-warning me-2">Login</a>
            <a href="/register" type="button" className="btn btn-danger mr-2">Sign-up</a>
         </div>
        )}
       
      </div>
    </header>
  </div>
  );
}
