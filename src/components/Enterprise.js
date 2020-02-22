// @ts-nocheck
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { EVENT_ENTERPRISE_QUERY } from "../api/query";
import { DEL_ENTERPRISE_EVENT, UP_ENTERPRISE_EVENT } from "../api/mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalImage from "react-modal-image";
import colors from "../container";
import EventInput from './EventInput'

import {
  faUndoAlt,
  faEdit,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import MoonLoader from "react-spinners/MoonLoader";
import "../styles/religious.css";

export default function Enterprise(props) {
  const [eventcolor, setEventColor] = useState(colors.white);
  const [modal, setModal] = useState(false)
  const toogle = () => setModal(!modal);


  const { loading, error, data, refetch } = useQuery(EVENT_ENTERPRISE_QUERY, {
    pollInterval: 200
  });
  const [delEventEnterprise] = useMutation(DEL_ENTERPRISE_EVENT);
  const [updateEventEnterprise] = useMutation(UP_ENTERPRISE_EVENT);

  const deleteEvent = args => {
    delEventEnterprise({
      variables: { id: args },
      update: refetch
    });
  };

  const updateEvent = (id, args) => {
    // updateEventEnterprise({
    //   variables: {
    //     id: id,
    //     input: { ...args }
    //   },
    //   update: refetch
    // });
  };

  if (loading) {
    return (
      <div className="loader-div">
        <p className="text-center mx-3 center font-weight-bold mt-2">
          Chargement...
        </p>
        <MoonLoader size={80} color={"#ffffff"} loading={props.start} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-div">
        <p className="text-center font-weight-bold">
          {" "}
          {`Impossible de recuperer les donnees. Veuillez verifier votre connexion internet.`}
        </p>
        <MDBBtn color={"danger"} onClick={() => refetch()}>
          <FontAwesomeIcon icon={faUndoAlt} />
        </MDBBtn>
      </div>
    );
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="card-col">
          {data.eventEnterprise.map(m => (
            <div className="items-card m-2" key={m.id}>
              <MDBRow>
                <MDBCol sm="4" className="items-img">
                  <ModalImage
                    small={m.cover.filename}
                    large={m.cover.filename}
                    className="circular mt-2"
                    alt={m.title}
                    hideDownload={true}
                    showRotate={true}
                  />
                  <section className="items-icon">
                    <MDBBtn
                      color="success"
                      size="sm"
                      onClick={() => updateEvent()}
                      title="Modifier"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </MDBBtn>
                    <MDBBtn
                      color="danger"
                      size="sm"
                      onClick={() => deleteEvent(m.id)}
                      title="supprimer"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </MDBBtn>
                  </section>
                </MDBCol>

                <MDBCol sm="8">
                  <h5 className="h5-responsive mt-1 font-weight-bold text-center center">
                    {m.title}
                  </h5>
                  <hr className="hr-light" />
                  <section className="items-details">
                    <span className="">
                      Lieu: <i>{m.place}</i>
                    </span>
                    <span className="">
                      Date: <i>{m.date}</i>
                    </span>
                    <span className="">
                      Heure: <i>{m.hour}</i>
                    </span>
                    <span className="">
                      Infoline: <i>{m.infoline}</i>
                    </span>
                  </section>
                </MDBCol>
              </MDBRow>
              <div
                className="card-sign"
                style={{ backgroundColor: `${eventcolor}` }}
              ></div>
            </div>
          ))}
        </MDBCol>
      </MDBRow>
      <EventInput state={modal} start={toogle} />
    </MDBContainer>
  );
}
