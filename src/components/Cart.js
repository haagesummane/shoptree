import React, {Component} from 'react';
import CartItem from 'components/CartItem';
class Cart extends Component
{
    render()
    {
        const {cart_data,items_data} = this.props;
        
        const items = cart_data;
        
        if(!items || Object.values(cart_data).length==0)
        return(<div><h3>Cart</h3>
            <h6>Empty Cart</h6>
            </div>);
        
        var keys = Object.keys(items);
        var values = Object.values(items);
        var itdata = [];
        console.log(itdata)
        for(var i=0;i<keys.length;i++)
            if(values[i]>0)
                itdata.push([keys[i],values[i]]);
        return(
            <div><h3>Cart</h3>
            <ol>{itdata.map((e,i)=><li key={i}><CartItem item_data={e} all_items_data={items_data} qtyInc={this.props.qtyInc} 
            qtySet={this.props.qtySet} qtyDec={this.props.qtyDec}/></li>)}</ol>
            </div>
        );
    }
}
export default Cart;