import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 683px;
  height: 50px;
`;

export const Text = styled.div`
  font-size: 30px;
`;

export const Button = styled.button`
  width: 123px;
  height: 44px;
  border-radius: 10px;
  background-color: #7C3AED;
  border: 0px;
  &:hover {
    cursor: pointer;
    background-color: #AC8DCA
  }
`;

export const Span = styled.span`
  color: white;
  font-size: 18px;
`;

export const Img = styled.img`
  width: 22px;
  height: 22px;
  color: white;
  `;

export const ArticleContainer = styled.div`
  width: 683px;
  margin-top: 20px;
  border: 1px solid #e6e8e7;
  overflow-x: scroll; 
`;