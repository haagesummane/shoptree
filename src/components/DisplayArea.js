import React, {Component} from 'react';
import DisplayItem from 'components/DisplayItem';
class DisplayArea extends Component
{
    
    
    render()
    {
        const {img_base_url} = this.props;
        const pd = this.props.data;
        const {data,cart_data,categories,displaycat} = pd;
        const cname = displaycat||"main";
        
        var dispay_items = data.filter(v=>v.category===cname);
        return(
            <div style={{width:'80%'}}><h4>Category: {cname}</h4>

            <div style={{margin:'10px',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>                
                {dispay_items.map((v,i)=><DisplayItem key={i} data={v} qtyInc={this.props.qtyInc} qtyDec={this.props.qtyDec}  img_base_url={img_base_url}/>)}
            </div>
            </div>
        );
    }
}
export default DisplayArea;