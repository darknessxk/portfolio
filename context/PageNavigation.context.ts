import { create } from "zustand"
import {MutableRefObject} from "react";

export type PageNavigationRefType = MutableRefObject<HTMLElement | null>;

export type PageNavigationStore = {
    refs: Map<string, PageNavigationRefType>
    setRef: (key: string, ref: PageNavigationRefType) => void
    getRef: (key: string) => PageNavigationRefType | undefined
    removeRef: (key: string) => void
    clearRefs: () => void
}

export const usePageNavigation = create<PageNavigationStore>((set, get) => ({
    refs: new Map<string, PageNavigationRefType>(),
    setRef: (key: string, ref: PageNavigationRefType) => {
        get().refs.set(key, ref)
        set({ refs: get().refs })
    },
    getRef: (key: string) => get().refs.get(key),
    removeRef: (key: string) => {
        get().refs.delete(key)
        set({ refs: get().refs })
    },
    clearRefs: () => {
        get().refs.clear()
        set({ refs: get().refs })
    }
}))

export default usePageNavigation