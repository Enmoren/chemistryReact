import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import TopActionCreators from "../actions/TopActionCreators";
import { Redirect } from 'react-router-dom'


const TopContent = ({ title, subtitle, text }) => {
  const handleClick = () => {
    TopActionCreators.actionCreator001();
  };

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/start.jpg)",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 32
        }}
      >
        <div
          className="hero-title"
          style={{
            fontWeight: 900,
            fontSize: 72,
            color: "white",
          }}
        >
          Paper Panacea
        </div>
        <div
        className="hero-subtitle"
          style={{
            fontWeight: 300,
            fontSize: 40,
            color: "white",
          }}
        >
          Superfast React development tool
        </div>
        <div style={{padding: 32}}>
        <a class="btn btn-link" href="/sample">
          <Button
            variant="contained"
            style={{decoration: "none", backgroundColor: "transparent", border:  "1.5px solid #FFF", color: "white", fontSize: "20px"}}
            size="large"
            // onClick="window.location.href = '/sample';"
            align="center"
          >
            Start Here
          </Button>
          </a>
          </div>
      </div>
      <div align="center" style={{ padding: 32 }}>
        <div
          style={{
            fontWeight: 900,
            fontSize: 48
          }}
        >
          {title}
        </div>
        <div align="center"
          style={{
            fontWeight: 300,
            fontSize: 24
          }}
        >
          {subtitle}
        </div>
        <div align="center" style={{ fontFamily: "Merriweather", padding: "40px 0" }}>
          {text}
        </div>
        <a class="btn btn-default" href="/sample">
          <Button
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            size="large"
            // onClick="window.location.href = '/sample';"
            align="center"
          >
            Start Here
          </Button>
          </a>
      </div>
    </div>
  );
};

TopContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TopContent;
