// @ts-nocheck
import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap";
import classnames from "classnames";
import Religious from "./Religious";
import Society from "./Society";
import Enterprise from "./Enterprise";
import Party from "./Party";
import Sport from "./Sport.js";
import Politics from "./Politics.js";
import '../styles/event_pills.css'

const EventPills = () => {
  const [isloading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setIsLoading(!isloading);
    }
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Entreprise
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Societe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Religieux
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            Divertissement
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Sport
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            Politique
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="mt-4 pills-col">
            <Enterprise start={isloading} />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mt-4 pills-col">
            <Society start={isloading} />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="mt-4 pills-col">
            <Religious start={isloading} />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row className="mt-4 pills-col">
            <Party start={isloading} />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row className="mt-4 pills-col">
            <Sport start={isloading} />
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row className="mt-4 pills-col">
            <Politics start={isloading} />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default EventPills;
