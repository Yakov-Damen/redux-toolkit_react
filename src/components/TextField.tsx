import {ChangeEvent} from 'react'
import { useAppDispatch } from '../hooks'
import { changeByPayload } from '../switchSlice';

export default function TextField() {
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeByPayload(e.target.value))
  return (
    <input placeholder='שם אחר' onChange={handleChange}></input>
  )
}
