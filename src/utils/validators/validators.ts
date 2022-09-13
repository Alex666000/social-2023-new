// типизировали функции валидаторы, чтобы мелочи не типизировать в обоих функциях
export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined

    return'Field is required'
}
// функция-обертка вернем нам наш валидатор
export const maxLengthCreator = (maxlength: number):FieldValidatorType  => (value) => {
    if (value.length > maxlength)  return`Max length is ${maxlength} symbols`

    return undefined
}

