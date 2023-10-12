import { useAppSelector } from '../hooks'

export default function Header() {
    const animal = useAppSelector(state => state.switch.value)
  return (
    <div><p>החיה שנבחרה: {animal}</p></div>
  )
}
