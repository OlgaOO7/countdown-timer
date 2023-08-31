import React, { useState, useEffect } from 'react';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage';
import { TextTimer, TimerWrapper, Text } from './CountDownTimer.styled';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [notificationMessage, setNotificationMessage] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    let timeLeftTo = {};

    if (difference > 0) {
      timeLeftTo = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setNotificationMessage(true);
    }
    setTimeLeft(timeLeftTo);
    return timeLeftTo;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(interval);
  },
    // eslint-disable-next-line
    []);


  return (
    <TimerWrapper>
      {!notificationMessage ? (
        <div>
          <TextTimer>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</TextTimer>
          <Text>left until start of work</Text>
        </div>
      ) : (
        <NotificationMessage />
      )}
    </TimerWrapper>

  );
}

export default CountdownTimer;