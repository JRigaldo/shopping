import React, {Component} from 'react';
import axios from 'axios';
    
class Products extends Component {
    constructor() {
        super();
        this.state = { products: [], loading: true};
    }
    
    componentDidMount() {
        this.getProducts();
    }
    
    getProducts() {
       axios.get(`/api/products`).then(products => {
           this.setState({ products: products.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Liste des produits</span>Created with <i
                                className="fa fa-heart"></i> by Joe</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.products.map(product =>
                                    <div className="col-md-10 offset-md-1 row-block" key={product.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={product.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{product.name}</h4>
                                                        <p>{product.name}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href="#" className="btn btn-default">Acheter</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default Products;
