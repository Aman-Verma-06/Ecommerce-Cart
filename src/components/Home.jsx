import React, { useState } from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from './CardData'
import { addToCart } from '../store/slice/cartSlice'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { FaRupeeSign } from "react-icons/fa";


const Home = () => {
    const [cardData, setCardData] = useState(CardData);

    const dispatch = useDispatch()

    const sendCart = (e) => {
        dispatch(addToCart(e))
        toast.success('Item is added successfully')
    }

    return (
        <>
            <section className='item_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 500 }}>Available Restaurants</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        cardData.map((ele) => {
                            return (
                                <>
                                    <Card key={ele.id} style={{ width: '22rem', border: 'none' }} className='hove mb-4' >
                                        <Card.Img variant='top' className='cd' src={ele.imgdata} />
                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{ele.dish}</h4>
                                                <span>{ele.rating}</span>
                                            </div>
                                            <div className="lower_data d-flex justify-content-between">
                                                <h5>{ele.address}</h5>
                                                <span style={{ fontWeight: 'bolder' }}><FaRupeeSign style={{ fontSize: '13px' }} />{ele.price}</span>
                                            </div>
                                            <div className="extra"></div>
                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={ele.arrimg} alt={ele.arrimg} className='limg' />
                                                <Button style={{ width: '150px', backgroundColor: 'red', border: 'none', fontWeight: 'bolder' }}
                                                    variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={() => sendCart(ele)}
                                                >Add to cart</Button>
                                                <img src={ele.delimg} alt={ele.delimg} className='laimg' />
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Home
