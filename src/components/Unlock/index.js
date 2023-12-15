// Write your code here

import {useState} from 'react'

import {LockContainer, Image, Text, Button} from './styledComponents'

const lockImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlockImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [locked, setLocked] = useState(true)

  const onClickLock = () => {
    setLocked(!locked)
  }

  return (
    <LockContainer>
      <Image
        src={locked ? lockImage : unlockImage}
        alt={locked ? 'lock' : 'unlock'}
      />
      <Text>Your Device is {locked ? 'Locked' : 'Unlocked'}</Text>
      <Button onClick={onClickLock}>{locked ? 'Unlock' : 'Lock'}</Button>
    </LockContainer>
  )
}

export default Unlock
