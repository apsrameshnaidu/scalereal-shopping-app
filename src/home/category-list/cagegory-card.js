import React from "react";
import { withRouter } from 'react-router-dom';

class CategoryCard extends React.Component {

  goToProductList = () => {
    this.props.history.push(`/category/${this.props.category?.id}/products`);
  }

  render() {
    return (
      <div style={{ "cursor": "pointer", "borderColor": "black" }}
        className="card bg-outline mb-4 justify-content-center text-center mt-5" onClick={this.goToProductList}>
        <div className="card-body">
          <h5 className="card-title text-body text-primary mb-0">{this.props.category?.orgName}</h5>
        </div>
      </div>
    )
  }
}

export default withRouter(CategoryCard);