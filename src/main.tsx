import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Editor from './components/Editor';
import './stylesheets/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
);
