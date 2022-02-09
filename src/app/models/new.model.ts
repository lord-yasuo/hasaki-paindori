
export class NewsModel {
  [id: string]: NewModel;
}

export class NewModel {
  type: 'site' | 'anime';
  lastUpdate: number;
  title: string;
  id?: number;
  text?: string;
}
