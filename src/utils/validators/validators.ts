export const required = (value: any) => {
    if (value) return undefined

    return'Field is required'
}
export type FieldValidatorType = (value: string) => string | undefined

export const maxLengthCreator = (Maxlength: number) => (value: any) => {
    if (value.length > Maxlength)  return`Max length is ${Maxlength} symbols`

    return undefined
}

