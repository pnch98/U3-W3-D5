import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const song = useSelector((state) => state.playSong.playerSong);
  return (
    <Col className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 justify-content-center align-items-center">
            {song && (
              <Col className="position-fixed customStart">
                <div className="d-flex text-white">
                  <div style={{ width: "60px", height: "auto" }} className="p-1 me-3">
                    <img src={song.album.cover_small} alt="cover" className="w-100" />
                  </div>
                  <div>
                    <small className="mb-0 hover">{song.title}</small>
                    <p className="mb-0">{song.artist.name}</p>
                  </div>
                </div>
              </Col>
            )}
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
    </Col>
  );
};
export default BottomBar;
