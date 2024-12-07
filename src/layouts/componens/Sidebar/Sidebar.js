import classNames from 'classnames/bind';

import { config } from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupActiveIcon, LiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    item={<HomeIcon></HomeIcon>}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    item={<UserGroupActiveIcon></UserGroupActiveIcon>}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    item={<LiveIcon></LiveIcon>}
                ></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
