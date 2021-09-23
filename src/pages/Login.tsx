import React from 'react';
import { LoginForm } from '../components/auth/LoginForm/LoginForm';
import AuthLayout from '../components/layouts/auth/AuthLayout';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
