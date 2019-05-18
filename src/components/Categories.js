import React, {Component} from 'react';
class Categories extends Component
{
    render()
    {
        const {data} = this.props;
        
        if(!data)
        return(<div>
            <h5>No Categories Data Found</h5>
        </div>);

        var categories ={};
        data.map(e=> categories[e.category]=e.category);
        var categories_lst = Object.values(categories);

        
        return(
            <div>Categories
                <ol>
                    {categories_lst.map((e,i)=><li key={i}>{e}</li>)}
                </ol>
            </div>
        );
    }
}
export default Categories;