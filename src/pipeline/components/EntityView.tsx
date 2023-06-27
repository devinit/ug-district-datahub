import React, { FC } from 'react';
import { AdminTable } from '../../components/AdminTable/AdminTable';
import { useEntities } from '../hooks/entity';

const EntityView: FC = () => {
  const { data, loading, error } = useEntities();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch entities. Please try again later.</div>;
  }

  return <AdminTable className="listing" data={data.map(({ name, type }) => ({ Name: name, Type: type }))} />;
};

export default EntityView;
