import {Redis} from 'ioredis';
require('dotenv').config();

console.log(process.env.REDIS_URL);
const redisClient = () => {
    if(process.env.REDIS_URL){
        console.log(`Redis connected`);
        return process.env.REDIS_URL;
    }
    throw new Error('Redis connection failed');
};

export const redis = new Redis(redisClient());


