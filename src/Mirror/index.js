import React from 'react';

import { useTodo } from '../components/context/Todo';

function Mirror() {
  const { todos, setTodos } = useTodo();

  return (
   <div>
      <h1>{todos}</h1>
      <button onClick={() => setTodos(todo => [...todo, todo.length + 1])}>
        Adicionar todo
        </button>
   </div>
  )
}

export default Mirror;