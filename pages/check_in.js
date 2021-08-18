import Button from '@material-ui/core/Button';
import { useCallback, useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { tr } from 'date-fns/locale';
import Style from '../styles/day.module.css'
import { useStore } from '../components/state'



export default function CheckIn() {
    // const inDate = useStore(state => state.inDate)
    const setInDate = useStore(state => state.setInDate)

    const [show, setShow] = useState(false)
    const [checkIn, setCheckIn] = useState('Check In')
    const node1 = useRef();
    const node2 = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickMounted);
        return () => {
            document.removeEventListener("mousedown", handleClickMounted);
        };
    }, []);
    const handleClickMounted = useCallback(
        e => {
            if (node1.current.contains(e.target)) {
                return;
            }
            if (node2.current.contains(e.target)) {
                return;
            }
            setShow(false);
        }, [node1, node2]
    );

    const handleClick = () => { setShow(!show); }
    const handleDayClick = (day) => { setCheckIn(day.toLocaleDateString());  setInDate(day.toLocaleDateString());     setShow(false); }

    

    return (

        <>
            <Button className={Style.button} ref={node1}
                onClick={handleClick}
                variant='contained'
                startIcon={<CalendarTodayIcon color='primary' />}
            >
                {checkIn}
            </Button>

            <div className={show ? Style.subDay : Style.subDayHide} ref={node2} >
                <DayPicker mode="single"
                    onDayClick={handleDayClick}
                    //  disabled={disabled}  
                    //  month={month}
                    locale={tr}
                />
            </div>
        </>


    )
}