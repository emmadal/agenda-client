import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import EventPills from './EventPills'
import EventInput from './EventInput'

export default function HomeEvent() {
    const [modal, setModal] = useState(false)
    const toogle = () => setModal(!modal);
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="mt-2">
          <h1 className="h1-responsive text-center font-weight-bold">
            {" "}
            AGENDA COMMUNITY
          </h1>
          <hr className="hr-light" />
        </MDBCol>
      </MDBRow>

      <MDBRow className="my-3">
        <MDBBtn
          onClick={() => setModal(!modal)}
        >
          Ajouter un evenement <i className="fa fa-plus"></i>
        </MDBBtn>
        <EventInput state={modal} start={toogle} />
      </MDBRow>

      <MDBRow className="my-3">
        <MDBCol sm="12" className="my-3">
          <h3 className="h3-responsive text-center font-weight-bold">
            {" "}
            LISTE DES EVENEMENTS PAR CATEGORIES
          </h3>
          <hr className="hr-light" />
        </MDBCol>
      </MDBRow>
      <EventPills/>
    </MDBContainer>
  );
}