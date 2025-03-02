import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log('ghjdthrf')
        if (onChange) {
            console.log('ПРОверка')
            console.log(e)
            onChange(e)
        }
        onChangeOption && onChangeOption(+e.currentTarget.value)// делают студенты
    }
    console.log(onChange)

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <div className={s.wrapper}>
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {/*<option*/}
            {/*    id={'hw7-option-' + 'def'}*/}
            {/*    className={s.def}*/}
            {/*    key={'def'}*/}
            {/*    value={-1}*/}
            {/*>*/}
            {/*    {'Selected'}*/}
            {/*</option>*/}
            {mappedOptions}
        </select>
        </div>
    )
}

export default SuperSelect
