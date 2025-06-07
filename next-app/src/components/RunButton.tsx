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
        'rounded-md bg-blue-600 py-2 px-4 text-center text-sm text-white hover:bg-blue-700 ' +
        className
      }
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlay} />
      &nbsp; Run
    </button>
  )
}
