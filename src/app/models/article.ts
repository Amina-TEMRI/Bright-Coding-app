export interface Article {

  id?: number;          // optionnel
  title: string;
  body: string;
  views?: number;
  reaction?: Reaction;    // objet Reaction
  image: string;
  category: Category;    // objet Category
  author?: number;        // id de l'auteur
}

export interface Reaction {
  likes: number;
  dislikes: number;
}

export interface Category {
  id?: number;           // optionnel
  name: string;
  slug: string;          // nom URL
}

