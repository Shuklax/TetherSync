import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        //console.log(conn);
        console.log(`MongoDB connections ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}