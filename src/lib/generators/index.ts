import { User, AvatarStyles } from '$lib/interfaces';

const baseColors = [
    // primary
    'oklch(60% 0.15 264)',          /* intuit-400 */
    'oklch(70% 0.14 264)',          /* intuit-300 */
    // secondary
    'oklch(62.4% 0.111543 182.3)',  /* sporting-green-400 */
    'oklch(70% 0.095525 181.2)',    /* sporting-green-300 */
    // success
    'oklch(60% 0.16 142)',          /* xbox-green-400 */
    'oklch(70% 0.16 142)',          /* xbox-green-300 */
    // neutral
    'oklch(60% 0.028 248.4)',       /* black-coral-400 */
    'oklch(70% 0.026 248.4)',       /* black-coral-300 */
    // danger
    'oklch(60% 0.16 29)',           /* firebrick-400 */
    'oklch(70% 0.16 29)',           /* firebrick-300 */
    // attention
    'oklch(60.4% 0.12363 85.4)',    /* bronze-400 */
    'oklch(70.2% 0.143392 89.5)'    /* bronze-300 */
];

function adjustLightness(color, lightnessDelta) {
    // Парсинг OKLCH цвета
    // Как он экспортируется из Figma: oklch(70% 0.16 29)
    const [l, c, h] = color.match(/\d+(\.\d+)?/g).map(Number);

    // Корректировка lightness с ограничениями
    const newL = Math.max(0, Math.min(100, l + lightnessDelta * 100));
    
    return `oklch(${newL}% ${c} ${h})`;
}

export function generateUserAvatar(user: Partial<User>): User {
    // Генерируем id если не передан
    const userId = user.id || crypto.randomUUID();
    
    const baseColor = baseColors[Math.floor(Math.random() * baseColors.length)];

    // Генерация цветов для light и dark режимов
    const lightAvatar: AvatarStyles = {
        color: adjustLightness(baseColor, -0.2),
        background: adjustLightness(baseColor, 0.2)
    };

    const darkAvatar: AvatarStyles = {
        color: adjustLightness(baseColor, 0.2),
        background: adjustLightness(baseColor, -0.2)
    };

    return {
        id: userId,
        name: user.name || 'Anonymous',
        avatar: {
            light: lightAvatar,
            dark: darkAvatar
        }
    };
}