export interface Actor {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export interface CamposActor {
  name: HTMLInputElement | null;
  description: HTMLTextAreaElement | null;
  image: HTMLInputElement | null;
}
