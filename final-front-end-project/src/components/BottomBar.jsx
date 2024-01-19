import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { ImShuffle } from "react-icons/im";
import { LuRepeat } from "react-icons/lu";

const BottomBar = () => {
  return (
    <Container className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <Link>
                  <img src="./assets/playerbuttons/shuffle.png" alt="" />
                </Link>
                <Link>
                  <img src="./assets/playerbuttons/prev.png" alt="" />
                </Link>
                <Link>
                  <img src="./assets/playerbuttons/play.png" alt="" />
                </Link>
                <Link>
                  <img src="./assets/playerbuttons/next.png" alt="" />
                </Link>
                <Link>
                  <img src="./assets/playerbuttons/repeat.png" alt="" />
                </Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BottomBar;
