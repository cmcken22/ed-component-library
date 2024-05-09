import { HeaderProps } from './Header.types';

declare const Header: {
    ({ id, className, title, subtitle, children }: HeaderProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<HeaderProps>;
};
export default Header;
