import { showNotification } from '@mantine/notifications'
import { X } from 'tabler-icons-react'

export const errorNotification = (message: string) => {
  showNotification({
    title: "Sorry",
    color: "red",
    message: message,
    icon: <X />
  })
}
