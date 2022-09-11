import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    height: 7vh;
    background-color: coral;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    justify-items: center;
    text-align: center;
    justify-content: space-around;
    margin: 1rem;

    .snsGoogle {
        margin-top: 2.2vh;
    }
`;

function GoogleLoginButton(){
    return(
        <Wrapper>
            <div className="GoogleImage">
                구글 이미지
            </div>
            <div className="snsGoogle">
                Google 로그인
            </div>
        </Wrapper>
    );
}

export default GoogleLoginButton;