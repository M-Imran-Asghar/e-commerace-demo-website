import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { AddItem, removeItem } from '../store/ItemAddToCartSlice'
import { decrement } from '../store/CountSlice'
import { MdDelete } from "react-icons/md"


function AddToCart() {

  const dispatch = useDispatch()
  const handelRemove = (item) => {
    dispatch(removeItem(item.id))
    dispatch(decrement())
    // console.log("click")
    
  }
  
  
  const items = useSelector((state)=> state.item.items)
  const totalPrice = useSelector((state)=> state.item.totalPrice)

  return (
    <div className=" flex justify-center items-center  z-10 bg-gray-700 mt-14 py-5 rounded-lg bg-opacity-90 m-1">
      <table className="border-collapse shadow-lg shadow-gray-300  py-6 w-1/2 rounded-xl">
        <thead></thead>
        <tbody className="w-full text-white border-collapse rounded-lg">
        <tr className="flex justify-around ">
          <th className='p-2'>Name</th>
          <th className='p-2'>Price</th>
          <th className='p-2'>Delete</th>
        </tr>
        {items.map((item)=>(
          <tr className=" flex justify-around border-black border my-1 mx-auto rounded-lg"
          key={item.id}>
            <td className="p-2">{item.label}</td>
            <td className=" p-2">{item.price}</td>
            <td className='p-2'>
              <button 
              className='text-2xl text-red-900 hover:text-red-500'
              // onClick={()=>dispatch(removeItem(item.id))}
              onClick={()=>handelRemove(item)}
              >
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
        </tbody>
        
      </table>
    </div>
  )
}

export default AddToCart