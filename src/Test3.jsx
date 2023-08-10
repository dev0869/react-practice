import React from "react";
import { Button } from "reactstrap";

function Test3({ toggle }) {
  return (
    <Button color="danger" onClick={toggle}>
      Click Me
    </Button>
  );
}

export default Test3;
