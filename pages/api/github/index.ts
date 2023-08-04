import type { NextRequest } from 'next/server'
import {env} from "@/env.mjs";
import {NextResponse} from "next/server";

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    const fetchRes = await fetch("https://api.github.com/user", {
        headers: {
            "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const data = await fetchRes.json();


    return NextResponse.json(
        data,
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
            }
        }
    )
}
