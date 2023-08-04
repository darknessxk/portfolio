import type { NextRequest } from 'next/server'
import {NextResponse} from "next/server";
import {env} from "@/env.mjs";

export const config = {
    runtime: 'edge',
}

export default async function handler(_req: NextRequest) {
    const fetchRes = await fetch("https://api.github.com/user/repos", {
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
