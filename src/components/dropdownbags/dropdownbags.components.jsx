import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDropdownBags } from '../../redux/dropdownbags/dropdownbags.selector';

import DropdownList from '../dropdown-list/dropdown-list.components';

import './dropdownbags.styles.scss';

const DropDownBags = ({bags})=>(

            <div className='bag'>
                {
                bags.map(({ id, subtitle, linkUrl }) => (
                <DropdownList key={id} subtitle={subtitle} linkUrl={linkUrl}/>))
                }
            </div>
        );

const mapStateToProps = createStructuredSelector({
    bags: selectDropdownBags
})


export default connect(mapStateToProps)(DropDownBags);