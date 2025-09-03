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

export interface Title {
  rendered: string;
}

export interface Publication {
  title: string;
  author?: string;
  publication_url?: string;
  thumbnail: string;
  categories: number[];
  publication_date: string;
  publication_date_use_exact_day?: boolean;
}

export interface PublicationWpData {
  title: Title;
  categories: number[];
  acf: {
    author?: string;
    publication_url?: string;
    thumbnail: string;
    publication_date: string;
    publication_date_use_exact_day?: boolean;
  }
}