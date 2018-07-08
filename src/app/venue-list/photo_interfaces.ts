// make_types -i photo_interfaces.ts photo_samples.json PhotoData

export interface PhotoData {
  meta: Meta;
  notifications?: (NotificationsEntity)[] | null;
  response: Response;
}
export interface Meta {
  code: number;
  requestId: string;
}
export interface NotificationsEntity {
  type: string;
  item: Item;
}
export interface Item {
  unreadCount: number;
}
export interface Response {
  photos: Photos;
}
export interface Photos {
  count: number;
  items?: (PhotoEntity)[] | null;
  dupesRemoved: number;
}
export interface PhotoEntity {
  id: string;
  createdAt: number;
  source: Source;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  user: User;
  checkin?: Checkin | null;
  visibility: string;
}
export interface Source {
  name: string;
  url: string;
}
export interface User {
  id: string;
  firstName: string;
  lastName?: string | null;
  gender: string;
  photo: Photo;
}
export interface Photo {
  prefix: string;
  suffix: string;
}
export interface Checkin {
  id: string;
  createdAt: number;
  type: string;
  timeZoneOffset: number;
  createdBy?: UserOrCreatedByOrWithEntity | null;
  with?: (UserOrCreatedByOrWithEntity1)[] | null;
}
export interface UserOrCreatedByOrWithEntity {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  photo: Photo;
}
export interface UserOrCreatedByOrWithEntity1 {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  photo: Photo;
}
