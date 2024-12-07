// quản lý các phần tử xuất hiện nổi trên giao diện, như tooltip, dropdown, popover, menu ngữ cảnh, và các phần tử khác
//Để  định vị phần tử nổi bên trên, bên dưới, bên trái, hoặc bên phải của phần tử tham chiếu.
//Nó tự động điều chỉnh vị trí khi không gian hiển thị không đủ (chẳng hạn, nếu phần tử không vừa với màn hình khi ở vị trí mặc định
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
