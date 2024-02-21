import { useState } from 'react';
import { GtpMessage, MyMessage, TextMessageBox, TypingLoader } from '../components';

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {

  const [ loading, setLoading ] = useState( false );
  const [ messages, setMessages ] = useState<Message[]>( [] );

  const handlePostMessage = async ( message: string ) => {
    setLoading( true );

    setMessages( ( prev ) => [ ...prev, { text: message, isGpt: false } ] );

    setLoading( false );

  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GtpMessage text="Hola, escribe tu texto en español" />

          {
            messages.map( ( message, index ) => (
              message.isGpt ? (
                <GtpMessage key={ index } text="Hola, escribe tu texto en español" />
              ) : (
                <MyMessage key={ index } text={ message.text } />
              )
            ) )
          }

          {
            loading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoader />
              </div>
            )
          }


        </div>
      </div>
      <TextMessageBox
        onSendMessage={ ( message ) => handlePostMessage( message ) }
        disableCorrections={ true }
      />

    </div>
  );
};