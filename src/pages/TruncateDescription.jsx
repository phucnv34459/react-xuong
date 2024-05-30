import React from 'react';

const TruncateDescription = ({ description, maxLength }) => {
  const truncatedDescription = description.length > maxLength 
    ? `${description.substring(0, maxLength)}...` 
    : description;

  return (
    <p>{truncatedDescription}</p>
  );
};

export default TruncateDescription;
