import React,{useState,useEffect,useCallback} from 'react'

type Now = {
    today : string;
    amPm : string;
    hour : string;
    min : string;
}

const Clock: React.FC = () => {

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const [clock, setClock] = useState<Now>({
        today : daysOfWeek[new Date().getDay()],
        amPm : new Date().getHours() > 12 ?  '오후' :  '오전',
        hour : new Date().getHours() > 12 ?  new Date().getHours()-12+"" :  new Date().getHours()+"",
        min : new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()+"",
    })

    const {today, amPm, hour, min} = clock;

    const tiktok = useCallback(
        () => {
            const now:Date = new Date();
            const rightNow:Now = {
                today: daysOfWeek[now.getDay()],
                amPm: now.getHours() > 12 ?  '오후' :  '오전',
                hour: now.getHours() > 12 ?  now.getHours()-12+"" :  now.getHours()+"",
                min: now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()+"",
            }
            setClock(rightNow);
        }
    ,
        [daysOfWeek],
    )

    useEffect(() => {
        const startClock = setInterval(tiktok,1000);
        return () => {
            clearInterval(startClock);
        }
    }, [tiktok])

    return (
        <React.Fragment>
            ({today}) {amPm} {hour}:{min}
        </React.Fragment>
    )
}

export default Clock;
