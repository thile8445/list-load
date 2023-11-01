import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import InfiniteList from "./InfiniteList";
import "./styles.css";

const ListContainer = styled.div`
  max-height: ${props => (props.scrollable ? "600px" : "auto")};
  max-width: ${props => (props.scrollable ? "600px" : "auto")};
  overflow: auto;
  background-color: #e4e4e4;
`;

function App() {
  const [scrollParent, setScrollParent] = React.useState(false);

  function handleChange(e) {
    const checked = e.target.checked;
    setScrollParent(checked);
  }

  return (
    <React.Fragment>
      <h1>Infinite List</h1>
      <h3>Created by using “react-infinite-scroll-hook”</h3>
      <input type="checkbox" checked={scrollParent} onChange={handleChange} />
      Scrollable Parent
      <ListContainer scrollable={scrollParent}>
        <InfiniteList scrollContainer={scrollParent ? "parent" : "window"} />
      </ListContainer>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
