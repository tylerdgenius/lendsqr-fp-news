import userReducer, {clearUser, updateUser} from './user';

export default {
  User: {
    reducer: userReducer,
    actions: {
      updateUser,
      clearUser,
    },
  },
};
