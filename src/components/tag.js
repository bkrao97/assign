import React from "react";

function Tag(props) {
  return (
    <div className="flex justify-center items-center bg-white m-8 h-36 w-60  rounded-lg ">
      <div>
        <img src={props.image} className="w-18 h-20 "></img>
      </div>
      <div className="flex flex-col justify-center items-start ml-4">
        <h4 className="text-sm">{props.tag}</h4>
        <h1 className="text-xl font-bold">{props.amount}</h1>
        <div className="flex justify-start items-center">
          <img src={props.change} className="w-3 h-3"/>
          <h4 className="text-xs">{`${props.changePercent} % this month`}</h4>
        </div>
      </div>
    </div>
  );
}

export default Tag;
