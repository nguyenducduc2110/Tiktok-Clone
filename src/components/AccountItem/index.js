import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.username}`} className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={data.firstName}
                alt={data.lastName}
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.lastName}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </p>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: propTypes.object.isRequired,
};

export default AccountItem;
