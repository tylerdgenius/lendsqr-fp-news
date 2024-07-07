export type User = {
  id: string;
  username: string;
  pictureUrl: string;
  email: string;
};

export type InitialUserState = {
  user: User;
};
