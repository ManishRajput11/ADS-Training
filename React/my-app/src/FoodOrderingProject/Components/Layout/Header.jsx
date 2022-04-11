import React, { Fragment } from 'react'

import HeaderCartButton from './HeaderCartButton'
import Mealimage from '../../Image/meals.jpg'
import classes from './Header.module.css'

const Header = props=> {
    return <Fragment>
        <header className={classes.header}>
            <h1>FoodOrder App</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={Mealimage} alt='Picture of Meals'/>
        </div>
    </Fragment>
}

export default Header;