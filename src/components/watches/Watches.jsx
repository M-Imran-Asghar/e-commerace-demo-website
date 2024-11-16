import React, {useState, useEffect} from "react";
import { watchesData } from "../data/WatchesData";
import { useDispatch } from "react-redux";
import { increment } from "../store/CountSlice";
import { AddItem } from "../store/ItemAddToCartSlice";

function Watches() {
  const [shuffledCardData, setShuffledCardData] = useState([])

  const dispatch = useDispatch();
  const onAddToCart = (label, price) => {
    dispatch(increment());
    dispatch(AddItem({ label, price }));
  };

  const shuffleArray = (array)=>{
    return array
    .map(value => ({value, sort:Math.random()}))
    .sort((a,b)=> a.sort - b.sort)
    .map(({value})=> value)
  }

  useEffect(() => {
    setShuffledCardData(shuffleArray(watchesData));
  }, [])

  return (
    <div className="mt-14  ">
      <div className=" bg-pink-800 flex items-center justify-center rounded-t-xl">
        <h1 className="p-4 text-white text-xl font-sans shadow-xl shadow-pink-200">
          Best From Market Shop Now
        </h1>
      </div>
      <div className="bg-gray-300  h-full pt-2">
        <div className="rounded-xl grid grid-cols-4 justify-center items-center gap-3">
          {shuffledCardData.map((item)=>(
            <div className="bg-orange-400 rounded-lg flex items-center justify-center flex-col">
            <div className="flex flex-col rounded-xl p-1 ">
              <img
                src={item.image}
                alt=""
                className="h-72 w-72 rounded-xl border-2 border-gray-500"
              />

              <label htmlFor="" className="p-3 text-lg text-gray-700 font-bold">
                Upto 50% Discount
              </label>
              <div>
                <p className="font-bold text-lg">{item.label}</p>
                <p className="w-full text-center text-lg font-bold p-2 bg-white rounded-lg">
                  {item.price}
                </p>
                <button
                  className="p-2  bg-pink-800 w-full text-lg text-white rounded-md hover:bg-pink-600"
                  onClick={() => onAddToCart(item.label, item.price)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          ))}

          
        </div>
      </div>
    </div>
  );
}

export default Watches;
