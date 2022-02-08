
export class CatalogModel {
  [id: string]: AnimeModel;
}

export class AnimeModel {
  id: number;
  title: string;
  alternativeTitle: string;
  imgCover: string;
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
  }
}
