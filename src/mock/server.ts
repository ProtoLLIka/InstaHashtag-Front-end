export async function get(url: string): Promise<any> {
    let res = {
        data: [
            { "userId": "5041107842", "postCount": 12 },
            { "userId": "15365569833", "postCount": 9 },
            { "userId": "3179716602", "postCount": 7 },
            { "userId": "5562183664", "postCount": 7 },
            { "userId": "15938114624", "postCount": 6 },
            { "userId": "6831256078", "postCount": 6 },
            { "userId": "3951153255", "postCount": 6 },
            { "userId": "2846102644", "postCount": 5 },
            { "userId": "1721095605", "postCount": 5 },
            { "userId": "3881064329", "postCount": 5 },
            { "userId": "1911381353", "postCount": 4 },
            { "userId": "42452832686", "postCount": 4 },
            { "userId": "1952684334", "postCount": 3 },
            { "userId": "2245074937", "postCount": 3 },
            { "userId": "2004681206", "postCount": 3 },
            { "userId": "7958829183", "postCount": 3 },
            { "userId": "2233821369", "postCount": 3 }
        ]
    }
    await new Promise(done => setTimeout(() => done(), 3000));

    return res;
}