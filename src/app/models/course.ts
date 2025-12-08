export interface Course {//composant course joue le role d'une page 
    id?:number;
    title:string;
    url:string;
    price:number;
    content:string;
    createdAt?:string;
    publishedAt?:string;
    active:boolean;
}
