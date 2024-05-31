import mongoose from 'mongoose';

const connectDb = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect("mongodb+srv://DevAJoin:Arun.Kjojo2786@cluster0.slfxf.mongodb.net/e-team?retryWrites=true&w=majority&appName=Cluster0");
    console.log(
      'You successfully connected to MongoDB!',
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    // Uncomment the next line if you want the process to exit on failure
    // process.exit(1);
  }
};

export default connectDb;