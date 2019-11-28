import React, { useState } from 'react';

function AddBtn() {
  const [num, setNum] = useState(3);
  return (
    <div>
      <p>number is {num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        add one
      </button>
      <br></br>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        minus one
      </button>
    </div>
  );
}

export default AddBtn;
