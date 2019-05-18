import React, {Component} from 'react';
import Cart from 'components/Cart';
import Categories from 'components/Categories';
import DisplayArea from 'components/DisplayArea';
import local_data from 'resources/LocalData';
import 'resources/css/AppBody.css'
class AppBody extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {data:[],cart_data:{},categories:[],displaycat:''}
        
        this.setCartData = this.setCartData.bind(this);
        this.setDisplayCategory = this.setDisplayCategory.bind(this);
        this.img_base_url = 'http://192.168.1.161:5000/';
        this.base_data_url = 'http://192.168.1.161:5000/api/products';
        this.items_data = {};
        this.getData();
        this.qtyInc = this.qtyInc.bind(this);
        this.qtyDec = this.qtyDec.bind(this);
        this.qtySet = this.qtySet.bind(this);

    }
    qtyInc(qtyId)
    {
        var cart_data = this.state.cart_data;
        var val = cart_data[qtyId];
        val = val?val+1:1;
        cart_data[qtyId] = val;
        this.setState({cart_data})
    }
    qtyDec(qtyId)
    {
        var cart_data = this.state.cart_data;
        var val = cart_data[qtyId];
        val = val?val-1:1;
        val = val<0?0:val;
        cart_data[qtyId] = val;
        this.setState({cart_data})
    }
    qtySet(qtyId,num)
    {
        var cart_data = this.state.cart_data;
        cart_data[qtyId] = num;
        this.setState({cart_data})
    }
    setDisplayCategory(category_name)
    {
        console.log(category_name);
        var displaycat = this.state.categories[category_name];
        if(displaycat)
            this.setState({displaycat})
    }
    setCartData(cart_data)
    {
        this.setState({cart_data});
    }
    processData(data)
    {
        var categories ={};
        data.map(e=> categories[e.category]=e.category);
        //var categories_lst = Object.values(categories);
        data.map(e=>this.items_data[e.id] = e);
        this.setState({data,categories});
    }
    getData()
    {
        var data_url = this.props.data_url||this.base_data_url;
        console.log('Fetching data from:',data_url);
        fetch(data_url).then(response=>response.json()).then(data=>{
            data = data.data;
            this.processData(data);
            
        } ).catch(e=>{
            console.log('Error fetching data',e);
            const data = local_data.data;
            console.log('Loading local data');
            this.processData(data);
        })
    }
    render()
    {
        const {cart_data,data} = this.state;
        var items_data = this.items_data;
        console.log('data',items_data);
        if(!data.length)
        return(<div><h4>Fetching Data ...</h4></div>)
        return(
            <div className="AppBody"><h1 className="pagetitle">Shoptree Cart</h1>
            <div className="content">
            <Categories className="bodyitem" data={data} setDisplayCategory={this.setDisplayCategory}/>
            <DisplayArea className="bodyitem" data={this.state} img_base_url={this.img_base_url}  qtyInc={this.qtyInc} qtyDec={this.qtyDec} qtySet={this.qtySet}/>
            <Cart className="bodyitem" items_data={items_data} cart_data={cart_data} qtyInc={this.qtyInc} qtyDec={this.qtyDec} qtySet={this.qtySet} />
            </div>
            </div>
        );
    }
}
export default AppBody;