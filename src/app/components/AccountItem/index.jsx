import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { CheckCircle } from '@mui/icons-material';
import Image from '@/app/components/Image';
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <div>{data.full_name}</div>
          {data.tick && (
            <CheckCircle
              sx={{ marginLeft: '6px', color: 'rgb(32, 213, 236)' }}
            />
          )}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
