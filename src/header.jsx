import { useState } from 'react'
import "./header.css"
import menubar from "./assets/menu-bar.png"
import { animated, useSpring } from '@react-spring/web'
import Options from "./options"

function Header() {
    const [toggle, settoggle] = useState(false);
    /* useSpring({
        from: {<attribute>:<value>},
        to: {<attribute>:<value>}    
        })

    */
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    const spin = useSpring({
        
        transform: `rotateX(${toggle ? '360deg' : '0deg'})`

    })

    const move = useSpring({
        transform: `translateX(${toggle ? '0px' : '-200px'})`
    })

    const handleClick = () => {
        settoggle(!toggle);
    }
    
    


  return (
   <>
        <animated.div className='header-container' style={fade}>
            <animated.div className='sidebar' style={fade}>
            {toggle && <Options />}
            </animated.div>
            <li className='list'>
                <a href="#" style={{'cursor': 'arrow'}} >
                    
                    <animated.div  style={{...spin, cursor: 'arrow'}}>
                        <animated.div style={move}>
                            <img onClick={handleClick} className='menubar' src={menubar} style={{ width: 50, height: 'auto'}}/>
                        </animated.div>
                    </animated.div>
                    
                </a>
            </li>
            <li className='list shop'>
                <a href="/">Shop</a>
            </li>
            <li className='list cart'>
                <a href="/cart">Cart</a>
            </li>
        </animated.div>
   </>
  )
}

export default Header;
