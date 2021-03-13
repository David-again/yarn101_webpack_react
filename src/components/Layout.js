import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

// import { pullRight, h1 } from './Layout.css';
// require('./Layout.css');
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className="h2 h1">
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className="pull-right">
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
      
      <p>Some paragraph on the left!</p>

    </Container>
  );
};

export default Layout;
