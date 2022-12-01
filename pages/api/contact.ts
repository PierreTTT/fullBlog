

import { MongoClient } from 'mongodb';

const handler = async (req: any, res: any) => {
    const { email, name, message } = req.body;
    if (req.method === 'POST') {
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({
                message: 'Invalid input'
            });

            return;
        }
    }
    const newMessage = {
        email, name, message
    }

    console.log(newMessage);

    const URL = "";

    let client;
    try {
        client = await MongoClient.connect(URL)

    } catch (error) {
        res.status(500).json({ message: 'Could not connect to DB' });
        return;
    }

    const db = client.db();
    try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;

    } catch (e) {
        client.close()
        res.status(500).json({ message: 'Storing message failed!' })
        return;
    }

    client.close();
    return res.status(201).json({
        message: " Successfully stored message!"
    })
}

export default handler;