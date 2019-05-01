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
          Water Test Kit
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
      <div align="center" style={{ padding: 32, marginRight: "10%", marginLeft: "10%" }}>
        <div
          style={{
            fontWeight: 900,
            fontSize: 48
          }}
        >
          The Project
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 32,
            lineHeight: "250%"
          }}
        >
          This lead testing kit was created by a team of students at Olin College as a course final project. The course, Paper Panacea pt.1, is an experimental class led by co-learner Linda Vanasupa with the purpose of advancing the technology of paper microfluidic detection platforms in order to advance our ability to detect environmental toxins. The goal of our project was to create a citizen science kit that enabled middle and high school students to learn about lead pollution through a fun and interactive medium, while contributing to a larger crowdsourced dataset.
        </div>

        <div
          style={{
            fontWeight: 900,
            fontSize: 48,
            padding:32
          }}
        >
          About Paper Microfluidics
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          What are Paper Microfluidics?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          Paper microfluidics are devices that are made with paper and wax and use wells and chemicals in order to test for various chemicals and reactions on a small scale that is very cheap. Similar well known technologies are pH testing strips for your pool or pregnancy tests.
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          Why is This Interesting?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          This is interesting because of the potential availability of these tests, it is cheap to produce and ship which makes it available to all kinds of people. 
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          How Can I Learn More?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          Although Wikipedia is not always the most reliable source this is a location where a lot of information has been compiled as well as a lot of sources at the bottom of this page.
          <ul><li><a href="https://en.wikipedia.org/wiki/Paper-based_microfluidics">Wikipedia article</a> on paper-based microfluidics.</li></ul>
          <p>For more technical reading see:</p>
          <ul>
            <li><a href="https://www.sciencedirect.com/science/article/pii/S0039914016302569?via%3Dihub">Paper-based analytical device for sampling, on-site preconcentration and detection of ppb lead in water</a></li>
            <li><a href="https://pdfs.semanticscholar.org/a44e/f7e3f4b8cde33e21f064bd6b669a4ccd520d.pdf">Advances in Microfluidic Paper-Based AnalyticalDevices for Food and Water Analysis</a></li>
            <li><a href="https://www.sciencedirect.com/science/article/pii/S0039914017309013?via%3Dihub">Developments of microfluidic paper-based analytical devices (μPADs) for water analysis: A review</a></li>
          </ul>
        </div>

        <div
          style={{
            fontWeight: 900,
            fontSize: 48,
            padding:32
          }}
        >
          Citizen Science
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          What is Citizen Science?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          Citizen science is a collection and analysis of data collected by members of the general public. This is a way to collect data on a large scale as a part of a large collaborative project.

        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          Why is it Important?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          Citizen science enables all members of the community to participate in data collection and understanding. This allows for data to be collected on a large scale and for science to serve regular people in everyday lives rather than be performed in a lab. 

          <p>
          This also allows members of the community to be educated about science and learn more about complicated technologies and concepts through real life activities. This can also lead to more awareness of everything from water content to climate change. 
          </p>
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          Where can I learn more?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          View more projects and learn about the community <a href="https://www.citizenscience.gov/#">here</a>.
        </div>

        <div
          style={{
            fontWeight: 900,
            fontSize: 48,
            padding:32
          }}
        >
          About the Team
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          Who Are We?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          We are a team of students currently studying at Olin College of Engineering as a course final project. The course, Paper Panacea pt.1, is an experimental class led by co-learner Linda Vanasupa in the Spring of 2019. 
        </div>

        <div
          style={{
            fontWeight: 500,
            fontSize: 36,
            padding: 5
          }}
        >
          Why Are We Doing This?
        </div>
        <div align= "left"
          style={{
            fontWeight: 300,
            fontSize: 24,
            padding: 5,
            lineHeight: "250%"
          }}
        >
          Our goal was to explore and advance the field of paper microfluidic devices.
        </div>
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
