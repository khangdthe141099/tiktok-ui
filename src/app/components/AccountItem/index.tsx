import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { CheckCircle } from '@mui/icons-material';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
            className={cx('avatar')} 
            src="https://i.pinimg.com/564x/74/1a/6a/741a6a7c426f116e995c99acc9629c21.jpg" 
            alt="Khang"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <div>Nguyen Van A</div>
                    <CheckCircle sx={{marginLeft: '6px', color: 'rgb(32, 213, 236)'}}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;