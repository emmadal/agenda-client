// @ts-nocheck
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { EVENT_RELIGIOUS_QUERY } from "../api/query";
import { DEL_RELIGIOUS_EVENT } from "../api/mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../container";
import ModalImage from "react-modal-image";
import {
  faUndoAlt,
  faEdit,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import MoonLoader from "react-spinners/MoonLoader";
import "../styles/religious.css";

export default function Religious(props) {
  const [eventcolor, setEventColor] = useState(colors.white);
  const[isOnline, setOnline] = useState('')
  const[isOffline, setOffline] = useState('')
  const[nostart, setNoStart] = useState('')
  const { loading, error, data, refetch } = useQuery(EVENT_RELIGIOUS_QUERY, {
    pollInterval: 200
  });
  const [delEventReligious] = useMutation(DEL_RELIGIOUS_EVENT);

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

  const deleteEvent = args => {
    delEventReligious({
      variables: { id: args },
      update: refetch
    });
  };

  const getTimeUntil = args => {
    setInterval(() => computeDate(args), 1000);
  };

  const computeDate = args => {
    const deadline = new Date(args).toLocaleDateString();
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="card-col">
          {data.eventReligious.map(m => (
            <div className="items-card m-2" key={m.id}>
              {getTimeUntil(m.date)}
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
                      title="supprimer"
                      onClick={() => deleteEvent(m.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </MDBBtn>
                  </section>
                </MDBCol>

                <MDBCol sm="8">
                  <h5 className="h5-responsive m-2 font-weight-bold text-center">
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
                  </section>
                  <span className="">
                    Infoline: <i>{m.infoline}</i>
                  </span>
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
