
import { FaSearch } from "react-icons/fa";
import "./Header.css"
import logo from "../../assets/images/amazon_logo.png";
import flag from "../../assets/images/adress.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Lowerheader } from "./Lowerheader";
import { Link } from "react-router-dom";
import { useCart } from "../../cart/CartContext";

const Header = () => {
const { cartCount } = useCart();
  return (

<div className="the_hole">
    
    <section className='header_container'>

        <section className='left_row1'>
            <div className='left_row2' >
{/* this  section is the  logo section */}


  <Link to="/Home"> <img className='logo' src={logo} width={100}/>
</Link>

<span>
    {/* icon section */}
   
</span>

<div>
    <a href="" className='Location'>
 <IoLocationOutline/>
<p>deiverd to </p>
<span> <strong> Ethiopia</strong>  </span>
</a>
</div>
            </div>
{/* this  is  the  search  section  */}
<select className='all'>
    <option value="">all</option>
    <option value="">all departments</option>
    <option value="">art and graphics</option>
    <option value="">auyhomotiv </option>
    <option value="">baby</option>

    <option value="">beauty</option>
    <option value="">books</option>
    <option value="">boys phashin</option>
    <option value="">compeuter</option>
    <option value="">deals</option>

</select>
<input className='search_product'   type='search'    placeholder='search product.....'>
</input>
<FaSearch className='search_icon'/>

            <dov className="right_row">
                {/* the right  side link */}
                <div className="flag">
                    <img src={flag} width={40}></img>
                   <p>EN</p>  



                   
               <select name="" id=""> 
                        <option value="">Change_langeuge</option>
                        <option value="">amharic</option>
                        <option value="">spanish</option>
                        <option value="">einglishh</option>
                        <option value="">france</option>
                        <option value="">tigray</option>
                        <option value="">oromic</option>
                        <option value="">geaz</option>
                        <option value="">agew</option>
                        v
                    </select>
                </div>
                 <Link to="/login">Login</Link>

     
                <a href=''> <div>
                    <p>hello sign IN</p>
                    <strong>
                    <span>Account and lists
                      
                    </span>
                    </strong>

                </div></a>
               

{/* the order  section  */}


 <Link to="/Order"> <p>return</p>
    <strong>
    <span>and  order</span>
    </strong></Link>
{/* the  cart section */}

  <Link to="/cart">
        <span>Cart</span>
        <span>{cartCount}</span>
      </Link>


{/* icon */}






            </dov>
            <div>

            </div>
        </section>

       
    </section>
     <Lowerheader/>
    </div>
  )
}

export default Header