import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, item }) {
    return (
        //Thẻ NavLink = Link và đồng thời thêm 1 chức năng khi nhấn vào thẻ này
        //Thì nó gửi request trong brower rồi so sánh url trên brower nếu == path(to={to}) của thẻ NavLink này
        //==>Thì nó thêm class"active" tại thẻ này để chỉ định client nhấn thẻ này và class active để css màu là nhấn
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
        >
            {item} <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: propTypes.string.isRequired,
    to: propTypes.string.isRequired,
    item: propTypes.node.isRequired,
};
export default MenuItem;
