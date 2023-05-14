import React, {ChangeEvent} from 'react'
import s from './SuperInput.module.css'

type SuperInputPropsType = {
    title: string
    inputType: string
    value: number
    callBack: (n: number) => void
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              title,
                                                              inputType,
                                                              value,
                                                              callBack
                                                          }) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(Number(e.currentTarget.value))
    }
    return (
        <div className={s.superInput}><span>{title}</span><input onChange={onChangeInputHandler} className={s.input}
                                                                 type={inputType} value={value}/></div>
    )
}