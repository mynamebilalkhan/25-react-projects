import { Button, Container, Form } from "react-bootstrap";
import "./GithubProfileFinder.css";
import { useEffect, useState } from "react";
import GithubUserProfile from "./GithubUserProfile";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("mynamebilalkhan");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  useEffect(() => {
    const fetchGithubUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if (data) {
          console.log(data);
          setUserData(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchGithubUser();
  }, []);

  if (loading) {
    return (
      <div className="wrapper">
        <Container>
          <h1>Loading...</h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Container>
        {userData && <GithubUserProfile user={userData} />}
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Find Github Profile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by username..."
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button type="submit" className="mt-2" onClick={handleSubmit}>
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default GithubProfileFinder;
