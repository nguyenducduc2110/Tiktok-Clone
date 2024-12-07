import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

//Thường thì 1 trang web các button sẽ có theme tương tự nhau nên làm ntn để ko phải tạo nhiều nút component
//Mà chỉ cần truyền thuộc tính css, action, size...(là các className.Còn action là các props truyền function vào)
// của từng nút khi gọi thì 1 component button có thể dùng chung
//ở vs nhiều nút vs nhiều chức năng và hình dạng khác nhau.
function Button({
    to,
    href,
    primary = false,
    outline = false,
    children,
    small,
    large,
    text,
    disable,
    rounded,
    className,
    onClick,
    ...passProps
}) {
    //Làm ntn vì component jSx phải viết hoa
    let Comp = 'button';
    const props = {
        //props trong TH này đc hiểu là biến tham chiếu đến 1 loạt các param rest thôi
        onClick,
        ...passProps,
    };
    // Remove event listener when btn is disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    //chuyển đến các componet local in project thì dùng thẻ LInk
    if (to) {
        props.to = to;
        Comp = 'Link';
        //chuyển đến resource bên ngoài dùng tag a
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    //cách này giúp thẻ Comp nhìn ngắn gọn hơn
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        className,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
