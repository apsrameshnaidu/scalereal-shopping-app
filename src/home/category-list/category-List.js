import React from 'react';
import { connect } from 'react-redux';
import CategoryCard from "./cagegory-card";

class CategoryList extends React.Component {

    renderCategories = () => {
        let categories = this.props.categories?.map(category => {
            return (
                <div className="col-4" key={category?.id}>
                    <CategoryCard category={category} />
                </div>
            );
        })
        return categories;
    }

    goToAddressForm = () => {
        this.props.history.push("/product/addressForm");
    }

    render() {
        if (this.props.categories?.length) {
            return (
                <React.Fragment>
                    <div className="container mt-2 mb-5">
                        <h1 className="text-center mb-3">Category List</h1>
                        <div className="row justify-content-center">
                            <this.renderCategories />
                        </div>
                    </div>
                </React.Fragment>
            );
        } else return <p>No Data ..!</p>
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoryList);