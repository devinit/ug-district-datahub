type Collection = {
  _id: string;
  slug: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export interface Entity extends Collection {
  type: 'District' | 'Sub-County' | 'Parish';
  nextcloud?: NextCloudInfo;
}

export type NextCloudInfo = {
  path: string;
};

export type HookReponse<T> = {
  data: T[];
  loading: boolean;
  error: string;
};

export interface DataDocument extends Collection {
  type: 'generated' | 'manual';
  entity: 'string';
  schedule?: UpdateSchedule;
  nextcloud: NextCloudInfo;
  schema: DocumentSchema;
}

export type UpdateSchedule = {
  interval: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually';
  notify: string; // list of emails to notify
};

type DocumentSchema = {
  properties: {
    [name: string]: SchemaProperty;
  };
  required?: string[]; // which properties are required
  additionalProperties: boolean;
};

type SchemaProperty = {
  type: 'string' | 'integer' | 'array' | 'object';
  description?: 'string';
};
