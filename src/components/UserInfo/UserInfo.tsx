import React from 'react';
import Avatar from '../shared/Avatar';

// declaring the user info datatype here
interface IUserInfo {
  imgUrl: string;
  userName: string;
  timestamp: string;
}

const UserInfo = ({ imgUrl, userName, timestamp }: IUserInfo) => {
  // rendering user info component here
  return (
    <div className='flex items-center space-x-3'>
      <Avatar src={imgUrl} />

      <div>
        <p className='text-sm text-primary-black font-semibold'>{userName}</p>
        <span className='block text-xs text-primary-dark-gray'>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
