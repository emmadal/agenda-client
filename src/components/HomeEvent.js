import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import EventPills from './EventPills'
import EventInput from './EventInput'

export default function HomeEvent(props) {
    const [modal, setModal] = useState(false)
    const toogle = () => setModal(!modal);
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="10" className="mt-2">
          <h1 className="h1-responsive text-center center font-weight-bold">
            {" "}
            EventApp
          </h1>
        </MDBCol>
        <MDBCol sm="2" className="mt-3">
          <MDBBtn size="sm" rounded gradient="blue" title="Se deconnecter" onClick={() => props.logout()}>
            <FontAwesomeIcon icon={faPowerOff} />
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr className="hr-light" />

      <MDBRow className="my-3">
        <MDBBtn onClick={() => setModal(!modal)}>
          Ajouter un evenement <i className="fa fa-plus"></i>
        </MDBBtn>
        <EventInput state={modal} start={toogle} />
      </MDBRow>

      <MDBRow className="my-3">
        <MDBCol sm="12" className="my-3">
          <h3 className="h3-responsive text-center font-weight-bold">
            {" "}
            LISTE DES EVENEMENTS PAR CATEGORIE
          </h3>
          <hr className="hr-light" />
        </MDBCol>
      </MDBRow>
      <EventPills />
    </MDBContainer>
  );
}