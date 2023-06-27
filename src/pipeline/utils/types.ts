export type Entity = {
  _id: string;
  slug: string;
  name: string;
  type: 'District' | 'Sub-County' | 'Parish';
  nextcloud?: EntityNextCloud;
};

export type EntityNextCloud = {
  path: string;
};

export type HookReponse<T> = {
  data: T[];
  loading: boolean;
  error: string;
};
