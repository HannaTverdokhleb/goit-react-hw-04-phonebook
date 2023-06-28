import PropTypes from 'prop-types';
import { useState } from 'react';
import style from 'components/SearchFilter/SearchFilter.module.css';

const SearchFilter = ({toFind}) => {

    const [ query, setQuery ] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setQuery(value);
        toFind(value);
    }
    
    return (
        <>
        <h3>Find contact by name</h3>
            <label>
                <input type="text" value={query} onChange={handleChange} placeholder="Search..." className={style.searchInput}/>
            </label>
        </>
    )
}

// class SearchFilter extends Component {
//     state = {
//         query: '',
//     }
//     handleChange = e => {
//         this.setState({ query: e.target.value });
//         this.props.toFind(e.target.value);
//     }
//     render() {
//         const { query } = this.state;
//         return (
//             <>
//             <h3>Find contact by name</h3>
//                 <label>
//                     <input type="text" value={query} onChange={this.handleChange} placeholder="Search..." className={style.searchInput}/>
//                 </label>
//             </>
//         )
//     }
// }

export default SearchFilter;

SearchFilter.propTypes = {
    toFind: PropTypes.func.isRequired
}