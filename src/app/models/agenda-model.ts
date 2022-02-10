
export class AgendaModel {
  [id: string]: Array<DayAnimeModel>;
}

export class DayAnimeModel {
  title: string;
  time?: string;
  vods: string;
  url: string;
  img: string;
}
