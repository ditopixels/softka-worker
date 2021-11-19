const configDB = {
    MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
    MONGODB_DATABASE: process.env.MONGODB_DB || "jc",
}

export const config = {
    PORT: process.env.PORT || 4000,
    MONGODB_URI: `mongodb://${configDB.MONGODB_HOST}/${configDB.MONGODB_DATABASE}`
};

export const host = ''
