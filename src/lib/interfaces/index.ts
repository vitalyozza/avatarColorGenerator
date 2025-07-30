export interface User {
    id: string,
    name: string,
    avatar: {
        light: AvatarStyles,
        dark: AvatarStyles
    }
}

export interface AvatarStyles {
    background: string;
    color: string;
}