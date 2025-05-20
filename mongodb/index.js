const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://mongo:mongo@cluster0.vh6orv6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const collection = client.db("sample_airbnb").collection("listingsAndReviews");

        const pipeline = [
            {
                $match: {
                    accommodates: { $gt: 4 },
                    price: { $lt: 500 },
                    amenities: "Hair dryer"
                }
            },
            {
                $sort: { price: 1 }
            },
            {
                $project: {
                    name: 1,
                    amenities: 1,
                    price: 1,
                    images: 1,
                    description: 1
                }
            },
            {
                $limit: 20
            }
        ];

        const agg = await collection.aggregate(pipeline).toArray();
        console.log(agg);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
