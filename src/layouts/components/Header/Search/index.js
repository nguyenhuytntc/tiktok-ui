import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '~/services/searchService';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { IconSearch } from '~/components/Icons';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();

        // request
        //     .get('users/search', {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        // fetch(
        //     `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        //         debounced,
        //     )}&type=less`,
        // )
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClickSearchResult = () => {
        setSearchResult([]);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves
        //this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <p className={cx('search-title')}>Account</p>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                    onClick={handleClickSearchResult}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts, videos and more"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <IconSearch />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
