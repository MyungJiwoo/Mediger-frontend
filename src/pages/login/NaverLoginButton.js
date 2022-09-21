import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #00c332;
  width: 65vw;
  height: 7vh;
  padding: 0 2.5vw;
  border-radius: 0.8rem;
  color: white;
  font-size: 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .NaverImage {
    height: 4vh;
  }

  .Img {
    width: 4vh;
    height: 4vh;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function NaverLoginButton() {
  return (
    <StyledLink to={`/pages/Home`}>
      <Wrapper>
        <div className="NaverImage">
          <img
            src="http://static.nid.naver.com/oauth/button_w.PNG"
            className="Img"
          ></img>
        </div>

        <div className="snsNaver">Naver로 시작하기</div>
      </Wrapper>
    </StyledLink>
  );
}

export default NaverLoginButton;

// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Wrapper = styled.div`
//   width: 80%;
//   height: 7vh;
//   background-color: #00c332;
//   border-radius: 0.8rem;
//   display: flex;
//   flex-direction: row;
//   color: white;
//   font-size: 1rem;
//   font-weight: bold;
//   justify-items: center;
//   text-align: center;
//   justify-content: space-around;
//   margin: 1rem;

//   .snsNaver {
//     margin-top: 2.2vh;
//   }
// `;

// function NaverLoginButton() {
//   return (
//     <Wrapper>
//       <div className="NaverImage">네이버 이미지</div>
//       <div className="snsNaver">Naver 로그인</div>
//     </Wrapper>
//   );
// }

// export default NaverLoginButton;
