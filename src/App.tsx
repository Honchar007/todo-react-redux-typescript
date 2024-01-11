import React from 'react';

// store
import { useAppSelector } from './app/store/hooks';
import { selectLoading } from './app/store/todoSlicer';

// components
import FunctionalBar from './app/components/FunctionalBar/FunctionalBar';
import Loading from './app/components/Loading/Loading';

// styles
import './App.css';

function App() {
const loading = useAppSelector(selectLoading);

  return (
    <div className="App">
      <FunctionalBar />
      { loading && <Loading /> }
    </div>
  );
}

export default App;
