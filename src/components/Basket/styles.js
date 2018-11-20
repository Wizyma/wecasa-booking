import styled from 'styled-components';

export const FixedWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #0069c0;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: width 2s, height 2s, border-radius 2s; /* For Safari 3.1 to 6.0 */
  transition: width 2s, height 2s, border-radius 2s;
  :hover {
    width: ${props => props.basket && '200px'};
    height: ${props => props.basket && '200px'};
    border-radius: ${props => props.basket && '5px'};
  }
`;
