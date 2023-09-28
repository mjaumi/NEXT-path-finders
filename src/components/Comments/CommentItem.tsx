import React from 'react';
import Avatar from '../shared/Avatar';

const CommentItem = ({ comment }: { comment: IComment }) => {
  // destructuring the comment object here
  const { comment: commentText, createdBy } = comment;

  // rendering comment item component here
  return (
    <div className='flex items-start space-x-2'>
      <div>
        <Avatar
          src={
            createdBy.imgUrl
              ? createdBy.imgUrl
              : 'https://friendkit.cssninja.io/assets/img/avatars/jenna.png'
          }
        />
      </div>

      <div className='bg-primary-light-gray px-3 py-2 rounded-xl w-fit text-sm text-primary-black'>
        <h6 className='font-semibold'>{createdBy.userName}</h6>
        <p>{commentText}</p>
      </div>
    </div>
  );
};

export default CommentItem;
