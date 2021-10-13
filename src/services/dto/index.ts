export interface loginResponseType {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface loginType {
  email: string;
  password: string;
}

export interface jobsListType {
  current_page: number;
  data: jobItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: linkItem[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface jobItem {
  id: number;
  title: string;
  description: string;
  latitude: string;
  longitude: string;
  image: string;
  date: Date;
  status: jobStatus;
  assigned_to: string;
  created_at: Date;
  updated_at: Date;
}

type jobStatus = 'complete' | 'in progress' | 'pending';

export interface linkItem {
  url: null | string;
  label: number | string;
  active: boolean;
}

export interface userInformationType {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date;
  created_at: Date;
  updated_at: Date;
}
