/* eslint-disable react/jsx-pascal-case */
import { useDispatch, useSelector } from "react-redux";
import ArtistCard from "./ArtistCard";
import Album_Card from "./Album_Card";
import { Button, Col, Container, Row } from "react-bootstrap";
import { addSong, removeSong } from "../redux/reducers/likedSongsReducer";

const ResultsPage = () => {
  const results = useSelector((state) => state.results.results);
  const likedSongs = useSelector((state) => state.likedSongs.likedSongs);
  const dispatch = useDispatch();

  return (
    <Col xs={12} md={9} className="col-12 col-md-9 offset-md-2 mainPage text-white mt-3">
      <div className="mb-3">
        <h2>Artists</h2>
        <Row>
          <Col>
            <ArtistCard artist={results[0].artist} />
          </Col>
          <Col>
            <ArtistCard artist={results[1].artist} />
          </Col>
          <Col>
            <ArtistCard artist={results[2].artist} />
          </Col>
        </Row>
      </div>
      <div className="mb-3">
        <h2>Albums</h2>
        <Row>
          <Col>
            <Album_Card album={results[0].album} />
          </Col>
          <Col>
            <Album_Card album={results[1].album} />
          </Col>
          <Col>
            <Album_Card album={results[2].album} />
          </Col>
        </Row>
      </div>
      <Container>
        <Row>
          {results.map((song) => (
            <Col xs={10} key={song.id}>
              <div className="border border-1 border-light rounded d-flex justify-content-between">
                <div className="d-flex">
                  <div style={{ width: "60px", height: "auto" }} className="p-1 me-3">
                    <img src={song.album.cover_small} alt="cover" className="w-100" />
                  </div>
                  <div>
                    <small className="mb-0">{song.title}</small>
                    <p className="mb-0">{song.artist.name}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center me-3">
                  {likedSongs.includes(song.id) ? (
                    <Button variant="transparent" className="text-white" onClick={() => dispatch(addSong(song.id))}>
                      <i className="bi bi-heart-fill"></i>
                    </Button>
                  ) : (
                    <Button variant="transparent" className="text-white" onClick={() => dispatch(removeSong(song.id))}>
                      <i className="bi bi-heart"></i>
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Col>
  );
};
export default ResultsPage;
