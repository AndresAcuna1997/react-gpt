import { useState } from 'react';

interface Props {
  onSendMessage: ( message: string, selectedOption: string ) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string;
  options: Option[];
}

interface Option {
  id: string;
  text: string;
}

export const TextMessageBoxSelect = ( { onSendMessage, disableCorrections, placeholder, options }: Props ) => {

  const [ messase, setMessase ] = useState( '' );
  const [ selectedOption, setSelectedOption ] = useState( '' );

  const handleSendMessage = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    if ( messase.trim() === '' ) return;

    onSendMessage( messase, selectedOption );
    setMessase( '' );
  };

  return (
    <form
      onSubmit={ handleSendMessage }
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="mr-3">
      </div>
      <div className="flex-grow">
        <div className="flex">
          <input
            autoFocus
            name="message"
            value={ messase }
            onChange={ ( event ) => setMessase( event.target.value ) }
            className="w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={ placeholder || 'Escribe un mensaje' }
            autoComplete={ disableCorrections ? 'on' : 'off' }
            autoCorrect={ disableCorrections ? 'on' : 'off' }
            spellCheck={ disableCorrections ? true : false }
            type="text" />

          <select
            name="select"
            className="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={ selectedOption }
            onChange={ ( event ) => setSelectedOption( event.target.value ) }
          >
            <option value="">Seleccione una opcion</option>
            {
              options.map( ( { id, text } ) => (
                <option key={ id } value={ id }>{ text }</option>
              ) )
            }
          </select>
        </div>
      </div>

      <div className="ml-4">
        <button
          className="btn-primary"
        >
          <span className="mr-2">Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>

      </div>
    </form>
  );
};