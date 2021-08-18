import Button from '@material-ui/core/Button';
import { useCallback, useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { tr } from 'date-fns/locale';
import Style from '../styles/day.module.css'
import { useStore } from '../components/state'



export default function CheckOut() {
    const inDate = useStore(state => state.inDate)

    const [disabled, setDisabled] = useState([])
    const [month, setMonth] = useState(new Date())
    const [show, setShow] = useState(false)
    const [checkIn, setCheckIn] = useState('Check Out')
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

    useEffect(
        () => {
            if (inDate !== '') {
                setShow(true)
                let c = new Date(inDate.split('/')[2], inDate.split('/')[0] - 1, inDate.split('/')[1])
                let d = c.setDate(c.getDate() + 1)
                setMonth(new Date(inDate.split('/')[2], inDate.split('/')[0] - 1))
                setDisabled({ before: d })
            }
        }, [inDate]
    )

    const handleClick = () => { setShow(!show); }
    const handleDayClick = (day) => { setCheckIn(day.toLocaleDateString()); setShow(false); }
    return (
        <>

            <Button className={Style.button} ref={node1}
                onClick={handleClick}
                variant='contained'
                startIcon={<CalendarTodayIcon color='primary' />}
            >
                {checkIn}
            </Button>

            <div className={show ? Style.subDayOut : Style.subDayHide} ref={node2} >
                <DayPicker mode="single"
                    onDayClick={handleDayClick}
                    disabled={disabled}
                    month={month}
                    locale={tr}
                />
            </div>

        </>

    )
}