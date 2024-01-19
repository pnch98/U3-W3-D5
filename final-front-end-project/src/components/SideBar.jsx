import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  ListGroup,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setResults } from "../redux/reducers/resultsReducer";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useSelector((state) => state.results.results);

  const handleSearch = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(setResults(data.data));
        navigate("/results");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Col className="col col-2">
      <Navbar expand="lg" className="fixed-left justify-content-between align-items-center" id="sidebar">
        <Container className="container flex-column align-items-start">
          <NavbarBrand>
            <Link to="/">
              <img src="/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
            </Link>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="me-auto">
              <ListGroup>
                <Nav.Link href="#home">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
                <Nav.Link href="#link">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
                <Nav.Link className="mt-3">
                  <Form className="d-flex">
                    <FormControl placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} />
                    <Button
                      variant="transparent"
                      className="btn btn-outline-secondary btn-sm"
                      type="submit"
                      onClick={() => handleSearch()}
                    >
                      Go
                    </Button>
                  </Form>
                </Nav.Link>
              </ListGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn d-flex flex-column">
          <Button className="btn signup-btn">Sign Up</Button>
          <Button className="btn login-btn">Login</Button>
          <div>
            <Link>Cookie Policy</Link> |<Link> Privacy</Link>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};
export default SideBar;
