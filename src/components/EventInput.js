// @ts-nocheck
import React, { useState } from "react";
import {
  Modal,
  Row,
  Col,
  ModalBody,
  ModalHeader,
  Button,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/react-hooks";
import {
  ADD_RELIGIOUS_EVENT,
  ADD_SOCIETY_EVENT,
  ADD_PARTY_EVENT,
  ADD_ENTERPRISE_EVENT,
  ADD_SPORT_EVENT,
  ADD_POLITIC_EVENT
} from "../api/mutation";
import "../styles/event_input.css";

export default function EventInput(props) {
  const [addEventReligious] = useMutation(ADD_RELIGIOUS_EVENT);
  const [addEventSociety] = useMutation(ADD_SOCIETY_EVENT);
  const [addEventEnterprise] = useMutation(ADD_ENTERPRISE_EVENT);
  const [addEventParty] = useMutation(ADD_PARTY_EVENT);
  const [addEventSport] = useMutation(ADD_SPORT_EVENT);
  const [addEventPolitic] = useMutation(ADD_POLITIC_EVENT);

  const typeCategories = [
    "",
    "Entreprise",
    "Religieux",
    "Divertissement",
    "Societe",
    "Sport",
    "Politique",
  ];
  const [form, setForm] = useState({
    title: "",
    hour: "",
    place: "",
    date: "",
    categories: "",
    cover: ""
  });
  const [formfiles, setFormFiles] = useState({
    file: "",
    imagePreviewUrl: "",
    imageMimeType: ""
  });

  const handleFiles = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFormFiles({
        file: file,
        imagePreviewUrl: reader.result,
        imageMimeType: file.type
      });
    };
    reader.readAsDataURL(file);
  };

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (form.categories.toString().trim() === "Religieux") {
      addEventReligious({
        variables: {
          input: {
            title: form.title.toString().trim(),
            hour: form.hour.toString().trim(),
            place: form.place.toString().trim(),
            date: form.date.toString().trim(),
            categories: form.categories.toString().trim(),
            cover: {
              filename: formfiles.imagePreviewUrl,
              mimetype: formfiles.imageMimeType,
              encoding: "base64"
            }
          }
        }
      });
    } else if (form.categories.toString().trim() === "Societe") {
      addEventSociety({
        variables: {
          input: {
            title: form.title.toString().trim(),
            hour: form.hour.toString().trim(),
            place: form.place.toString().trim(),
            date: form.date.toString().trim(),
            categories: form.categories.toString().trim(),
            cover: {
              filename: formfiles.imagePreviewUrl,
              mimetype: formfiles.imageMimeType,
              encoding: "base64"
            }
          }
        }
      });
    } else if (form.categories.toString().trim() === "Divertissement") {
      addEventParty({
        variables: {
          input: {
            title: form.title.toString().trim(),
            hour: form.hour.toString().trim(),
            place: form.place.toString().trim(),
            date: form.date.toString().trim(),
            categories: form.categories.toString().trim(),
            cover: {
              filename: formfiles.imagePreviewUrl,
              mimetype: formfiles.imageMimeType,
              encoding: "base64"
            }
          }
        }
      });
    } else if (form.categories.toString().trim() === "Entreprise") {
      addEventEnterprise({
        variables: {
          input: {
            title: form.title.toString().trim(),
            hour: form.hour.toString().trim(),
            place: form.place.toString().trim(),
            date: form.date.toString().trim(),
            categories: form.categories.toString().trim(),
            cover: {
              filename: formfiles.imagePreviewUrl,
              mimetype: formfiles.imageMimeType,
              encoding: "base64"
            }
          }
        }
      });
    } else if (form.categories.toString().trim() === "Sport") {
      addEventSport({
        variables: {
          input: {
            title: form.title.toString().trim(),
            hour: form.hour.toString().trim(),
            place: form.place.toString().trim(),
            date: form.date.toString().trim(),
            categories: form.categories.toString().trim(),
            cover: {
              filename: formfiles.imagePreviewUrl,
              mimetype: formfiles.imageMimeType,
              encoding: "base64"
            }
          }
        }
      });
    } else if (form.categories.toString().trim() === "Politique") {
      addEventPolitic({
        variables: {
          input: {
            title: form.title.toString().trim(),
            hour: form.hour.toString().trim(),
            place: form.place.toString().trim(),
            date: form.date.toString().trim(),
            categories: form.categories.toString().trim(),
            cover: {
              filename: formfiles.imagePreviewUrl,
              mimetype: formfiles.imageMimeType,
              encoding: "base64"
            }
          }
        }
      });
    }

    setForm({
      title: "",
      cover: "",
      hour: "",
      place: "",
      date: "",
      categories: ""
    });
  };

  return (
    <Modal isOpen={props.state} toggle={props.start} >
      <ModalHeader
        toggle={props.start}
        className="h5-responsive font-weight-bold"
      >
        {" "}
        Creer un nouvel evenement{" "}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label>Nom de l'evenement</Label>
                <Input
                  title="Nom de l'evenement"
                  type="text"
                  value={form.title}
                  name="title"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Lieu de l'evenement</Label>
                <Input
                  type="text"
                  title="Lieu de l'evenement"
                  value={form.place}
                  name="place"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label>Date de l'evenement</Label>
                <Input
                  type="date"
                  title="Date de l'evenement"
                  value={form.date}
                  name="date"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Heure de l'evenement</Label>
                <Input
                  type="time"
                  title="Heure de l'evenement"
                  value={form.hour}
                  name="hour"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col sm={7}>
              <FormGroup>
                <Label>Image publicitaire</Label>
                <Input
                  type="file"
                  className="file-upload"
                  title="Photo de couverture"
                  onChange={handleFiles}
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                />
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Label> Categorie</Label> <br />
                <Input
                  type="select"
                  value={form.categories}
                  name="categories"
                  onChange={handleInput}
                  required
                >
                  {typeCategories.map((m, key) => (
                    <option key={key}>{m}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <div className="btn-form">
            <Button
              disabled={
                (form.categories &&
                  form.place &&
                  form.date &&
                  form.title &&
                  form.hour && formfiles.imagePreviewUrl) === ""
                  ? true
                  : false
              }
              title="Ajouter"
              color="success"
              type="submit"
            >
              Ajouter <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
            <Button onClick={props.start} color="danger">
              ANNULER <FontAwesomeIcon icon={faMinusCircle} />
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
}
