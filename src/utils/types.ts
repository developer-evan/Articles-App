interface Article {
    id: string;
    title: string;
    content: string;
    category: string;
    userId: string;
}
interface Category {
    id: string;
    name: string;
}
interface User {
    id: string;
    username: string;
    password: string;
}