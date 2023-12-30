'use client';
import Image from 'next/image';
import React from 'react';

const NextjsImage = (photo, imageProps, wrapperStyle) => {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
};

export default NextjsImage;
