import type { PageServerLoad } from './$types';
import { User } from '$lib/interfaces';
import { generateUserAvatar } from '$lib/generators';

function generateRandomInitials(): string {
    const alphabet = 'АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ';

    const getRandomLetter = () =>
        alphabet[Math.floor(Math.random() * alphabet.length)];

    return `${getRandomLetter()}${getRandomLetter()}`;
}

function generateUsers(count: number): User[] {
    return Array.from({ length: count }, () => ({
        name: generateRandomInitials()
    }));
}

const Users: User[] = generateUsers(300);

let updatedUsers = Users.map((user) => {
    return generateUserAvatar(user);
});

export const load: PageServerLoad = async ({ params }) => {
    return {
        users: updatedUsers
    };
};