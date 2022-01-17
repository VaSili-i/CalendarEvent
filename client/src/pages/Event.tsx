import { Button, Row } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvents';

const Event = function () {
    const [modalVisible, setModalVisible] = useState(false);
    const { users, events } = useTypedSelector(state => state.event);
    const { createEvent, fetchEvents } = useActions()
    const { user } = useTypedSelector(state => state.auth) as any
    let username = user.username
    useEffect(() => {
        fetchEvents(username)
    }, [])

    function addNewEvent(event: IEvent) {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <Layout>

            <EventCalendar events={events} />
            <Row justify='center'>
                <Button onClick={() => { setModalVisible(!modalVisible) }}>add event</Button>
            </Row>
            <Modal
                title="add event"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm users={users} submit={event => addNewEvent(event)} />
            </Modal>
        </Layout>
    )
}
export default Event