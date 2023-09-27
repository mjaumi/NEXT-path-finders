import { useFormikContext } from 'formik';
import React from 'react';
import axios from 'axios';
import { TbCameraPlus } from 'react-icons/tb';

const ImageUploader = ({
  setImageUrl,
}: {
  setImageUrl: (arg: string) => void;
}) => {
  // integration of formik hooks here
  const { setFieldValue } = useFormikContext();

  // rendering the image uploader component here
  return (
    <div>
      <label
        className='flex justify-center items-center bg-primary-light-gray w-full h-[350px] rounded-xl cursor-pointer'
        htmlFor='image-file'
      >
        <TbCameraPlus className='h-[200px] w-[200px] text-primary-dark-gray' />
      </label>
      <input
        id='image-file'
        name='imgUrl'
        type='file'
        className='hidden'
        onChange={async (e) => {
          if (e.currentTarget.files) {
            const imageData = new FormData();
            imageData.append('image', e.currentTarget.files[0] as Blob);

            // uploading the image file to imgbb here
            const { data } = await axios.post(
              `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
              imageData
            );

            setImageUrl(data.data.url);

            setFieldValue('imgUrl', data.data.url);
          }
        }}
      />
    </div>
  );
};

export default ImageUploader;
