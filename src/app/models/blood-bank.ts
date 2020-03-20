import { ListItem } from './list-item';

export interface BloodBank {
  name: string;
  location: any;
  address: string;
  city: string;
  country: string;
  postcode: string;
  needs: ListItem[];
  offers: ListItem[];
}
