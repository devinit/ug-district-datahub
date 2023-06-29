import React, { FC } from 'react';
import { DataDocument } from '../utils/types';
import EditDocumentForm from './EditDocumentForm';

type EditDocumentProps = {
  document: DataDocument;
};

const EditDocument: FC<EditDocumentProps> = ({ document }) => {
  console.log(document);

  return (
    <div>
      <EditDocumentForm document={document} />
    </div>
  );
};

export default EditDocument;
