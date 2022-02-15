
export class CatalogModel {
  [id: number]: AnimeModel;
}

export class AnimeModel {
  id: number;
  title: string;
  bdrip?: boolean;
  alternativeTitle: string;
  coverImg: string;
  lastUpdate: number;
  numberEpisodes: string;
  animeFormat: string;
  finished: boolean;
  durationPerEpisode: string;
  aired: string;
  season: string;
  year: number;
  genres: string;
  studios: string;
  summary: string;
  infoLinks: {
    anilist: string;
    nautiljon: string
  };
  downloadLinks: {
    torrent: string;
    ddl: string;
    credits?: {
      translator: string;
      checker: string;
      encoder: string;
    };
  };
  status?: string;
}
