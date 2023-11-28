export type t_contact_data = {
  email: string;
  message: string;
};

export type Meta = {
  src?: string;
  alt?: string;
  title?: string;
  author?: string;
  date?: string | number;
};

export type Post = {
  meta: Meta;
  slug?: string;
};

export type PostCard = {
  post: Post;
};

export type PostList = {
  posts: Post[];
};

export type contact_props = {
  serverFn: (data: t_contact_data) => Promise<unknown>;
};
