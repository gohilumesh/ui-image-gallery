import React, {
  Component
} from 'react';

import API from './services/api';
import DayImageContainer from './day-image';

import ImageGalleryComponent from './image-gallery';

class WidgetContainer extends Component {

  state = {
    curosityImageList: [],
    oppurtunityImageList: [],
    isImageGalleryDisplayed: true
  };

  handleImageOfDay = () => {
    this.setState({
      isImageGalleryDisplayed: false
    });
  }

  handleImageGallery = () => {
    this.setState({
      isImageGalleryDisplayed: true
    });
  }

  isGalleryActive(value) {
    return this.state.isImageGalleryDisplayed && value ==='gallery' ? 'tab active': 'tab';
  }

  isImageDayActive(value) {
    return !this.state.isImageGalleryDisplayed ? 'tab active': 'tab';
  }

  curosityImageList() {
    return this.state.curosityImageList.map((imageList) => {
        return (
            <li
                key={imageList.id}
            >
                <img className="image" src={imageList.url} />
                <a classname="image-date" href="#">{imageList.date}</a>
            </li>
        );
    });
  }

  oppurtunityImageList() {
    return this.state.oppurtunityImageList.map((imageList) => {
        return (
            <li
                key={imageList.id}
            >
                <img className="image" src={imageList.url} />
                <a classname="image-date" href="#">{imageList.date}</a>
            </li>
        );
    });
  }

  render() {
    return (
      <div>
      <div className="container">
        <h1 className="title">The Red Planet Rovers</h1>
        <div className="tabbed-container">
          <ul>
            <li className={this.isImageDayActive('image-day')} onClick={this.handleImageOfDay}>
              <a href="#">Image of the day</a>
            </li>
            <li className={this.isGalleryActive('gallery')} onClick={this.handleImageGallery}>
              <a href="#">Image Gallery</a>
            </li>
          </ul>
      </div>
    </div>

    <ImageGalleryComponent showGallery={this.state.isImageGalleryDisplayed} curosityImageList={this.state.curosityImageList}
      oppurtunityImageList={this.state.oppurtunityImageList}/>

    <DayImageContainer showImageDay={this.state.isImageGalleryDisplayed} />


  </div>
    );
  }


  getImageGallery() {
    if (this.state.isImageGalleryDisplayed) {
      return (
        <div>
          <div className="image-content">
            <div>
              <h2>Curosity : Navigation Camera</h2>
              <select className="form-control">
                <option>Camera Name</option>
              </select>
            </div>
            <ul className="image-list">
              {this.curosityImageList()}
            </ul>
          </div>

          <div className="image-content">
            <div>
              <h2>Curosity : Navigation Camera</h2>
              <select className="form-control">
                <option>Camera Name</option>
              </select>
            </div>
            <ul className="image-list">
              {this.curosityImageList()}
            </ul>
          </div>
        </div>
      );
    }
  }


  componentDidMount() {
    let widgets = new API().getImages();
    widgets.then(data => {
      this.setState({
        curosityImageList: data,
        oppurtunityImageList: data
      });
    });
  }

}


export default WidgetContainer;
