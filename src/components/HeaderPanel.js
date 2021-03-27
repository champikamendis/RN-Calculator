import React from 'react';
import { Container, Header, Body, Title} from 'native-base';

const HeaderPanel = (props) => {
  return(
    <Container>
      <Header>
        <Body>
          <Title>{props.headerTitle}</Title>
        </Body>
      </Header>
    </Container>
  )  
}

export default HeaderPanel;