import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from './Search';
import { Link } from 'react-router-dom';
import configs from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    //Login
    const currentUser = () => {};

    //Handle logic
    const handleMenuChange = (item) => {
        console.log(item);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nguyenvana',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/settings',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={configs.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>

                            <Button primary>Log in</Button>
                        </>
                    )}
                    <>
                        <Menu
                            items={currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? (
                                <Image
                                    src="https://lh3.googleusercontent.com/ogw/ADea4I4g41IhDUbJjGfkH8wUWIHJ_q06ZwTeyaB95nLHvA=s32-c-mo"
                                    className={cx('user-avatar')}
                                    alt="Nguyen van A"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            )}
                        </Menu>
                    </>
                </div>
            </div>
        </header>
    );
}

export default Header;
