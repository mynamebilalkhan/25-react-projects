import { useEffect, useState } from "react";
import "./SearchAutoComplete.css";
import { Form, Button, Container } from "react-bootstrap";
import Suggestions from "./Suggestions";
const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterdUsers, setFilterdUsers] = useState([]);

  const fetchUserList = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users?limit=100");
      const data = await res.json();
      if (data && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterdUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (e) => {
    console.log(e.target.innerText);
    setSearchParam(e.target.innerText);
    setShowDropdown(false);
    setFilterdUsers([]);
  };

  console.log(users, filterdUsers);

  if (loading) {
    return (
      <div className="wrapper">
        <Container className="text-center">
          <h1>Loading</h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Search Users</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search users..."
              value={searchParam}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        {showDropdown && (
          <Suggestions
            onSuggestionClick={handleSuggestionClick}
            data={filterdUsers}
          />
        )}
      </Container>
    </div>
  );
};

export default SearchAutoComplete;
