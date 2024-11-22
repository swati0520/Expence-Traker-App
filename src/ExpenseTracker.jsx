import React, { useRef, useState } from "react";

const ExpenseTracker = () => {
  let snoref = useRef();
  let priceref = useRef();
  let placeref = useRef();

  const [arr, setarr] = useState([
    {
      id: 1,
      place: "Lucknow",
      price: 500,
    },
    {
      id: 2,
      place: "Movie",
      price: 1500,
    },
    {
      id: 3,
      place: "Shopping",
      price: 5000,
    },
  ]);

  let handelSubmit = (e) => {
    e.preventDefault();
    let newobj = {
      ...arr,
      id: snoref.current.value,
      place: priceref.current.value,
      price: placeref.current.value,
    };
    console.log(newobj);
    setarr([...arr, newobj]);
  };
  let del = (id) => {
    setarr(arr.filter((ele) => ele.id !== id));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "skyblue" }}>
        This is Expense Tracker App
      </h1>
      <form action="" style={{display:"flex",gap:"10px" ,justifyContent:"center"}}>
        <input style={{padding:"5px"}} ref={snoref} type="number" placeholder="serial no" />
        <input  style={{padding:"5px"}} ref={priceref} type="text" placeholder="enter the place" />
        <input  style={{padding:"5px"}}ref={placeref} type="number" placeholder="enter the price" />
        <button  style={{padding:"5px",backgroundColor:"green",color:"white" ,outline:"none",border:"none",borderRadius:"5px"}} onClick={handelSubmit}>Submit</button>
      </form>
      <table border={1} className="table" style={{width:"50%",margin:"auto",textAlign:"center",marginTop:"10px"}}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Place</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{ele.place}</td>
                <td>{ele.price}</td>
                <td>
                  <button onClick={() => del(ele.id)} style={{backgroundColor:"red" ,border:"none",outline:"none", borderRadius:"5px",padding:"4px"}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ExpenseTracker;
