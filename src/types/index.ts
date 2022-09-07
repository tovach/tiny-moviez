import { ENDPOINTS } from '@constants/api';

export type NavigationLink = {
  id: number;
  icon: string;
  title: string;
  path: string;
};

type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path?: any;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Film = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type FilmPoster = Pick<
  Film,
  'id' | 'poster_path' | 'title' | 'vote_average' | 'backdrop_path'
>;

enum BackdropSizes {
  'w300',
  'w780',
  'w1280',
  'original'
}

enum LogoSizes {
  'w45',
  'w92',
  'w154',
  'w185',
  'w300',
  'w500',
  'original'
}

enum PosterSizes {
  'w45',
  'w92',
  'w154',
  'w185',
  'w300',
  'w500',
  'original'
}

enum ProfileSizes {
  'w45',
  'w185',
  'h632',
  'original'
}

enum StillSizes {
  'w92',
  'w185',
  'w300',
  'original'
}

enum ChangeKeys {
  'adult',
  'air_date',
  'also_known_as',
  'alternative_titles',
  'biography',
  'birthday',
  'budget',
  'cast',
  'certifications',
  'character_names',
  'created_by',
  'crew',
  'deathday',
  'episode',
  'episode_number',
  'episode_run_time',
  'freebase_id',
  'freebase_mid',
  'general',
  'genres',
  'guest_stars',
  'homepage',
  'images',
  'imdb_id',
  'languages',
  'name',
  'network',
  'origin_country',
  'original_name',
  'original_title',
  'overview',
  'parts',
  'place_of_birth',
  'plot_keywords',
  'production_code',
  'production_companies',
  'production_countries',
  'releases',
  'revenue',
  'runtime',
  'season',
  'season_number',
  'season_regular',
  'spoken_languages',
  'status',
  'tagline',
  'title',
  'translations',
  'tvdb_id',
  'tvrage_id',
  'type',
  'video',
  'videos'
}

export type Images = {
  base_url: 'http://image.tmdb.org/t/p/';
  secure_base_url: 'https://image.tmdb.org/t/p/';
  backdrop_sizes: keyof typeof BackdropSizes;
  logo_sizes: keyof typeof LogoSizes;
  poster_sizes: keyof typeof PosterSizes;
  profile_sizes: keyof typeof ProfileSizes;
  still_sizes: keyof typeof StillSizes;
};

export type ApiConfiguration = {
  images: Images;
  change_keys: ChangeKeys;
};

export type PopularFilmsResponse = {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
};

export type QueryStrings = keyof typeof ENDPOINTS;
