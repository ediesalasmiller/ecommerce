import { Badge } from "@material-ui/core";
import { Whatshot } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: #734f96;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const Announcement = () => {
  return (
    <Container>
      hot deal
      <Badge>
        <Whatshot />
      </Badge>
      free shipping over $50
    </Container>
  );
};
