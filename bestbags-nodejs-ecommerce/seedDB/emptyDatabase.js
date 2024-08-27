const mongoose = require('mongoose');


const dbUri = process.env.MONGO_URI || 'mongodb+srv://mehdiismaaili498:mongopass123@mongodb-service:27017/ecommerce?retryWrites=true&w=majority';


async function emptyCollections() {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database');

    // Define the collections to be emptied
    const collections = ['categories', 'products'];

    for (const collectionName of collections) {
      const result = await mongoose.connection.collection(collectionName).deleteMany({});
      console.log(`Emptied ${collectionName} documents: Deleted ${result.deletedCount} documents.`);
    }

    mongoose.disconnect();
    console.log('Disconnected from the database');
    process.exit(0);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
}

// Run the script
emptyCollections();
