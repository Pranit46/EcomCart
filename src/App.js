import React from "react";
import "./App.css";
import {useState} from 'react';


function App() {
  
  let [cartItems,setcartItems] = useState([])
  let [cart, setCart] = useState(0)
  let [siSelected, setSiSelected] = useState(false);
  let [siSelected2, setSiSelected2] = useState(false);
  let [siSelected3, setSiSelected3] = useState(false);
  let [siSelected4, setSiSelected4] = useState(false);
  let [siSelected5, setSiSelected5] = useState(false);
  let [siSelected6, setSiSelected6] = useState(false);
  let [total,setTotal]= useState(0)

  function handleAddCart(item){
    setCart(prev=>prev+1)
    setSiSelected(prev=>!prev)
    setTotal(prev=>prev+item.price)
    cartItems.push(item)
    console.log(cartItems);
  }

  function handleRemoveCart(value){
    setCart(prev=>prev-1)
    setSiSelected(prev=>!prev)
    setTotal(prev=>prev-value)
    cartItems.splice(cartItems.indexOf(value),1)
  }

  function handleAddCartTwo(item){
    setCart(prev=>prev+1)
    setSiSelected2(prev=>!prev)
    setTotal(prev=>prev+item.price)
    cartItems.push(item)
    console.log(cartItems);
  }
  
  function handleRemoveCartTwo(value){
    setCart(prev=>prev-1)
    setSiSelected2(prev=>!prev)
    setTotal(prev=>prev-value)
    cartItems.splice(cartItems.indexOf(value),1)
  }
  

  function handleAddCartThree(item){
    setCart(prev=>prev+1)
    setSiSelected3(prev=>!prev)
    setTotal(prev=>prev+item.price)
    cartItems.push(item)
    console.log(cartItems);
  }
  
  function handleRemoveCartThree(value){
    setCart(prev=>prev-1)
    setSiSelected3(prev=>!prev)
    setTotal(prev=>prev-value)
    cartItems.splice(cartItems.indexOf(value),1)
  }

  function handleAddCartFour(item){
    setCart(prev=>prev+1)
    setSiSelected4(prev=>!prev)
    setTotal(prev=>prev+item.price)
    cartItems.push(item)
    console.log(cartItems);
  }
  
  function handleRemoveCartFour(value){
    setCart(prev=>prev-1)
    setSiSelected4(prev=>!prev)
    setTotal(prev=>prev-value)
    cartItems.splice(cartItems.indexOf(value),1)
  }

  function handleAddCartFive(item){
    setCart(prev=>prev+1)
    setSiSelected5(prev=>!prev)
    setTotal(prev=>prev+item.price)
    cartItems.push(item)
    console.log(cartItems);
  }
  
  function handleRemoveCartFive(value){
    setCart(prev=>prev-1)
    setSiSelected5(prev=>!prev)
    setTotal(prev=>prev-value)
    cartItems.splice(cartItems.indexOf(value),1)
  }

  function handleAddCartSix(item){
    setCart(prev=>prev+1)
    setSiSelected6(prev=>!prev)
    setTotal(prev=>prev+item.price)
    cartItems.push(item)
    console.log(cartItems);
  }
  
  function handleRemoveCartSix(value){
    setCart(prev=>prev-1)
    setSiSelected6(prev=>!prev)
    setTotal(prev=>prev-value)
    cartItems.splice(cartItems.indexOf(value),1)
  }


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {/* {cart} */}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
            <p>
              Cart Items:
              {
                cartItems.map(e=>{
                  return <>
                  {e.name}
                  {e.price}
                  </>
                })
              }
            </p>
          </div>
        </div>
      </header>

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder" >Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    {
                    siSelected?
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleRemoveCart(18)}>
                      Remove from cart
                    </button>:
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleAddCart({name:"Special Item", price:"18"})}>
                    Add to cart
                  </button>
                  }
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                  {
                    siSelected2?
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleRemoveCartTwo(25)}>
                      Remove from cart
                    </button>:
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleAddCartTwo({name:"Sale Item", price:"25"})}>
                    Add to cart
                  </button>
                  }
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                  {
                    siSelected3?
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleRemoveCartThree(40)}>
                      Remove from cart
                    </button>:
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleAddCartThree({name:"Popular Item", price:"40"})}>
                    Add to cart
                  </button>
                  }
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                  {
                    siSelected4?
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleRemoveCartFour(40)}>
                      Remove from cart
                    </button>:
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleAddCartFour({name:"Sale Item", price:"50"})}>
                    Add to cart
                  </button>
                  }
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                  {
                    siSelected5?
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleRemoveCartFive(40)}>
                      Remove from cart
                    </button>:
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleAddCartFive({name:"Sale Item", price:"50"})}>
                    Add to cart
                  </button>
                  }
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                  {
                    siSelected6?
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleRemoveCartSix(40)}>
                      Remove from cart
                    </button>:
                    <button class="btn btn-outline-dark mt-auto" onClick={()=> handleAddCartSix({name:"Sale Item", price:"50"})}>
                    Add to cart
                  </button>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

      <script src="js/scripts.js"></script>
    </>
  );
}

export default App;
