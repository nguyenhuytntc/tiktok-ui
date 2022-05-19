import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" alt="avata" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van Huy</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenvanhuy</span>
            </div>
        </div>
    );
}

export default AccountItem;
