import {NextApiRequest, NextApiResponse} from "next";
import {env} from "@/env.mjs";
import withCachedRouted from "@helpers/withCachedRoute.helper";
import {MongodbService} from "@services/Mongodb.service";

export default withCachedRouted(async (_req: NextApiRequest, _res: NextApiResponse) => {
    await MongodbService.instance.connect()

    return {
        info: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_INFO),
        projects: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_PROJECTS),
        stack: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_STACK),
        socials: await MongodbService.instance.getItemsFromCollection(env.MONGODB_COLLECTION_SOCIALS),
    }
})
