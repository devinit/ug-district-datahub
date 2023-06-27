import { createElement } from 'react';
import { render } from 'react-dom';

window.addEventListener('load', async () => {
  const entitiesRoot = document.getElementById('pipeline-entities-root');
  const documentsRoot = document.getElementById('pipeline-documents-root');
  const workflowsRoot = document.getElementById('pipeline-workflows-root');

  if (entitiesRoot) {
    const EntityView = (await import('./components/EntityView')).default;
    render(createElement(EntityView, {}), entitiesRoot);
  }

  if (documentsRoot) {
    const DocumentView = (await import('./components/DocumentView')).default;
    render(createElement(DocumentView, {}), documentsRoot);
  }

  if (workflowsRoot) {
    const WorkflowView = (await import('./components/WorkflowView')).default;
    render(createElement(WorkflowView, {}), workflowsRoot);
  }
});
