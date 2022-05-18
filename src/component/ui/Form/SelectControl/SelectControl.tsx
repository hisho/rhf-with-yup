import { FieldValues, useController } from 'react-hook-form'
import { RHFControllerProps } from '@src/component/ui/Form/types'
import { ComponentProps } from 'react'

export type SelectControlProps<T extends FieldValues> = Omit<
  ComponentProps<'select'>,
  'name'
> &
  RHFControllerProps<T>

export const SelectControl = <T extends FieldValues>({
  control,
  name,
  ...props
}: SelectControlProps<T>) => {
  const { field } = useController<T>({ control, name })

  return <select {...props} {...field} />
}
