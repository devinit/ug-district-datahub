import { createElement } from 'react';
import { render } from 'react-dom';

window.addEventListener('load', async () => {
  const dynamicTables = document.getElementById('pipeline-root');

  if (dynamicTables) {
    const EntityView = (await import('./components/EntityView')).default;
    render(createElement(EntityView, {}), dynamicTables);
  }
});
