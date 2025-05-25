export interface GeneratorData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
  features: {
    icon: string;
    text: string;
  }[];
  categories: string[];
}
