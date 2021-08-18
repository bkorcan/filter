import Button from '@material-ui/core/Button';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import Style from '../styles/where.module.css'
import { useState, useCallback, useRef, useEffect } from "react"



export default function Where() {

    const [show, setShow] = useState(false)
    const [destination, setDestination] = useState('where')
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
            if (node1.current.contains(e.target) || node2.current.contains(e.target)) {
                return;
            }
            setShow(false); 
        }, [node1, node2]
    );

    const handleClick = () => {
         show ? setShow(false) : setShow(true); 
    console.log('clicked') }
    const handleButton = (e) => { setDestination(e.target.textContent); setShow(false) }

    return (
        <div
            style={{ display: 'inline-block', position: 'relative',width:'100%' }}
            ref={node2}
        >
            <Button  className={Style.button}
                onClick={handleClick}
                variant='contained'
                startIcon={<NotListedLocationIcon color='primary' />}
            >
                {destination}
            </Button>
            
            {/* Sub */}
            <div className={ show ? Style.whereSub : Style.whereSubHide }
                ref={node1}
            >
                <Button color='primary' onClick={handleButton}  >Fethiye</Button>
                <Button color='primary' onClick={handleButton} >Kalkan</Button>
                <Button color='primary' onClick={handleButton} >Kas</Button>
            </div>
        </div>
    )


}