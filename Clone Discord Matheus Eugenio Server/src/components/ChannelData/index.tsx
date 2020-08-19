import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="MATT"
            date="18/08/2020"
            content="Hello World!"
          />
        ))}

        <ChannelMessage
          author="Matheus Eugenio"
          date="21/06/2020"
          content={
            <>
              <Mention>@Matheus Eugenio</Mention>,Hello World?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
            <Input  type="text" placeholder="Conversar em #chat-livre" />
            
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
