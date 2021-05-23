import { NavigationRoutes } from '../enums/Navigation.enum';

export interface SideNavItems{
    title: string;
    icon?: string;
    path: string;
}

export function GetNavigationItems(): SideNavItems[] {
    return [
        {title: 'Pokemon', path: NavigationRoutes.Pokemon}
    ];
}
