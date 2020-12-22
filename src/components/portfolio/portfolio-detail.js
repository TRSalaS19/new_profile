import React, { Component } from 'react';
import axios from 'axios';

import PortfolioImage from "../portfolio/portfolio-images";

export default class PortfolioDetail extends Component {
  constructor(props){
    super(props);

    this.state ={
      portfolioItem: {}
    }
  }

  UNSAFE_componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://gustavosalas.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        {withCredentials: true}
        )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        })
      })
      .catch(error => {
        console.log('getPortfolioItem', error);
      });
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

  //   return (
  //     <div className="portfolio-detail-container">
  //       <h2>{name}</h2>
  //       <PortfolioImage img ={thumb_image_url} />
  //       <div className="conent">
  //         <p>{description}</p>
  //       </div>
  //     </div>
  //   );

  const bannerStyles = {
    backgroundImage: "url(" + banner_image_url + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }

  const logoStyle ={ 
    width: "200px"
  }

  return (
    <div className="portfolio-detail-container">
      <div className="banner" style={bannerStyles}>
        <img src={logo_url}  style={logoStyle} />
      </div>

      <div className="portfolio-detail-description-wrapper">
        <div className="description">{description}</div>
      </div>

      <div className="bottom-content-wrapper">
        <a href={url} className="site-link" target="_blank">
          Visit {name}
        </a>
      </div>
    </div>
  )
  }
}