import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RunButton({
  className,
  onClick
}: {
  className?: string
  onClick: () => any
}) {
  return (
    <button
      className={
        'rounded-md border py-2 px-4 text-center text-sm cursor-pointer' +
        className
      }
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlay} />
      &nbsp; Run
    </button>
  )
}
