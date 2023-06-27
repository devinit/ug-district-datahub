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

export type UseEntitiesReponse = {
  data: Entity[];
  loading: boolean;
  error: string;
};
