import { chakra, Container, Box, Text } from '@chakra-ui/react'
import {
  SelectControl,
  SelectControlProps,
} from '@src/component/ui/Form/SelectControl/SelectControl'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InferType, object, string } from 'yup'
import { SubmitHandler } from 'react-hook-form/dist/types/form'

const ChildComponent = <T extends FieldValues>({
  control,
  name,
}: SelectControlProps<T>) => {
  return (
    <SelectControl control={control} name={name}>
      <option>選択してください</option>
      <option value={'naruto'}>naruto</option>
      <option value={'sasuke'}>sasuke</option>
      <option value={'kakashi'}>kakashi</option>
    </SelectControl>
  )
}

const schema = object({
  select: string().required(),
})

type TestFormInput = InferType<typeof schema>

export const App = () => {
  const {
    control,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<TestFormInput>({
    mode: 'onChange',
    defaultValues: {
      select: undefined,
    },
    resolver: yupResolver(schema),
  })

  const onChangeKakashi = async () => {
    await setValue('select', 'kakashi')
    await trigger('select')
  }

  const onSubmit: SubmitHandler<TestFormInput> = ({ select }) => {
    console.log({ select })
  }

  return (
    <Container>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <ChildComponent control={control} name={'select'} />
          {errors.select?.message && <Text>{errors.select?.message}</Text>}
        </Box>
        <chakra.button type={'button'} onClick={onChangeKakashi}>
          change kakashi
        </chakra.button>
        <chakra.button>送信</chakra.button>
      </chakra.form>
    </Container>
  )
}
