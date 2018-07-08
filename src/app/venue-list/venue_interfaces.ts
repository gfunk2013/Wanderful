import { PhotoEntity } from './photo_interfaces';

export interface VenueData {
  meta: Meta;
  response: Response;
}
export interface Meta {
  code: number;
  requestId: string;
}
export interface Response {
  suggestedFilters: SuggestedFilters;
  geocode: Geocode;
  warning: Warning;
  headerLocation: string;
  headerFullLocation: string;
  headerLocationGranularity: string;
  totalResults: number;
  suggestedBounds: BoundsOrSuggestedBounds;
  groups?: (GroupsEntity)[] | null;
}
export interface SuggestedFilters {
  header: string;
  filters?: (FiltersEntity)[] | null;
}
export interface FiltersEntity {
  name: string;
  key: string;
}
export interface Geocode {
  what: string;
  where: string;
  center: NeOrSwOrCenter;
  displayString: string;
  cc: string;
  geometry: Geometry;
  slug: string;
  longId: string;
}
export interface NeOrSwOrCenter {
  lat: number;
  lng: number;
}
export interface Geometry {
  bounds: BoundsOrSuggestedBounds;
}
export interface BoundsOrSuggestedBounds {
  ne: NeOrSwOrCenter;
  sw: NeOrSwOrCenter;
}
export interface Warning {
  text: string;
}
export interface GroupsEntity {
  type: string;
  name: string;
  items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  reasons: Reasons;
  venue: Venue;
  referralId: string;
}
export interface Reasons {
  count: number;
  items?: (ItemsEntity1)[] | null;
}
export interface ItemsEntity1 {
  summary: string;
  type: string;
  reasonName: string;
}
export interface Venue {
  id: string;
  name: string;
  contact: object;
  location: Location;
  categories?: (CategoriesEntity)[] | null;
  verified: boolean;
  stats: Stats;
  beenHere: BeenHere;
  hereNow: HereNow;
  photoArray?: PhotoEntity[];
}
export interface Location {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  labeledLatLngs?: (LabeledLatLngsEntity)[] | null;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress?: (string)[] | null;
  neighborhood?: string | null;
}
export interface LabeledLatLngsEntity {
  label: string;
  lat: number;
  lng: number;
}
export interface CategoriesEntity {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: Icon;
  primary: boolean;
}
export interface Icon {
  prefix: string;
  suffix: string;
}
export interface Stats {
  tipCount: number;
  usersCount: number;
  checkinsCount: number;
  visitsCount: number;
}
export interface BeenHere {
  count: number;
  lastCheckinExpiredAt: number;
  marked: boolean;
  unconfirmedCount: number;
}

export interface HereNow {
  count: number;
  summary: string;
  groups?: (GroupsEntity1 | null)[] | null;
}
export interface GroupsEntity1 {
  type: string;
  name: string;
  count: number;
  items?: (null)[] | null;
}
