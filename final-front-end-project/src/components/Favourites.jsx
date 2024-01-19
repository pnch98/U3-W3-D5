import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { playSong } from "../redux/reducers/playerSongReducer";
import { removeSong } from "../redux/reducers/likedSongsReducer";

const Favourites = () => {
  const likedSongs = useSelector((state) => state.likedSongs.likedSongs);
  const dispatch = useDispatch();

  return (
    <Col xs={12} md={9} className="col-12 col-md-9 offset-md-2 mainPage text-white mt-3">
      <h2 className="mb-5">Favourite songs</h2>
      <Container>
        <Row>
          {likedSongs.map((song) => (
            <Col xs={10} key={song.id}>
              <div className="border border-1 border-light rounded d-flex justify-content-between">
                <div className="d-flex">
                  <div
                    style={{ width: "60px", height: "auto" }}
                    className="p-1 me-3 hover"
                    onClick={() => dispatch(playSong(song))}
                  >
                    <img src={song.album.cover_small} alt="cover" className="w-100" />
                  </div>
                  <div>
                    <Link className="mb-0 undecored" onClick={() => dispatch(playSong(song))}>
                      {song.title}
                    </Link>
                    <p className="mb-0">{song.artist.name}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center me-3">
                  <Button variant="transparent" className="text-white" onClick={() => dispatch(removeSong(song))}>
                    <i className="bi bi-heart-fill"></i>
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Col>
  );
};
export default Favourites;
