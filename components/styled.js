import styled from "styled-components";

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
        width:375px;
    }
`;

export {BodyWrapper,CenterWrapper};