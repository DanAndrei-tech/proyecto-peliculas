export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  description: string;
  cover_url: string;
}

export interface CamposPelicula {
  title: HTMLInputElement | null;
  year: HTMLInputElement | null;
  director: HTMLInputElement | null;
  description: HTMLTextAreaElement | null;
  cover_url: HTMLInputElement | null;
}
