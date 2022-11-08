import React, {useState} from "react";
import OwlImage from "./Images/owl-face-11.webp";
import {
  Wrapper,
  Row,
  Header,
  Image,
  Form,
  Search,
  Button,
} from "./components/styled/index";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {

  } 

  return (
    <div className="App">
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={OwlImage} alt="Owl image" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search
            type="text"
            placeholder="Search.." 
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </div>
  );
}

export default App;
