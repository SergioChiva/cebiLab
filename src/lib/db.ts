import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      console.error('MONGODB_URI no está definida');
      throw new Error('MONGODB_URI no está definida');
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoUri, {
        bufferCommands: false,
      });
      isConnected = true;
      console.log('✅ Conectado a MongoDB Atlas');
    }
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
    isConnected = false;
    throw error;
  }
}
