import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
`;

const Col = styled.View`
  flex-direction: column;
`;

const Content = styled.View`
  padding: 10;
`;

const Centered = styled.View`
  alignItems: center;
  justifyContent: center;
`;

export { Centered, Col, Content, Row };
