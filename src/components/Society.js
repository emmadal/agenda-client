// @ts-nocheck
import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { EVENT_SOCIETY_QUERY } from "../api/query";
import { DEL_SOCIETY_EVENT } from "../api/mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalImage from "react-modal-image";
import colors from "../container";

import {
  faUndoAlt,
  faEdit,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import MoonLoader from "react-spinners/MoonLoader";
import "../styles/religious.css";

export default function Society(props) {
  const [eventcolor, setEventColor] = useState(colors.white);

  const { loading, error, data, refetch } = useQuery(EVENT_SOCIETY_QUERY, {
    pollInterval: 200
  });
  const [delEventSociety] = useMutation(DEL_SOCIETY_EVENT);
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

  const deleteEvent = args => {
    delEventSociety({
      variables: { id: args },
      update: refetch
    });
  };

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
          {data.eventSociety.map(m => (
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
                    <MDBBtn color="success" size="sm" title="Modifier">
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
                  <h5 className="h5-responsive mt-1 ont-weight-bold text-center center">
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
    </MDBContainer>
  );
}
