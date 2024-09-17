import logo from './logo.svg';
import './App.css';

import FormAPI from './Component/FormAPI/FormAPI.js'
import FormText from './Component/FormText/FormText.js'
import FormLabel from './Component/FormLabel/FormLabel.js'
import FormSelect from './Component/FormSelect/FormSelect.js'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="control-form">
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="brand" text="Marca"/>
            </div>
            <div className="control-input">
              <FormSelect name="brand" id="brand"/>
            </div>
          </div>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="model" text="Modelo"/>
            </div>
            <div className="control-input">
              <FormSelect name="model" id="model"/>
            </div>
          </div>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="year" text="Ano"/>
            </div>
            <div className="control-input">
              <FormSelect name="year" id="year"/>
            </div>
          </div>
          <div className="control-row">
            <div className="control-label">
              <FormLabel name="amount" text="Valor"/>
            </div>
            <div className="control-input">
              <FormText name="amount" id="amount" disabled=""/>
            </div>
          </div>

          <div className="control-row"><br/><hr/><br/></div>
          <div className="control-row">
            <FormAPI />
          </div>
        </div>    
      </div>    
    </div>
  );
}

export default App;
