import DefaultLayout from '../components/Default';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

var mapStateToProps = (state) => { 
    return state;
};

const enhance = compose(connect(mapStateToProps),
    setDisplayName("DefaultLayoutContainer")
)

export default enhance(DefaultLayout);
