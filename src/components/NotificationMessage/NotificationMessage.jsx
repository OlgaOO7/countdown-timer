import multitasking from '../../img/multitasking.png';
import {Notificationtext, Image} from './NotificationMessage.styled';

export function NotificationMessage() {
  return (
    <div>
      <Notificationtext>Stay positive! Work hard!</Notificationtext>
      <Image src={multitasking} alt='multitask' width="600" />
    </div>
  )
}