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
    }
 
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
        username: 'oliverjam',
        password: '$tr0ngP@ssw0rd!',
    },
    {
        id: '456',
        username: 'evantommy',
        password: 'SecureP@ss123!',
    },
    {
        id: '789',
        username: 'alexoyoo',
        password: 'Pr0tect1on@!%',
    },
    {
        id: '101',
        username: 'abdiaziz',
        password: '123456',
        
    }
];




