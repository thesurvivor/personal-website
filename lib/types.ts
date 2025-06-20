interface NavItemProps {
    icon: React.ReactNode;
    onlyIcon?: boolean;
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}
export type { NavItemProps };