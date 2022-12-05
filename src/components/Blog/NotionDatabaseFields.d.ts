export type NotionImage = {
  name: string;
  rawUrl: string;
  url: string;
};

export type NDBFields = {
  id: string;
  Description: string;
  Image: NotionImage[];
  Name: string;
  Status: string;
  Tags?: string[];
  Author?: string;
  Date: string;
};
