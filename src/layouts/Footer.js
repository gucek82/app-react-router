import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={props => {
          console.log(props);
          return (
            <p>
              Jesteś <span>na stronie głównej</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page"
        exact
        render={props => {
          return (
            <>
              <p>
                Jesteś <span>{props.match.params.page}</span>
              </p>
              <p>
                Jesteś <span>{props.match.url}</span>
              </p>
              <p>
                Jesteś <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          return (
            <>
              <p>
                Jesteś <span>{props.match.params.idProduct}</span>
              </p>
              <p>
                Jesteś <span>{props.match.url}</span>
              </p>
              <p>
                Jesteś <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
