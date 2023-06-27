import React, { FC } from 'react';
import { AdminTable } from '../../components/AdminTable';
import { useWorkflows } from '../hooks/workflow';
import { Hook, HookEvent } from '../utils/types';

const formatEvent = (event: HookEvent) => {
  switch (event) {
    case 'file_changed':
      return 'File changed';
    case 'file_updated':
      return 'File updated';
    case 'file_tagged':
      return 'File updated';

    default:
      return event;
  }
};

const processData = (data: Hook[]) => {
  return data.map(({ event, url, createdAt }) => ({
    Hook: url,
    Event: formatEvent(event),
    Created: new Date(createdAt).toUTCString(),
  }));
};

const WorkflowView: FC = () => {
  const { data, loading, error } = useWorkflows();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch hooks. Please try again later.</div>;
  }

  return <AdminTable className="listing" data={processData(data)} />;
};

export default WorkflowView;
