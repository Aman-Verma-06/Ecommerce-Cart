import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Header = () => {
    const { carts } = useSelector((state) => state.cart)
    // console.log(carts);
    return (
        <>
            <Navbar style={{ height: '60px', backgroundColor: 'black', color: 'white' }} className='sticky-top'>
                <Container>
                    <NavLink className='text-decoration-none text-light mx-2' to='/'>
                        <h3 className='text-light'>Foodieee</h3>
                    </NavLink>
                    <NavLink to='/cart' className='text-decoration-none text-light mx-2'>
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                                <CiShoppingCart style={{ fontSize: '40px', cursor: 'pointer' }} />
                            </span>
                        </div>
                    </NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
