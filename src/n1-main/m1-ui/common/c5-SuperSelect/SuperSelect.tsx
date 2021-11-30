import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((op, i) => <option key={i} value={op} selected={op === value}>{op}</option>): []; // map options with key
    
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={styles.select}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
