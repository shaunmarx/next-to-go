import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../../layout';
import { compose } from 'recompose';
import NextToGoPanel from '../../containers/NextToGoPanel';

const { DefaultLayout } = Layout;
class RacesPage extends React.Component {  
    render(){
        let { className } = this.props;
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