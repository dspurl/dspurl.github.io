import { resolveRoute as _resolveRoute } from 'vuepress/client';
import { isLinkAbsolute } from '../../shared/index.js';
const FAKE_HOST = 'http://.';
export const resolveRoute = (path, current) => {
    if (isLinkAbsolute(path) || typeof current !== 'string')
        return _resolveRoute(path);
    // Inner relative path
    const loc = current.slice(0, current.lastIndexOf('/'));
    return _resolveRoute(new URL(`${loc}/${encodeURI(path)}`, FAKE_HOST).pathname);
};
