import React, { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import className from 'classnames/bind';
import { Cancel } from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/app/components/Popper';
import AccountItem from '@/app/components/AccountItem';
import { SearchIcon } from '@/app/components/Icons';
import { useDebounce } from '@/hooks';
import * as searchServices from '@/apiServices/searchServices'

const cx = className.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current?.focus(); //Focus input when clear text
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced)
      setSearchResult(result)

      setLoading(false);
    }

    fetchApi()
  }, [debounced]);

  

  return (
    <TippyHeadless
      interactive
      visible={showResult && searchResult.length > 0}
      render={attrs => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {searchResult.map(result => (
              <AccountItem key={result.id} data={result} />
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
          onChange={(e: any) => setSearchValue(e.target.value)}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onFocus={() => setShowResult(true)}
        />
        {searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <Cancel sx={{ fontSize: '16px' }} />
          </button>
        )}
        {loading && (
          <div className={cx('loading')}>
            <ClipLoader color="grey" loading={true} size={14} />
          </div>
        )}
        <button className={cx('search-btn')}>
          <SearchIcon className={undefined} />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
