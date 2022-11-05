import { useEffect, useState } from 'react';
import Title from '../../UI/Title'
import classes from './Header.module.css'

function Header (props) {
    const [ sizeClass , sizeSetter] = useState(false);
    const scrollHandler = event => {
        if(event.currentTarget.scrollY>0){
            sizeSetter(true)
        }else{
            sizeSetter(false)
        }
    }
    // if (typeof window !== "undefined"){
    //     window.addEventListener('scroll',scrollHandler)
    // }
    // Window.addEventListener('scroll',scrollHandler)
    // componentWillMount () {
    //     window.addEventListener('scroll',scrollHandler)
    // }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
    },[])
    return (
        <header className={`${classes.header} ${sizeClass && classes.active}`}>
            <Title>
                A List Of Books
            </Title>
        </header>
    )
}

export default Header ;