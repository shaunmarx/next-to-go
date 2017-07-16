import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Layout from '../../../layout';
import * as actions from '../../actions';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import NextToGoPanel from '../../containers/NextToGoPanel';

const { DefaultLayout } = Layout;
class RacesPage extends React.Component {
    componentDidMount () {
        let { dispatch, user } = this.props;
    }
    
    render(){
        let { className, dispatch } = this.props;
        return (
            <DefaultLayout className={className}>
                <NextToGoPanel />
            </DefaultLayout>
        )
    }
}

const mapStateToProps = state => state;

const enhance = compose(
    connect(mapStateToProps)
);

export default enhance(RacesPage);