import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useActions } from '../hooks/useActions';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector'


const LoginForm = function () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let { login } = useActions()
    const { isAuth, error, isLoading } = useTypedSelector(state => state.auth)

    function onFinish() {
        login(username, password)
    }

    return (
        <Form
            onFinish={onFinish}
        >
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your name')]}
            >
                <Input value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password')]}
            >
                <Input.Password value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}

export default LoginForm