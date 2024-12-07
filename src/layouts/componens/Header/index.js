import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '@/assets/images';
import Button from '~/components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);

//alt + click mouse: Để trỏ nhiều dòng
// shirt+ crl : Để chọn những char còn lại đã chọn 1 list
function Header() {
    return (
        <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                <Search></Search>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button rounded>Log out</Button>
                </div>
            </div>
        </h2>
    );
}

export default Header;
