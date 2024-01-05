export interface Post{
    title: string,
    date: Date,
    content: any,
    slug: string
}

export interface Event {
    title: string;
    description: any
  }
  
  export interface Entry {
    year: number;
    events: Event[];
  }