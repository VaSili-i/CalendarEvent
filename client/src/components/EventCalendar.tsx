import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEvent } from '../models/IEvents';
import { Moment } from 'moment'
import { formtDate } from '../utils/date'

interface EventCalendarProps {
    events: IEvent[];
}


const EventCalendar: FC<EventCalendarProps> = function ({ events }) {

    function dateCellRender(value: Moment) {
        const formatedDate = formtDate(value.toDate());
        const currentDayEvents = events.filter(ev => ev.date === formatedDate);

        return (
            < div >
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div >
        );
    }

    return (
        <Calendar dateCellRender={dateCellRender} />

    );
};

export default EventCalendar