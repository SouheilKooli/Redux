import React from 'react';
import { connect } from 'react-redux'; 
import FilterLink from './linkFilter';
import {todolistFilters} from './Action/Actions';

const Filters = () => {

    return (
        <div>
            {/* <button className= "btn" 
            // onClick={handleEdit}
            ><i class="fas fa-edit" style={{color:'white'}}></i>Edit</button> */}
            <FilterLink filter={todolistFilters.SHOW_ALL}><i className="fas fa-clipboard-list" style={{color:'white'}}></i> All</FilterLink>
            <FilterLink filter={todolistFilters.SHOW_ACTIVE}><i className="fas fa-list-alt" style={{color:'white'}}></i>Active</FilterLink>
            <FilterLink filter={todolistFilters.SHOW_COMPLETED}><i className="fas fa-check-square" style={{color:'white'}}></i>Done</FilterLink>
        </div>
    )
}

export default connect () (Filters);
