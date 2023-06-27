import React, { FC } from 'react';
import { useEntities } from '../hooks/entity';

const EntityView: FC = () => {
  const { data, loading, error } = useEntities();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch entities. Please try again later.</div>;
  }

  return <div>Content Goes Here {data.length}</div>;
};

export default EntityView;
