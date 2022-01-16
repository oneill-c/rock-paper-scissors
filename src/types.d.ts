/**
 * Navigation
 */
interface NavigationItem {
  key: string;
  navigateTo: string;
  text: string;
  icon?: ReactElement;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}
