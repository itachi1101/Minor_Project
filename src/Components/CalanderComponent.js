import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
export default function CalendarComponent() {
    return (
        <Calendar
        
            markedDates={{
                "2022-11-14":{selected:true,selectedColor:'lightgreen'},
                "2022-11-13":{marked:true,dotColor:'red'}
            }}
        />
    )
}
