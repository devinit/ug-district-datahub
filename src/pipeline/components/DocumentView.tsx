import React, { FC } from 'react';
import { AdminTable } from '../../components/AdminTable';
import { useDocuments } from '../hooks/document';

const DocumentView: FC = () => {
  const { data, loading, error } = useDocuments();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch documents. Please try again later.</div>;
  }

  return (
    <AdminTable
      className="listing"
      data={data.map(({ name, type, entity }) => ({ Name: name, Entity: entity, Type: type }))}
    />
  );
};

export default DocumentView;
