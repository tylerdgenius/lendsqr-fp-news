export type User = {
  id: number;
  username: string;
  pictureUrl: string;
  email: string;
};

export type InitialUserState = {
  user: User;
};
