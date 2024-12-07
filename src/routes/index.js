import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import { config } from '~/config';

export const publicRoutes = [
    { path: config.routes.home, component: Home }, //biến component ref đến component HOme
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

export const privateRoutes = [];
