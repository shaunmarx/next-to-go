import { schema, normalize } from 'normalizr';
import { isRaceImminent } from '../selectors';

const getMeetingId = ({ meetingDate, raceType, venueMnemonic }) => `${meetingDate}/meetings/${raceType}/${venueMnemonic}`;

const getRaceId = ( {meeting, raceNumber, ...rest}) => `${getMeetingId(meeting)}/races/${raceNumber}`;

const meetingSchema = new schema.Entity('meetings', {}, {
    idAttribute: getMeetingId
});

const racesSchema = new schema.Entity('races', {
    meeting: meetingSchema
}, {
    processStrategy: (value, parent, key) => {
        value.imminent = isRaceImminent(value);
        value.id = getRaceId(value);
        return value;
    }
});

const racesListSchema = new schema.Array(racesSchema);

export default {
    racesList : (arr) => normalize(arr, racesListSchema),
    race: (race) => normalize(race, racesSchema),
    meeting: (meeting) => normalize(meeting, meetingSchema)
}