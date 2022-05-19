import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '../Wrapper';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return (
        <Tippy
            interactive
            visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <p className={cx('search-title')}>Account</p>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
