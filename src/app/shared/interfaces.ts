export type Thumbnail = Record<string, { url: string; width: number; height: number; }>;

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface List {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}

export interface IdItem {
  id: {
    videoId: string;
  };
}

export interface IdList {
  items: IdItem[];
}

export interface FiltersState {
  visibility: boolean;
  date: "asc" | "desc";
  views: "asc" | "desc";
  text: string;
}
