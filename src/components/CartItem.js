import React, {Component} from 'react';
class CartItem extends Component
{
    render()
    {
        const {item_data,all_items_data} = this.props;
        
        var id = item_data[0];
        var qty = item_data[1];

        return(
            <div  style={{display:'flex',flexDirection:'column'}}>
                    <div>
                        <h5>{all_items_data[id].name}</h5>
                        
                    </div>
                  
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <h6> qty:{qty}</h6>
                        <div ><button onClick={e=>this.props.qtyInc(id)}>+</button></div>
                         <div ><button onClick={e=>this.props.qtyDec(id)}>-</button></div>
                   </div>
           </div>
        );
    }
}
export default CartItem;