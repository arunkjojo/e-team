import { CorsOptions } from 'cors';

const allowedOrigins = ['http://localhost:3000', 'https://localhost:3000']; // Update with your allowed origins

const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

export default corsOptions;
