import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';

import styled from 'styled-components/native';

import { Row } from './Layout';
import Text from './Text';
import Icon from './Icon';

const renderSeparator = () => <ListGroupSeparator />;
const ListGroup = props => <ListView renderFooter={renderSeparator} {...props} />;

ListGroup.DataSource = ListView.DataSource;

const ListGroupView = styled.View`
  border-color: #ccc;
  border-width: 0;
  border-bottom-width: 0.5;
`;

const ListGroupItemWrapper = styled.TouchableOpacity`
  border-width: 0.5;
  border-bottom-width: 0;
  border-color: #ccc;
  justify-content: space-between;
  width: 100%;
`;

const ListGroupChildren = styled.View`
  flex: 1;
`;

const ListGroupSeparator = styled.View`
  background-color: #ccc;
  height: 0.5;
  width: 100%;
`;

const SpacedRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding: 25 15;
`;

class ListGroupItem extends Component {
  render() {
    const { text, children, ...rest } = this.props;

    return (
      <ListGroupItemWrapper {...rest}>
        <SpacedRow>
          <ListGroupChildren>
            {children || <Text>{text}</Text>}
          </ListGroupChildren>
          <Icon name="chevron-right" color="#333" type="EvilIcons" size={24} />
        </SpacedRow>
      </ListGroupItemWrapper>
    );
  }
}

ListGroupItem.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export { ListGroup as default, ListGroupItem, ListGroupView };
