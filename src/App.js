import React from 'react';

import Mirror from './Mirror';
import Todos from './Todos';
import TodoProvider from './components/context/Todo';

function App() {
  return (
    <TodoProvider>
      <Mirror />
      <Todos />
    </TodoProvider>
  );
}

export default App;
