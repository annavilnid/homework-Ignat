import React from 'react'
import two from '../../images/twoArrows.svg'
import up from '../../images/upArrow.svg'
import down from '../../images/downArrow.svg'
import s from './SuperSort.module.css'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = two

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === up) {
        return ''
    } else if (sort === down) {
        return up
    } else {
        return down
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                className={s.icon}
                src={icon}
            />


            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
