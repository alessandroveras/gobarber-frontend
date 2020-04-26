// libs
import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

// assets
import logoImg from '../../assets/logo.svg';

// components
import Input from '../../components/Input';
import Button from '../../components/Button';

// contexts
import { useAuth } from '../../hooks/AuthContext';

// app
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

// interfaces
interface SingInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Informar e-mail')
            .email('Email náo é valido'),
          password: Yup.string().required('Informar senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        // console.log(errors);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn size="20px" />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};
export default SignIn;
