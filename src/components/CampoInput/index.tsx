import { FormControl, Input, Text } from "native-base";
import React from "react"
import { Control, Controller } from "react-hook-form"
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native"

export interface CampoInputProps {
  control: Control<any, any>;
  name: any;
  placeholder: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  menssagem_erro?: string;
  secureTextEntry?: boolean;
  isInvalid?: boolean
}

export default function CampoInput(props: CampoInputProps) {
  const { control, placeholder, editable, keyboardType,
    defaultValue, secureTextEntry, name, isInvalid, menssagem_erro } = props;

  return (
    <FormControl
      isRequired
      isInvalid={isInvalid}
      paddingY={2}
      paddingX={4}
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
        <Text fontSize={20} color="red">{menssagem_erro}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

