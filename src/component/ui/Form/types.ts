import { FieldValues, UseControllerProps } from 'react-hook-form'

export type RHFControllerProps<T extends FieldValues> = Required<{
  control: UseControllerProps<T>['control']
  name: UseControllerProps<T>['name']
}> &
  Omit<UseControllerProps<T>, 'control' | 'name'>
