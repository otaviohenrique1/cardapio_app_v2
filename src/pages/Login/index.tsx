import React, { useContext, useRef, useState } from 'react';
import { Center, Text, Button, VStack, Input, FormControl, Modal, Icon, Box, AlertDialog } from "native-base";
import { RootStackParamList } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CampoInput, { CampoInputProps } from '../../components/Campos/CampoInput';
import { valoresIniciaisLogin } from '../../utils/constantes';
import { schemaValidacaoFormularioLogin } from '../../utils/ValidacaoSchemas';
import { login_data } from './login_data';
import { UsuarioContext } from '../../context/usuario';
import { FontAwesome, Entypo } from '@expo/vector-icons';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Login({ navigation }: NavigationProps) {
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);

  const onClose = () => setIsOpenAlertDialog(false);
  const cancelRef = useRef(null);

  const { setDataUsuarioLogin } = useContext(UsuarioContext);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<LoginTypes>({
    defaultValues: valoresIniciaisLogin,
    resolver: yupResolver(schemaValidacaoFormularioLogin)
  });

  function onSubmit(values: LoginTypes) {
    const email = values.email;
    const senha = values.senha;

    let resultado_busca_email = login_data.find((item) => item.email === email);
    // let resultado_busca_senha = login_data.find((item) => item.senha === senha);

    if (!resultado_busca_email) {
      setIsOpenAlertDialog(!isOpenAlertDialog);
      return;
    }

    setDataUsuarioLogin({
      id: resultado_busca_email.id,
      nome: resultado_busca_email.nome,
      email: resultado_busca_email.email,
    });
    navigation.navigate("HomePage");
  }

  const lista_dados_campos: CampoInputProps[] = [
    {
      control: control, name: "email", menssagem_erro: errors.email?.message, placeholder: "Email",
      keyboardType: "email-address", secureTextEntry: false, defaultValue: "", editable: true, isInvalid: "email" in errors,
    },
    {
      control: control, name: "senha", menssagem_erro: errors.senha?.message, placeholder: "Senha",
      keyboardType: "default", secureTextEntry: true, defaultValue: "", editable: true, isInvalid: "senha" in errors,
    },
  ];

  return (
    <>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenAlertDialog} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Erro</AlertDialog.Header>
          <AlertDialog.Body>
            {`Email ou senha inválido(s)`}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group>
              <Button variant="solid" colorScheme="red" onPress={onClose} ref={cancelRef}>Fechar</Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Center height="full" paddingX="5" paddingY="6">
        <Box marginBottom="10">
          <Icon as={Entypo} name="open-book" size="6xl" color="indigo.600" />
        </Box>
        <Text fontSize="4xl" marginBottom="8">{"CardapioApp+"}</Text>
        <VStack space={1} alignItems="center" width="full">
          {lista_dados_campos.map((item, index) => {
            const { control, name, isInvalid, placeholder, keyboardType, secureTextEntry,
              editable, menssagem_erro, defaultValue } = item;
            return (
              <FormControl
                key={index}
                isRequired
                isInvalid={isInvalid}
                paddingY={2}
              >
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlur}
                      placeholder={placeholder}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                      variant="underlined"
                      size="2xl"
                      width="full"
                      secureTextEntry={secureTextEntry}
                      editable={editable}
                      keyboardType={keyboardType}
                    />
                  )}
                  name={name}
                  rules={{ required: 'Campo vazio' }}
                  defaultValue={defaultValue}
                />
                <FormControl.ErrorMessage>
                  <Text fontSize="xl" color="red">{menssagem_erro}</Text>
                </FormControl.ErrorMessage>
              </FormControl>
            );
          })}
          <Button
            width="full"
            variant="solid"
            colorScheme="primary"
            size="lg"
            onPress={handleSubmit((onSubmit))}
            marginTop={2}
          >
            Entrar
          </Button>
          <Button.Group isAttached width="full">
            <Button
              width="1/2"
              variant="solid"
              colorScheme="emerald"
              size="lg"
              onPress={() => navigation.navigate("NovoUsuario")}
            >Novo Cadastro</Button>
            <Button
              width="1/2"
              variant="solid"
              colorScheme="indigo"
              size="lg"
              onPress={() => alert("Recuperar senha")}
            >Recuperar senha</Button>
          </Button.Group>
          <Button.Group isAttached width="full">
            <Button
              width="1/3"
              variant="solid"
              colorScheme="red"
              size="lg"
              onPress={() => alert("Google")}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Icon as={FontAwesome} name="google" size="2xl" color="white" />
            </Button>
            <Button
              width="1/3"
              variant="solid"
              colorScheme="coolGray"
              size="lg"
              onPress={() => alert("Apple")}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Icon as={FontAwesome} name="apple" size="2xl" color="white" />
            </Button>
            <Button
              width="1/3"
              variant="solid"
              colorScheme="lightBlue"
              size="lg"
              onPress={() => alert("Facebook")}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Icon as={FontAwesome} name="facebook" size="2xl" color="white" />
            </Button>
          </Button.Group>
        </VStack>
      </Center>
    </>
  );
}
