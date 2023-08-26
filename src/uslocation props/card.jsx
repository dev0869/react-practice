import React from "react";

import { Link } from "react-router-dom";

const Mycard = ({ data, load }) => {
  return (
    <div className="mycard md:m-[3px] m-[0px]">
      <Link to={`products/${e._id}`} state={e}>
        <div className="imgcontainer">
          <img src={e.images[0]} alt="" width={140} height={140} />
        </div>
      </Link>
    </div>
  );
};

export default Mycard;

// then go to next page product details
