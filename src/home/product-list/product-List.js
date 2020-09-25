import React from 'react';
import { connect } from 'react-redux';
import ProductCard from "./product-card";
import { Button } from 'react-bootstrap';
import { FcNext, FcPrevious } from 'react-icons/fc';

class ProductList extends React.Component {

    renderProducts = (products) => {
        let productsList = products?.map(product => {
            return (
                <div className="col-4" key={product?.id}>
                    <ProductCard product={product} />
                </div>
            );
        })
        return productsList
    }

    goToAddressForm = () => {
        this.props.history.push("/addressForm");
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const categoryId = this.props.match.params.categoryId;
        const selectedCategory = this.props.categories?.filter(category => category.id === categoryId);
        let products = selectedCategory?.length && selectedCategory[0].products;
        if (products?.length) {
            return (
                <React.Fragment>
                    <div className="container mt-2 mb-5">
                        <h1 className="text-center mb-3">Product List</h1>
                        <div className="row justify-content-center">
                            {this.renderProducts(products)}
                        </div>
                        <div className="row justify-content-right">
                            <Button
                                className=" col-2 ml-5 border-round"
                                onClick={this.goBack}
                                variant="outline-primary"
                            >
                                <FcPrevious />
                            Back
                            </Button>
                            <div className="offset-6 col-2">
                                <Button
                                    className=" border-round col-12 ml-5"
                                    variant="outline-primary"
                                    onClick={this.goToAddressForm}
                                >
                                    Next
                                <FcNext />
                                </Button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else return ''
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(ProductList);