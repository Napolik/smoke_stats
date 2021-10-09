const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m2220user:m2220password@cluster0.dsjyu.mongodb.net/test?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  async function getPeople() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("test");
        const collection = db.collection("times");
        const results = await collection.find().toArray();
        console.log(results);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
