import React from "react";
import Popup from "reactjs-popup";
import { MDBBadge } from 'mdbreact'
import '../styles/toolip.css'


const Card = ({ info }) => (
    <div className="card">
        <div className="header">Description</div>
        <div className="content">
            <p>{info}</p>
        </div>
    </div>
);
const Toolip = ({ info }) => (
    <div className="example-warper">
        <Popup
            trigger={<button>Description</button>}
            position="right bottom"
            on="hover"
        >
            <Card info={info} />
        </Popup>
    </div>
);

export default Toolip