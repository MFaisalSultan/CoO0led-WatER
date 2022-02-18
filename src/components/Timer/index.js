import React, { useEffect, useRef, useState } from 'react'
import styles from './timer.module.css'

export const Timer = ({marginTop}) => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('March 04, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime('');
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current)
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className={styles.main} style={{marginTop}} >
            <div className={styles.row}>
                <div className={styles.sec}>
                    <p className={styles.count} >{timerDays}</p>
                    <p className={styles.lable}><small>Days</small></p>
                </div>
                <span>:</span>
                <div className={styles.sec}>
                    <p className={styles.count} >{timerHours}</p>
                    <p className={styles.lable}><small>Hours</small></p>
                </div>
                <span>:</span>
                <div className={styles.sec}>
                    <p className={styles.count} >{timerMinutes}</p>
                    <p className={styles.lable}><small>Minutes</small></p>
                </div>
                <span>:</span>
                <div className={styles.sec}>
                    <p className={styles.count} >{timerSeconds}</p>
                    <p className={styles.lable}><small>Seconds</small></p>
                </div>
            </div>
        </div>
    )
}