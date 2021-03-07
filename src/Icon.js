import React from 'react';

export default function Icon({ name, brand })
{
  const stylesClasses = (brand) ? `fab fa-${name}` : `fas fa-${name}`
  return (
    <i className={stylesClasses} ></i>
  )
}
