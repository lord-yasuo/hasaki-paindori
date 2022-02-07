export class AnimeModel {
    aired: string;
    alternatives?: Array<AnimeMiniModel>;
    bdrip: boolean;
    episodes: string;
    format: string;
    genres: string;
    id: string;
    img: string;
    lastUpdate: any;
    more: string;
    more2: string;
    prequels?: Array<AnimeMiniModel>;
    resume: string;
    season: string;
    sequels?: Array<AnimeMiniModel>;
    spinoff?: AnimeMiniModel;
    studioAnimation: string;
    themes: string;
    time?: string;
    title: string;
    year: string;
    subs?: string;
    finished?: boolean;

    constructor() {
        this.aired = '';
        this.bdrip = false;
        this.episodes = '';
        this.format = '';
        this.genres = '';
        this.id = '';
        this.img = '';
        this.lastUpdate = new Date();
        this.more = '';
        this.more2 = '';
        this.resume = '';
        this.season = '';
        this.studioAnimation = '';
        this.themes = '';
        this.title = '';
        this.year = '';
    }
}

export interface AnimeMiniModel {
    id: string;
    name: string;
}

export interface AnimeCardModel {
    end: boolean;
    img: string;
    pubDate: any;
    subtitle: string;
    title: string;
    urlDetails: string;
    urlFHD?: string;
    urlHD?: string;
    new?: boolean;
}
