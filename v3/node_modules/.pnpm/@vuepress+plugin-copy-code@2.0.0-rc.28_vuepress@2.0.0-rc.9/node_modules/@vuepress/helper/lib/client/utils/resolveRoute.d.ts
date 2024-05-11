import type { Route, RouteMeta } from 'vuepress/client';
interface ResolvedRoute<T extends RouteMeta = RouteMeta> extends Route<T> {
    path: string;
    notFound: boolean;
}
export declare const resolveRoute: <T extends RouteMeta>(path: string, current?: string) => ResolvedRoute<T>;
export {};
