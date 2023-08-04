type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type UnionToOvlds<U> = UnionToIntersection<U extends any ? (f: U) => void : never>;

type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

type UnionToArrayHelper<T, A extends unknown[] = []> = IsUnion<T> extends true ? UnionToArrayHelper<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]> : [T, ...A];

export default UnionToArrayHelper;