export interface Member {
  name: string;
  title?: string;
  image: string;
  affiliations: string;
  bio: string;
  lastName?: string;
} 

export interface MemberWpData {
  acf: {
    name: string;
    title?: string;
    image: string;
    affiliations: string;
    bio: string;
  }
}