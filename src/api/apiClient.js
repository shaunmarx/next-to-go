var apiClient = (client) => ({
    getNextToGoRaces: (jurisdiction) => client.getRequest(`/racing/next-to-go/races?jurisdiction=${jurisdiction}`),
});

export default apiClient;