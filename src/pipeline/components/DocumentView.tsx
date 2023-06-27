import React, { FC, useState } from 'react';
import { AdminTable } from '../../components/AdminTable';
import WagtailModal from '../../components/WagtailModal/WagtailModal';
import WagtailModalContent from '../../components/WagtailModal/WagtailModalContent';
import { useDocuments } from '../hooks/document';
import EditDocument from './EditDocument';
import { DataDocument } from '../utils/types';

const DocumentView: FC = () => {
  const { data, loading, error } = useDocuments();
  const [activeDocument, setActiveDocument] = useState<DataDocument>();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch documents. Please try again later.</div>;
  }

  const onSelect = (doc: DataDocument) => {
    setActiveDocument(doc);
  };

  const onCloseModal = () => setActiveDocument(undefined);

  return (
    <div>
      <div>
        {activeDocument ? (
          <WagtailModal show onClose={onCloseModal}>
            <WagtailModalContent title="Edit Document">
              <EditDocument document={activeDocument} />
            </WagtailModalContent>
          </WagtailModal>
        ) : null}
      </div>
      <AdminTable
        className="listing"
        data={data.map((item) => ({ Name: item.name, Entity: item.entity, Type: item.type, original: item }))}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSelect={onSelect as any}
      />
    </div>
  );
};

export default DocumentView;
