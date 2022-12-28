export interface ItemThumbnails {
  default: {
    url: string;
    width: 120;
    height: 90;
  };
  medium: {
    url: string;
    width: 320;
    height: 180;
  };
  high: {
    url: string;
    width: 480;
    height: 360;
  };
  standard: {
    url: string;
    width: 640;
    height: 480;
  };
  maxres: {
    url: string;
    width: 1270;
    height: 720;
  };
}

export interface Item {
  kind: 'youtube#video';
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ItemThumbnails;
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

export interface ListResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}