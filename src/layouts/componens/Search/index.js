import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css'; // Nhớ import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

import * as searchService from '~/services/searchService';
import styles from './Search.module.scss';
import AccountItem from '../../../components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
//debounce nhận 1 arrow function
//value là các char nhập từ bàn phím
const debouncedSearch = debounce((value, setSearchResult, setLoading) => {
    if (value.trim() === '') {
        return;
    }

    // request
    //     .get(`/users/search?q=${encodeURIComponent(value)}&type=less`)
    //     .then(function (response) {
    //         setSearchResult(response.data.data);
    //         setLoading(false);
    //         console.log(response.data.data);
    //         const now = new Date();
    //         console.log(now); // Hiển thị thời gian hiện tại
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    //Bên gọi cũng cần dùng async để các nơi gọi fetch cũng bất đồng bộ
    const fetchApi = async () => {
        setLoading(true);
        const result = await searchService.search();
        setSearchResult(result);
        setLoading(false);
    };
    fetchApi();
}, 700);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    //chỉ dùng để ref đến focus để thêm attribute cho input
    const inputRef = useRef();

    // //Mỗi lần user gõ là gọi api get data muốn find
    // //Nhưng gõ 1 ký tự thì gửi request 1 lần tạo ra nhiều request ko cần thiết xuống server
    // useEffect(() => {
    //     if (searchValue === '') {
    //         return;
    //     }
    //     //trc khi tìm cho load
    //     setLoading(true);
    //     fetch(
    //         //handle tìm char trong input là ở query BE
    //         //===>Khi dùng fetch API nên dùng encodeURIComponent để nó encode những char trùng với char của query param
    //         //khi người dùng nhập vào(?, &) thì trùng vs url và tạo ra url :search?q=&&type=less và làm comment url
    //         //Và khi dùng encodeURIComponent thì ra url:search?q=%26&type=less dưới và param q trong payload lại đc decode = & ko bị q empty
    //         `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setSearchResult(data.data);
    //             setLoading(false); //sau khi tìm xong thì tắt load
    //         });
    // }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideSearchResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            debouncedSearch(searchValue, setSearchResult, setLoading);
        }
    };
    return (
        <HeadlessTippy
            //Thuộc tính này cho phép sao chép các phần tử mà thẻ Tippy bọc hay ko
            interactive="true"
            //Nếu visible = true thì attibute render sẽ active và render ra giao diện.
            visible={showResult && searchValue.length > 0}
            appendTo={() => document.body} // Đưa tooltip vào body
            //thuộc tính này dùng để render component trong thẻ tooltip khi visible = true
            //attrs chứa info của tooltip(dialog): vị trí mà tooltip đó hiển thị,...
            render={(attrs) => (
                <div
                    className={cx('search-result')}
                    //tabIndex="0" khi nhấn tab thì chuyển hướng đến các component có tooltip và hiện lên thông báo
                    //=-1 tắt
                    //=1, = 2, //Khi nhấn tab chuyển hướng theo thứ tự index.
                    tabIndex="-1"
                    //Đoạn này chính là liệt kê các info tooltip của thuộc tính
                    //VD:placement="bottom"//thì thẻ div này sẽ hiển thị ở dưới
                    {...attrs}
                >
                    {/* Quản lý tooltip gới ý search */}

                    <PopperWrapper>
                        <h4 className={cx('search-tittle')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideSearchResult}
        >
            <div className={cx('search')}>
                <input
                    // attirbute này tham chiếu đến thuộc tính focus
                    ref={inputRef}
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onFocus={() => setShowResult(true)}
                ></input>
                {searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    ></FontAwesomeIcon>
                )}
                <HeadlessTippy content="Tìm kiếm" placement="right">
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </HeadlessTippy>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
