import { useState } from 'react'
import Meals from './Components/Meals/Meals'
import Header from './Components/Layout/Header'
import Cart from './Components/Cart/Cart'


function Appp (){
    const [cartIsShown, setcartIsShown] = useState(false);

    const showCartHandler = () => {
        setcartIsShown(true);
    };

    const hideCartHandler = () =>{
        setcartIsShown(false);
    };
    return(
        <>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} />
        <main>
            <Meals />
        </main>
        </>
    )
}

export default Appp