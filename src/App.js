import { useState } from 'react'
import Header from './components/header/Header';
import Content from './components/content/';

const screenStates = {
  CHOOSE_CAMPAIGN: 'CHOOSE_CAMPAIGN',
  CREATE_CAMPAIGN: 'CREATE_CAMPAIGN',
  DOWNLOAD_CAMPAIGN: 'DOWNLOAD_CAMPAIGN',
}

function App() {
  const [screenState, setScreenState] = useState(screenStates.CHOOSE_CAMPAIGN)

  return (
    <>
      <Header screenState={screenState} setScreenState={setScreenState}/>
      <Content screenState={screenState} setScreenState={setScreenState}/>
    </>
  );
}

export default App;
