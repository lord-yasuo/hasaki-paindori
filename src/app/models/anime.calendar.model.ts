export interface AnimeCalendarModel {
  img: string;
  route: string;
  time: string;
  title: string;
}

export interface AnimesCalendarModel {
  id: number;
  animes: Array<AnimeCalendarModel>;
  season?: string;
}
