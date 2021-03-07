import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="animate__slideInLeft card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
