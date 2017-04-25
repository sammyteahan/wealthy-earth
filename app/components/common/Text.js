import { Platform } from 'react-native';
import styled from 'styled-components/native';

/**
 * Text -- The Root of All Things
 */

const Text = styled.Text`
  font-size: 15;
  line-height: ${Platform.select({ ios: 17, android: 20 })};
  font-family: ${Platform.select({ ios: 'Open Sans', android: 'opensans_regular' })};
  color: #333;
`;

/**
 * Heading Components
 */

const HBase = styled(Text)`
  font-weight: bold;
  margin-bottom: 10;
`;

const H1 = styled(HBase)`
  font-size: 32;
  line-height: ${Platform.select({ ios: 34, android: 38 })};
  font-weight: normal;
`;

const H2 = styled(HBase)`
  font-size: 28;
  line-height: ${Platform.select({ ios: 30, android: 34 })};
  font-weight: normal;
`;

const H3 = styled(HBase)`
  font-size: 24;
  line-height: ${Platform.select({ ios: 26, android: 32 })};
`;

const H4 = styled(HBase)`
  font-size: 22;
  line-height: ${Platform.select({ ios: 24, android: 26 })};
`;

/**
 * Body Components
 */

const P = styled(Text)`
  margin-bottom: 10;
`;

const Strong = styled(Text)`
  font-weight: bold;
`;

const U = styled.Text`
  text-decoration-line: underline;
`;

const Em = styled.Text`
  font-style: italic;
`;

const Del = styled.Text`
  text-decoration-line: line-through;
`;

export {
  Text as default,
  Del,
  Em,
  H1,
  H2,
  H3,
  H4,
  P,
  Strong,
  U,
};
