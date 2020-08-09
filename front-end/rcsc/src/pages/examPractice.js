import React from "react";
import { withRouter } from "react-router-dom";
import "../style-sheet/exam-practice.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import ReadExamPracticeMath from "../components/readExamPracticeMath";
import ReadExamPracticeEnglish from "../components/readExamPracticeEnglish";
import MathExamPracticeResult from "../components/MathExamPracticeResult";
import EnglishExamPracticeResult from "../components/EnglishExamPracticeResult";
import $ from "jquery";

class ExamPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
    };
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleTable = this.handleTable.bind(this);
    this.closeTable = this.closeTable.bind(this);
    this.showReview = this.showReview.bind(this);
    this.changeShowResult = this.changeShowResult.bind(this);
  }

  
  closeTable = () => () => {
    console.log("-------->");
    //$("review-confirmation").removeClass("table-active");
    $(".review-confirmation").css("display", "none");
    $(".exam-question-display").css("opacity", 1);
  };
  showReview = () => () => {
    $(".review-confirmation").css("display", "block");
    $(".exam-question-display").css("opacity", 0.1);
  };

  handleDisplay = (subject_name) => () => {
    // This highlights the border-bottom and the color of the text.
    $(".tabs").removeClass("active");
    $(".tab-header #" + subject_name).addClass("active");

    $(".subjects-parent .subject").removeClass("subject-active");
    $(".subjects-parent #" + subject_name).addClass("subject-active");
  };

  handleTable = (subject_name) => () => {
    //console.log(id_name);
    // This highlights the border-bottom and the color of the text.
    $(".table-tabs").removeClass("active");
    $(".table-tab-header #" + subject_name).addClass("active");

    $(".table-subjects-parent .table-subject").removeClass("table-subject-active");
    $(".table-subjects-parent #" + subject_name).addClass("table-subject-active");
  };

  changeShowResult = () => () => {
    this.setState({ showResult: true });
  };

  render() {
    return (
      <React.Fragment>
        {<GeneralNavbar />}
        <Container>
          <br />
          <Row>
            <h3> Practice Exam </h3>
            <hr />
          </Row>
          <br />
          {/* --------------------------------------------------------------------------------------------- */}
          <Container className={"review-confirmation"}>
            <Row>
              <Col md={"6"}>
                <h6> &nbsp; Review </h6>
              </Col>
              <Col md={"6"} className={"close-parent"}>
                <Button className={"close-tab"} onClick={this.closeTable()}>
                  Close X
                </Button>
              </Col>
              <hr />
            </Row>
            <Row className={"table-tab-header"}>
              <Col md={1} id={"table-math"} className={"table-tabs active"}>
                <button onClick={this.handleTable("table-math")}>Math</button>
              </Col>
              <Col md={1} id={"table-english"} className={"table-tabs"}>
                <button onClick={this.handleTable("table-english")}>English</button>
              </Col>
              <Col md={1} id={"table-dzongkha"} className={"table-tabs"}>
                <button onClick={this.handleTable("table-dzongkha")}>Dzongkha</button>
              </Col>
              <Col md={2} id={"table-data"} className={"table-tabs"}>
                <button onClick={this.handleTable("table-data")}>Data Interpretation</button>
              </Col>
            </Row>
            <br /> <br />
            <Row className={"table-subjects-parent"}>
              <Col md={12}>
                <div id={"table-math"} className={"table-subject table-subject-active"}>
                  <MathExamPracticeResult />
                </div>
              </Col>
              <Col md={12}>
                <div id={"table-english"} className={"table-subject"}>
                  <EnglishExamPracticeResult />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={"3"}>
                <span> Are you usure you want to submit? </span>
              </Col>
              <Col md={"2"} className={"parent-table-submit-exam"}>
                <Button variant='danger' className={"table-submit-exam"} onClick={this.changeShowResult()}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
          {/* --------------------------------------------------------------------------------------------- */}
          <Container className={"exam-question-display"}>
            <Row className={"tab-header"}>
              <Col md={2} id={"math"} className={"tabs active"}>
                <button onClick={this.handleDisplay("math")}>Math</button>
              </Col>
              <Col md={2} id={"english"} className={"tabs"}>
                <button onClick={this.handleDisplay("english")}>English</button>
              </Col>
              <Col md={2} id={"dzongkha"} className={"tabs"}>
                <button onClick={this.handleDisplay("dzongkha")}>Dzongkha</button>
              </Col>
              <Col md={3} id={"data"} className={"tabs"}>
                <button onClick={this.handleDisplay("data")}>Data Interpretation</button>
              </Col>
              <Col md={2}>
                <Button variant='success' className={"submit-exam"} onClick={this.showReview()}>
                  Submit
                </Button>
              </Col>
            </Row>
            <br /> <br />
            <Row className={"subjects-parent"}>
              <div id={"math"} className={"subject subject-active"}>
                <ReadExamPracticeMath showResult={this.state.showResult} />
              </div>
              <div id={"english"} className={"subject"}>
                <ReadExamPracticeEnglish showResult={this.state.showResult} />
              </div>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ExamPractice);
