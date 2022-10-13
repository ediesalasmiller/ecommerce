import React from "react";
import { sliderItems } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {sliderItems.map((item) => (
        <CategoryItem item={item}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
