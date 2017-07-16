const config = {
    baseUrl: process.env.NODE_ENV === "development" ? '' : process.env.REACT_APP_BASE_URL,
    domain: process.env.REACT_APP_DOMAIN
}

export default config;