import React, { useEffect, useState } from "react";

type Props = {
    userID: number
};

export default function DeleteUser({userID}: Props) {
  return (
    <div style={{height:'100px', width:'300px', margin:'auto'}}>
      <div className="card-body text-center">
        <h5 className="card-title">Are you sure delete {userID} ?</h5>
        <div className="chosenBtn my-3">
            <button 
                className="btn btn-primary mx-2"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    // handleDelete()
                }}
            >Yes</button>
            <button className="btn btn-danger mx-2"  data-bs-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  );
}
