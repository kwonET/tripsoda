import { CtgrItm } from "./items/CtgrItem";
import styled from "styled-components";
import { categoryDummyDate } from "../util/dummy.js";

export const CtgrList = () => {
  // const itemTexts = ["normal", "usual", "unusal"];
  // const items = itemTexts.map((text) => {
  //     return <CtgrItm text={text}/>
  // });
  // const items = [<CtgrItm text={normal}/>, <CtgrItm text={usual}/>, <CtgrItm text={unusal}/>];

  const items = [categoryDummyDate,categoryDummyDate,categoryDummyDate];
  return (
    <CtgrListWrapper>
      {items.map((categoryDummyDate) => {
        return <CtgrItm categoryDummyDate={categoryDummyDate} />;
      })}
    </CtgrListWrapper>
  );
};

const CtgrListWrapper = styled.div`
  /* Auto layout */
  /* Auto layout */
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;
