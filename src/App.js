import Alert from './Alert/Alert'
import {AlertProvider} from './Alert/AlertContext'
import Main from './Main'
import React from 'react'

function App() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}}/>
      </div>
    </AlertProvider>
  );
}

export default App;
