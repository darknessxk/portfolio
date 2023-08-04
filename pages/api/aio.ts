import {NextApiRequest, NextApiResponse} from "next";
import {MongodbService} from "@services/Mongodb.service";
import {env} from "@/env.mjs";
import withCachedRouted from "@helpers/withCachedRoute.helper";

export default withCachedRouted(async (req: NextApiRequest, res: NextApiResponse) => {
    await MongodbService.instance.connect()

    return {
        info: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_INFO),
        projects: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_PROJECTS),
        stack: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_STACK),
        socials: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_SOCIALS),
    }
})
