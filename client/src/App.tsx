import { Layout } from 'antd';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css'
import { useActions } from './hooks/useActions'
import { IUser } from './models/Iuser';

function App() {
  let { setUser, setIsAuth } = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('user' || '') } as IUser);
      setIsAuth(true)
    }
  }, [])






  return (
    <Layout className="App">
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
