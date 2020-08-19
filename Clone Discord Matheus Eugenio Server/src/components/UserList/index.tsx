import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="MATT " />
      <UserRow nickname="Dev1" />
      <Role>Offline - 18</Role>
      <UserRow nickname="Matheus Eugenio" isBot />
      
      <UserRow nickname="Dev2" />
      <UserRow nickname="Dev3" />
      <UserRow nickname="Dev4" />
      <UserRow nickname="Dev5" />
      <UserRow nickname="Dev6" />
      <UserRow nickname="Dev7" />
      <UserRow nickname="Dev8" />
      <UserRow nickname="Dev9" />
      <UserRow nickname="Dev10" />
      <UserRow nickname="Dev11" />
      <UserRow nickname="Dev12" />
      <UserRow nickname="Dev13" />
      <UserRow nickname="Dev14" />
      <UserRow nickname="Dev15" />
      <UserRow nickname="Dev16" />
      <UserRow nickname="Dev17" />
      <UserRow nickname="Dev18" />
      <UserRow nickname="Dev19" />
      <UserRow nickname="Dev20" />

    </Container>
  );
};

export default UserList;
