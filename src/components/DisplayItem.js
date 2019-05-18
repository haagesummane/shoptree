import React, {Component} from 'react';
class DisplayItem extends Component
{
    render()
    {
        const {img_base_url,data} = this.props;
        const {id,name,image} = data;
        
        return(
            <div style={{margin:'5px',display:'flex',flexDirection:'column'}}>
                <img style={{height:'100px',width:'180px'}} src={img_base_url+image} alt={name}/>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <span>{name}</span>
                    <button onClick={e=>this.props.qtyInc(id)}>+</button>
                    <button onClick={e=>this.props.qtyDec(id)}>-</button>
                    </div>
            </div>
        );
    }
}
export default DisplayItem;