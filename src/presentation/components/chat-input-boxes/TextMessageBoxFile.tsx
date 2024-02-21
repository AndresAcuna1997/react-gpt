import { useRef, useState } from 'react';

interface Props {
  onSendMessage: ( message: string ) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string;
}

export const TextMessageBoxFile = ( { onSendMessage, disableCorrections, placeholder, accept }: Props ) => {

  const [ messase, setMessase ] = useState( '' );
  const [ selectedFile, setSelectedFile ] = useState<File | null>( null );
  const inputFileRef = useRef<HTMLInputElement>( null );

  const handleSendMessage = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    if ( messase.trim() === '' ) return;

    onSendMessage( messase );
    setMessase( '' );
  };

  return (
    <form
      onSubmit={ handleSendMessage }
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="mr-3">

        <button
          type="button"
          onClick={ () => inputFileRef.current?.click() }
          className="flex justify-center items-center text-gray-400 hover:text-gray-600">
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>

        <input
          ref={ inputFileRef }
          type="file"
          accept={ accept }
          onChange={ ( e ) => setSelectedFile( e.target.files?.item( 0 ) || null ) }
          hidden
        />

      </div>
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
        <button
          className="btn-primary"
          disabled={ !selectedFile }
        >
          {
            ( !selectedFile )
              ? ( <span className="mr-2">Enviar</span> )
              : ( <span className="mr-2">{ selectedFile.name.substring( 0, 10 ) + '...' }</span> )
          }

          <i className="fa-regular fa-paper-plane"></i>
        </button>

      </div>
    </form>
  );
};