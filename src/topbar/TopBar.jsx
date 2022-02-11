import './Topbar.css'

export default function TopBar() {
  return (
    <div className='top'> 
         <div className="topLeft">
         <i className="topicon fa-brands fa-facebook-square"></i>
         <i className="topicon fa-brands fa-instagram-square"></i>
         <i className="topicon fa-brands fa-pinterest-square"></i>
         <i className="topicon fa-brands fa-twitter-square"></i>
         </div>
         <div className="topCenter">
             <ul className="topList">
                 <li className='topListItem'>HOME</li>
                 <li className='topListItem'>ABOUT</li>
                 <li className='topListItem'>CONTACT</li>
                 <li className='topListItem'>WRITE</li>   
                 <li className='topListItem'>LOGOUT</li>                         
             </ul>
         </div>
         <div className="topRight">
            <img
            className='topImg'
             src="https://images.pexels.com/photos/6394735/pexels-photo-6394735.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt="profile"
             />
           
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            
         </div>
    </div>
  )
}
 