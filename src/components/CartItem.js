import React, {Component} from 'react';
class CartItem extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {this.props.item_data.name}
                    </div>
                    <div className="col-md-2">
                        <input type="text">{this.props.item_data.qty}</input>
                    </div>
                    <div className="col-md-2">
                        <button onClick={e=>this.props.qtyInc(this.props.item_data.name)}>+</button>
                    </div>
                    <div className="col-md-2">
                        <button onClick={e=>this.props.qtyDec(this.props.item_data.name)}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CartItem;