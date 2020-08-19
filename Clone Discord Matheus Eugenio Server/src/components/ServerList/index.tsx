import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      
      <ServerButton isHome hasNotifications mentions={1}/>
      <ServerButton isHome hasNotifications mentions={2}/>
      <ServerButton isHome hasNotifications mentions={3}/>
      <ServerButton isHome hasNotifications mentions={4}/>
      <ServerButton isHome hasNotifications mentions={5}/>
      <ServerButton isHome hasNotifications mentions={6}/>
      <ServerButton isHome hasNotifications mentions={7}/>
      <ServerButton isHome hasNotifications mentions={777}/>
      
    </Container>
  );
};

export default ServerList;
