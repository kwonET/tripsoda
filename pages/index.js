import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <BodyWrapper>
        <CenterWrapper>
            <LeftWrapper>ctgr</LeftWrapper>
            <RightWrapper>list</RightWrapper>
        </CenterWrapper>
    </BodyWrapper>
  );
};
export default index;

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top:80px;
`;

const CenterWrapper = styled.div`
    /* width:100%; */
    width: 1200px;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;

    //모바일
    @media screen and (max-width: 499px) {
        width:100vw;
    }
    //데스크탑
    @media screen and (max-width: 1199px) {
        justify-content: flex-start;
    }
`;

const LeftWrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 200px;

    //모바일
    @media screen and (max-width: 499px) {
        display: none;
    }
`;
const RightWrapper = styled.div`
    width: 1000px;
`;


