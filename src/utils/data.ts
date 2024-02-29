// Interfaces
export interface Article {
    id: string;
    title: string;
    content: string;
    category: string;
    userId: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface User {
    id: string;
    username: string;
    password: string;
}

export const articlesData: Article[] = [
    {
        id: '1',
        title: 'The Rise of Artificial Intelligence in Healthcare',
        content: 'Artificial Intelligence (AI) is revolutionizing healthcare with its ability to analyze complex medical data...',
        category: 'Technology',
        userId: '123',
    },
    {
        id: '2',
        title: 'Self-Driving Cars: A Look into the Future of Transportation',
        content: 'Autonomous vehicles promise to change how we travel, with companies like Tesla and Waymo leading the way...',
        category: 'Technology',
        userId: '456',
    },
    {
        id: '3',
        title: 'The Latest Advancements in Quantum Computing',
        content: 'Quantum computing is making strides with new breakthroughs, such as Google\'s recent achievement of quantum supremacy...',
        category: 'Technology',
        userId: '123',
    },
];

export const categoriesData: Category[] = [
    {
        id: '1',
        name: 'Technology',
    },
    {
        id: '2',
        name: 'Travel',
    },
    {
        id: '3',
        name: 'Food',
    },
];

export const usersData: User[]= [
    {
        id: '123',
        username: 'johndoe1987',
        password: '$tr0ngP@ssw0rd!',
    },
    {
        id: '456',
        username: 'janedoe1990',
        password: 'SecureP@ss123!',
    },
    {
        id: '789',
        username: 'alexsmith1975',
        password: 'Pr0tect1on@!%',
    },
];



