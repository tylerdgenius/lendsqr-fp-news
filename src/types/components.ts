export type ScreenHeaderProps = {
  title: string;
  backButton?: () => void;
  description?: string;
  backButtonType?: 'cancel' | 'back';
};
