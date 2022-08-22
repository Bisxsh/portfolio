import React from "react";
import styled from "styled-components";
import MainContent from "../components/MainContent";

const IndexPage = () => {
  return (
    <PageContainer>
      <div className="content">
        <MainContent />
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 10vw 1fr 10vw;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .content {
    grid-area: 1 / 2 / 2 / 3;
  }

  @media only screen and (min-width: 16000px) {
    grid-template-columns: 15vw 1fr 15vw;
  }

  @media only screen and (min-width: 2000px) {
    grid-template-columns: 20vw 1fr 20vw;
  } ;
`;

export default IndexPage;
