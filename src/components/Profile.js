import React from "react";

export default function Profile({ dataset, setData }) {
  return (
    <div className="profileContainer">
      {dataset.map((item) => {
        const {img, name, age} = item
       return <div className="each-Container">
          <div className="imgContainer">
            <img src={img} alt="pix" />
          </div>
          <div>
            <p>{name}</p>
            <p  style={{fontSize:"12px", marginTop:"4px", color:"grey"}}>{age}</p>
          </div>
        </div>;
      })}

     <div className="btn-container">
        <button className="btn-Clear" onClick={()=>setData([])} >Clear all</button>
        </div>
    
    </div>
  );
}
