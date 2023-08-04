import {MongoClient, ServerApiVersion} from 'mongodb'
import { env } from '@/env.mjs'

export class MongodbService {
    private static _instance: MongodbService;
    private _client: MongoClient;

    private constructor() {
        this._client = new MongoClient(env.MONGODB_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })
    }

    public static get instance(): MongodbService {
        if (!this._instance) {
            this._instance = new MongodbService()
        }

        return this._instance
    }

    public async connect(): Promise<void> {
        await this._client.connect()
    }

    public get client(): MongoClient {
        return this._client
    }

    public async disconnect(): Promise<void> {
        await this._client.close()
    }

    public async getItemsFromCollection(collection: string, query: any = {}): Promise<any[]> {
        const Database = this._client.db(env.MONGODB_DB);
        const Collection = Database.collection(collection);
        const Items = await Collection.find(query);

        if (!await Items.hasNext()) {
            return []
        }

        return await Items.toArray()
    }
}