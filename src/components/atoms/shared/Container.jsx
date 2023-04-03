import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  overflow: hidden;
  width: 100%;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

export default Container;
