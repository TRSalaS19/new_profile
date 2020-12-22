import React from 'react';

const PortfolioImages = props => {
  return (
    <div className="featured-portfolio-image-wrapper">
      <img src={props.img} />
    </div>
  )
}

export default PortfolioImages;