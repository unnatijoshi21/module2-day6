import '../Assets/CSS/navigation.css'
import {Link} from 'react-router-dom'

function CustomNavi()
{
 return(
    <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/news">News</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/products">Products</Link></li>
        <li><Link to ="/mycounter">Counter</Link></li>
        {/* <li><a className="active" href="/">Home</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li> */}
    </ul>
 )   
}

export default CustomNavi