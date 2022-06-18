<<<<<<< HEAD
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
=======
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
>>>>>>> 599f551411a7bc06d1ca96e6f8177b2e180d1580
