import React, { FC } from 'react';
import { WagtailFormSection } from '../../components/WagtailFormSection';
import { DataDocument } from '../utils/types';

type EditDocumentFormProps = {
  document: DataDocument;
};

const EditDocumentForm: FC<EditDocumentFormProps> = () => {
  return (
    <form>
      <div className="w-form-width">
        <WagtailFormSection label="Name">
          <input
            type="text"
            name="name"
            maxLength={255}
            aria-describedby="panel-child-name-errors"
            required
            id="id_name"
          />
        </WagtailFormSection>
      </div>
    </form>
  );
};

export default EditDocumentForm;
