/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setFirstSection, setSecondSection, setThirdSection } from "../redux/reducers/sectionReducer";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import Album_Card from "./Album_Card";

const HomePage = () => {
  const dispatch = useDispatch();
  const firstSection = useSelector((state) => state.section.firstSection);
  const secondSection = useSelector((state) => state.section.secondSection);
  const thirdSection = useSelector((state) => state.section.thirdSection);
  const results = useSelector((state) => state.results.results);

  const handleSection = async (artistName) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        let { data } = await response.json();
        data.length = 4;
        switch (artistName) {
          case "radiohead":
            dispatch(setFirstSection(data));
            break;
          case "placebo":
            dispatch(setSecondSection(data));
            break;
          case "moderat":
            dispatch(setThirdSection(data));
            break;
          default:
            console.log("nothing to dispatch");
            break;
        }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleSection("radiohead");
    handleSection("placebo");
    handleSection("moderat");
  }, []);

  return (
    <Col xs={12} md={9} className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Link>TRENDING</Link>
          <Link>PODCAST</Link>
          <Link>MOODS AND GENRES</Link>
          <Link>NEW RELEASES</Link>
          <Link>DISCOVER</Link>
        </div>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="searchResults" className="d-none">
            <h2>Search Results</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
              {firstSection.length > 0 && firstSection.map((song) => <AlbumCard key={song.id} songInfo={song} />)}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
              {secondSection.length > 0 && secondSection.map((song) => <AlbumCard key={song.id} songInfo={song} />)}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
              {thirdSection.length > 0 && thirdSection.map((song) => <AlbumCard key={song.id} songInfo={song} />)}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default HomePage;
