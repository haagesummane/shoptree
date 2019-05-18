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
        this.state = {data:[],cart_data:[],categories:[]}
        
        this.setCartData = this.setCartData.bind(this);
        this.getData();
    }
    setDisplayCatergory(category_name)
    {
        ;
    }
    setCartData(cart_data)
    {
        this.setState({cart_data});
    }
    processData(data)
    {
        var categories ={};
        data.map(e=> categories[e.category]=e.category);
        var categories_lst = Object.values(categories);
        this.setState({data,categories});
    }
    getData()
    {
        var data_url = this.props.data_url||"http://192.168.1.161:5000/api/products";
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
        const {data,cart_data} = this.state;
        console.log('data',this.state);
        if(!data.length)
        return(<div><h4>Fetching Data ...</h4></div>)
        return(
            <div className="AppBody"><h1 className="pagetitle">Shoptree Cart</h1>
            <div className="content">
            <Categories className="bodyitem" data={data}/>
            <DisplayArea className="bodyitem" data={data} />
            <Cart className="bodyitem" cart_data={cart_data}/>
            </div>
            </div>
        );
    }
}
export default AppBody;