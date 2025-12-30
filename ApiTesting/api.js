export const getUser = async () => {
    const response = await fetch('/api/user');
    if (!response.ok) {
        throw new Error('API failed');
    }
    return response.json();
};
