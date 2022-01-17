import React from 'react';
import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

const Navbar = function () {
    let { isAuth, user } = useTypedSelector(store => store.auth)
    const navigate = useNavigate();
    const { logout } = useActions()
    return (
        <Layout.Header >
            {isAuth ?
                <>
                    <div>{user.username}</div>
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                        <Menu.Item onClick={() => { logout() }} key="0">
                            Outer</Menu.Item>
                    </Menu>
                </>
                :
                <Menu theme="dark" mode="horizontal" selectable={false} >
                    <Menu.Item onClick={() => { navigate(RouteNames.LOGIN) }} key="1">Login</Menu.Item>
                </Menu>
            }

        </Layout.Header >
    )
}

export default Navbar