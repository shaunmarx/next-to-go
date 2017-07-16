import React from 'react';
import NextToGoPanel from '../../components/NextToGoPanel';
import { connect } from 'react-redux';
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
    races : selectors.getNextRaces(state),
    meetings: selectors.getMeetings(state)
});

export default connect(mapStateToProps)(NextToGoPanel);
