import React, {
  Component
} from 'react';

class DayImageContainer extends Component {


  render() {
    if (this.props.showImageDay) {
      return (<div></div>);
    }
      return (
        <div className="image-content">
          <div>
            <h2>Image of the day</h2>
          </div>
          <p className="image-day">
            <img className="image" src="http://placehold.it/1200x500" />
          </p>
        </div>
      );

  }
}


DayImageContainer.propTypes = {
  showImageDay: React.PropTypes.bool
};

export default DayImageContainer;
