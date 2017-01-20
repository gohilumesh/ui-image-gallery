import React, {Component} from 'react';


class ImageGalleryComponent extends Component {

  render() {
    if (!this.props.showGallery) {
      return (<div></div>);
    }
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
              {this.oppurtunityImageList()}
            </ul>
          </div>
        </div>
      );
  }

  curosityImageList() {
    return this.props.curosityImageList.map((imageList) => {
        return (
            <li
                key={imageList.id}
            >
                <img className="image" src={imageList.url} />
                <a className="image-date" href="#">{imageList.date}</a>
            </li>
        );
    });
  }

  oppurtunityImageList() {
    return this.props.oppurtunityImageList.map((imageList) => {
        return (
            <li
                key={imageList.id}
            >
                <img className="image" src={imageList.url} />
                <a className="image-date" href="#">{imageList.date}</a>
            </li>
        );
    });
  }

}


ImageGalleryComponent.propTypes = {
  showGallery: React.PropTypes.bool,
  oppurtunityImageList: React.PropTypes.array,
  curosityImageList: React.PropTypes.array
};

export default ImageGalleryComponent;
