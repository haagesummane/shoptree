import React, {Component} from 'react';
import CartItem from 'components/CartItem';
class Cart extends Component
{
    render()
    {
        const {cart_data} = this.props;
        const items = cart_data.items;
        if(!items)
        return(<div><h3>Cart</h3>
            <h6>Empty Cart</h6>
            </div>);
        return(
            <div><h3>Cart</h3>
            <ol>{items.map((e,i)=><li key={i}><CartItem item_data={e} qtyInc={this.props.qtyInc} qtyDec={this.props.qtyDec}/></li>)}</ol>
            </div>
        );
    }
}
export default Cart;