import { useState } from 'react';

interface Props {
  onSendMessage: ( message: string ) => void;
  placeholder?: string;
  disableCorrections?: boolean;
}

export const TextMessageBox = ( { onSendMessage, disableCorrections, placeholder }: Props ) => {

  const [messase, setMessase] = useState('')

  const handleSendMessage = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    if ( messase.trim() === '' ) return;

    onSendMessage( messase );
    setMessase( '' );
  };

  return (
    <form
      onSubmit={ handleSendMessage }
      className="flex flex-row items-center items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            autoFocus
            name="message"
            value={ messase }
            onChange={ ( event ) => setMessase( event.target.value ) }
            className=" flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={ placeholder || 'Escribe un mensaje' }
            autoComplete={ disableCorrections ? 'on' : 'off' }
            autoCorrect={ disableCorrections ? 'on' : 'off' }
            spellCheck={ disableCorrections ? true : false }
            type="text" />
        </div>
      </div>

      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>

      </div>
    </form>
  );
};