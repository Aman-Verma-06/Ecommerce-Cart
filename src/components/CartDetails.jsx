import './card.css'
import React, { useEffect, useState } from 'react'
import { CiTrash } from "react-icons/ci";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, remove, emptyCart } from '../store/slice/cartSlice';
import toast from 'react-hot-toast';
import { FaRupeeSign } from "react-icons/fa";


const CartDetails = () => {

  const [totalPrice, setTotalPrice] = useState(0)

  const [totalQty, setTotalQty] = useState(0)

  const { carts } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleIncrement = (e) => {
    dispatch(addToCart(e))
  }

  const handleDecrement = (e) => {
    dispatch(removeToCart(e))
    toast.success('Item Removed!')
  }

  const handleRemove = (e) => {
    dispatch(remove(e))
  }

  const emptyAll = () => {
    dispatch(emptyCart())
    toast.success('Empty Successfull!!!')
  }

  const total = () => {
    let totalPrice = 0
    carts.map((ele, index) => {
      totalPrice = ele.price* ele.qnty + totalPrice
    } )
    setTotalPrice(totalPrice)
  }
  const totalQuantity = () => {
    let totalQty = 0
    carts.map((ele, index) => {
      totalQty = ele.qnty + totalQty
    } )
    setTotalQty(totalQty)
  }

  useEffect(() => {
    total()
  }, [total])

  useEffect(() => {
    totalQuantity()
  }, [totalQuantity])

  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-hearder bg-dark p-3">
              <div className='card-header-flex'>
                <h5 className='text-white m-0'>Cart: {carts.length > 0 ? `[${carts.length}]` : ''}</h5>
                {
                  carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={emptyAll}  ><CiTrash className='fa fa-trash-alt mr-2' style={{ fontSize: '20px' }} />Empty Cart</button> : null
                }
              </div>
            </div>
            <div className="card-body p-0">
              {
                carts.length === 0 ? <table className='table cart-table mb-0'>
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className='cart-empty'>
                          <i className='fa fa-shopping-cart'></i>
                          <p>Your Cart is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table> : <table className='table cart-table mb-0 table-responsive-sm'>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th className='text-right'><span id='amount' className='amount' >Total Amount</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      carts.map((data, index) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <button className='prdct-delete' onClick={() => handleDecrement(data.id)} ><CiTrash className='fa fa-trash-alt mr-.5' style={{ fontSize: '20px' }} /></button>
                              </td>
                              <td>
                                <div className='product-img'>
                                  <img src={data.imgdata} alt={data.imgdata} />
                                </div>
                              </td>
                              <td>
                                <div className='product-name'>
                                  <p className='font-weight-bold'>{data.dish}</p>
                                </div>
                              </td>
                              <td className='font-weight-bold'><FaRupeeSign style={{ fontSize: '15px' }} />{data.price}</td>
                              <td>
                                <div className='prdct=qty-container'>
                                  <button className='prdct-qty-btn' type='button' onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleRemove(data)}  ><FaMinus className='fa fa-minus' /></button>
                                  <input type="text" className='qty-input-box' value={data.qnty} disabled name="" id="" />
                                  <button className='prdct-qty-btn' type='button' onClick={() => handleIncrement(data)} ><FaPlus className='fa fa-plus' /></button>
                                </div>
                              </td>
                              <td className='text-right font-weight-bold'><FaRupeeSign style={{ fontSize: '15px' }} />{data.qnty * data.price}</td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>Items in cart<span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalQty}</span></th>
                      <th className='text-right'>Total Price<span className='ml-2 mr-2 font-weight-bold'>:</span><span className='text-danger'><FaRupeeSign style={{ fontSize: '15px' }} />{totalPrice}</span></th>
                    </tr>
                  </tfoot>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartDetails
