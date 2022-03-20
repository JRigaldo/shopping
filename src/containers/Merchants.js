import React, {Component} from 'react';
import axios from 'axios';
    
class Merchants extends Component {
    constructor() {
        super();
        this.state = { merchants: [], loading: true};
    }
    
    componentDidMount() {
        this.getMerchants();
    }
    
    getMerchants() {
       axios.get(`/api/merchants`).then(merchants => {
           this.setState({ merchants: merchants.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Liste des marchands</span>Created with <i
                                className="fa fa-heart"></i> by Joe</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.merchants.map(merchant =>
                                    <div className="col-md-10 offset-md-1 row-block" key={merchant.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={merchant.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{merchant.name}</h4>
                                                        <p>{merchant.name}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href={merchant.productsUrl} className="btn btn-default">Voir les produits</a>
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
export default Merchants;
