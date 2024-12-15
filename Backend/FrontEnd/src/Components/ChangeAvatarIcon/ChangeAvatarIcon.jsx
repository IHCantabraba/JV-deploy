import { useContext, useEffect } from 'react'
import { AvatarIconContext } from '../../providers/AvatarIconProvider'
import { Avatar } from '@mui/material'
const ChangeAvatarIcon = () => {
  const { AvatarIcon, setAvatarIcon } = useContext(AvatarIconContext)

  useEffect(() => {
    sessionStorage.setItem('user', AvatarIcon)
  }, [AvatarIcon])
  return (
    <Avatar
      sx={{
        mx: 'auto',
        bgcolor: 'green',
        textAlign: 'center',
        mb: 1
      }}
      src={AvatarIcon}
    ></Avatar>
  )
}
export default ChangeAvatarIcon
