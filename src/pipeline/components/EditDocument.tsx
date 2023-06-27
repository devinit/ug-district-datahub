import React, { FC } from 'react';
import { DataDocument } from '../utils/types';

type EditDocumentProps = {
  document: DataDocument;
};

const EditDocument: FC<EditDocumentProps> = ({ document }) => {
  console.log(document);

  return <div>Content Goes Here</div>;
};

export default EditDocument;
