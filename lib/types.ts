interface NavItemProps {
    icon: React.ReactNode;
    onlyIcon?: boolean;
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
}
export type { NavItemProps };