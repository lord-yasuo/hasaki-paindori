export interface AnimeCalendarModel {
  img: string;
  route: string;
  time: string;
  title: string;
}

export interface AnimesCalendarModel {
  id: string;
  animes: Array<AnimeCalendarModel>;
  season?: string;
}
