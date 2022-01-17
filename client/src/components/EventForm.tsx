import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Form, Input, Button, Row, DatePicker, Select } from 'antd'
import { rules } from '../utils/rules';
import { IUser } from '../models/Iuser';
import { useActions } from '../hooks/useActions';
import { IEvent } from '../models/IEvents';
import { formtDate } from '../utils/date'
import { Moment } from 'moment'
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
    users: IUser[]
    submit: (event: IEvent) => void
}


const EventForm: FC<EventFormProps> = function ({ users, submit }) {
    const { fetchUsers, createEvent } = useActions();
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)
    const { user } = useTypedSelector(state => state.auth) as any;

    useEffect(() => {
        fetchUsers()
    }, [])

    function secectDate(date: Moment | null) {
        if (date) {
            setEvent({ ...event, date: formtDate(date.toDate()) })
        }
    }
    function submitForm() {
        submit({ ...event, author: user.username })
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="title event"
                name="title"
                rules={[rules.required('Please input your name')]}
            >
                <Input
                    value={event.description}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEvent({ ...event, description: e.target.value })}
                />
            </Form.Item>

            <Form.Item
                label="Date event"
                name="date"
                rules={[rules.required('Please input your name')]}

            >
                <DatePicker
                    onChange={(date) => { secectDate(date) }}
                />
            </Form.Item>
            <Form.Item>
                <Select onChange={(guest: string) => { setEvent({ ...event, guest }) }}>
                    {users.map((user, index) =>
                        <Select.Option key={index} value={user}>
                            {user}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify='end'>

                    <Button type="primary" htmlType="submit" >
                        Make
                    </Button>
                </Row>
            </Form.Item>

        </Form >

    )
}

export default EventForm