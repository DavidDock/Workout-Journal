import React, {useState} from 'react'

import styles from "../../styles/Journal.module.css";

import June from '../workouts/june/June';
import July from '../workouts/july/July';
import August from '../workouts/august/August';
import September from '../workouts/september/September';
import October from '../workouts/october/October';
import November from '../workouts/november/November';
import December from '../workouts/december/December';
import January from '../workouts/january/January';
import February from '../workouts/february/February';
import March from '../workouts/march/March'
import April from '../workouts/april/April';
import May from '../workouts/may/May';



const Journal = () => {

    const [julyworkouts, setJulyworkouts] = useState(false)
    const [juneworkouts, setJuneworkouts] = useState(false)
    const [augustworkouts, setAugustworkouts] = useState(false)
    const [septemberworkouts, setSeptemberworkouts] = useState(false)
    const [octoberworkouts, setOctoberworkouts] = useState(false)
    const [novemberworkouts, setNovemberworkouts] = useState(false)
    const [decemberworkouts, setDecemberworkouts] = useState(false)
    const [januaryworkouts, setJanuaryworkouts] = useState(false)
    const [februaryworkouts, setFebruaryworkouts] = useState(false)
    const [marchworkouts, setMarchworkouts] = useState(false)
    const [aprilworkouts, setAprilworkouts] = useState(false)
    const [mayworkouts, setMayworkouts] = useState(false)

    return (
        <div>
            <div className={`bg-white w-75 mx-auto ${styles.HeadingContainer}`}>
    
                <svg width="120pt" height="120pt" alt="Journal with a pen" className={`mx-auto p-2 ${styles.HeroImage}`} version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path d="m39.879 46.656c1.4531 0.35547 2.75 1.1094 3.7734 2.1328l0.011718 0.011719c1.457 1.4609 2.3594 3.4727 2.3594 5.6914 0 1.0586-0.85938 1.9219-1.9219 1.9219-1.0586 0-1.9219-0.85937-1.9219-1.9219 0-1.1719-0.47266-2.2305-1.2305-2.9883-0.3125-0.31641-0.67578-0.57812-1.0742-0.78125v13.438c1.4531 0.35547 2.75 1.1055 3.7773 2.1289 1.4648 1.4648 2.3672 3.4844 2.3672 5.7031 0 1.0586-0.85938 1.9219-1.9219 1.9219-1.0586 0-1.9219-0.85937-1.9219-1.9219 0-1.1719-0.47266-2.2305-1.2344-2.9922-0.3125-0.3125-0.67578-0.57422-1.0703-0.77734v13.438c1.4531 0.35547 2.75 1.1094 3.7734 2.1328l0.011719 0.011719c1.457 1.4609 2.3594 3.4727 2.3594 5.6914 0 1.0586-0.85938 1.9219-1.9219 1.9219-1.0586 0-1.9219-0.85938-1.9219-1.9219 0-1.1719-0.47266-2.2305-1.2305-2.9883-0.3125-0.31641-0.67578-0.57812-1.0742-0.78125v14.199c0 2.2891 0.94141 4.3789 2.4531 5.8867 1.5117 1.5117 3.5977 2.4531 5.8867 2.4531h56.105c2.293 0 4.3789-0.94141 5.8867-2.4531 1.5156-1.5078 2.4531-3.5938 2.4531-5.8867v-71.84c0-2.2969-0.9375-4.3828-2.4453-5.8867-1.5156-1.5156-3.6016-2.4531-5.8945-2.4531h-56.105c-2.125 0-4.4258 0.88672-5.8867 2.4531-1.5117 1.5117-2.4531 3.5977-2.4531 5.8867v1.0742c1.4531 0.35547 2.75 1.1055 3.7773 2.1289 1.4648 1.4648 2.3672 3.4844 2.3672 5.7031 0 1.0586-0.85938 1.9219-1.9219 1.9219-1.0586 0-1.9219-0.85937-1.9219-1.9219 0-1.1719-0.47266-2.2305-1.2344-2.9922-0.3125-0.3125-0.67578-0.57422-1.0703-0.77734v13.438zm16.145 1.9922c-1.0586 0-1.9219-0.85938-1.9219-1.9219 0-1.0586 0.85938-1.9219 1.9219-1.9219h9.3711c0.89844 0 1.6523 0.61719 1.8633 1.4531l0.42969 1.2031 3.1523-9.9609c0.31641-1.0117 1.3984-1.5703 2.4062-1.25 0.77734 0.24609 1.2891 0.94141 1.3359 1.7109l1.0625 8.0156 0.09375-0.72266c0.12109-0.96875 0.94531-1.6719 1.8984-1.6719l2.9688-0.007812c1.0586 0 1.9219 0.85938 1.9219 1.9219 0 1.0586-0.85938 1.9219-1.9219 1.9219h-1.2891l-1.7422 13.5c-0.082031 0.87109-0.75391 1.5977-1.6562 1.7148-1.0469 0.13672-2.0078-0.60156-2.1445-1.6484l-1.8711-14.117-2.2695 7.168c-0.17969 0.54688-0.60156 1.0117-1.1836 1.2227-0.99219 0.35547-2.0859-0.16016-2.4414-1.1562l-1.9531-5.4492h-8.0312zm34.73-19.805h8.1211c1.0586 0 1.9219 0.85938 1.9219 1.9219v3.4219h3.4219c1.0586 0 1.9219 0.85938 1.9219 1.9219v8.1211c0 1.0586-0.85938 1.9219-1.9219 1.9219h-3.4219v3.4219c0 1.0586-0.85938 1.9219-1.9219 1.9219h-2.7812c-1.793 4.2031-4.6914 6.7969-7.9688 9.7266-3.125 2.7891-6.6328 5.9258-9.6836 11.211-0.52734 0.91406-1.7031 1.2266-2.6172 0.69531-0.33594-0.19531-0.58984-0.47656-0.75-0.79688-3.0273-5.2109-6.5156-8.332-9.6289-11.109-2.5273-2.2578-4.8281-4.3164-6.5898-7.0938-0.56641-0.89453-0.30078-2.0781 0.59375-2.6445s2.0781-0.30078 2.6445 0.59375c1.5 2.3672 3.5977 4.2422 5.9023 6.3008 2.8008 2.5039 5.8867 5.2617 8.7891 9.5039 2.8945-4.2344 5.9883-7.0039 8.793-9.5078 2.4805-2.2148 4.7148-4.2148 6.2461-6.8789h-1.0703c-1.0586 0-1.9219-0.85938-1.9219-1.9219v-3.4219h-3.4258c-1.0586 0-1.9219-0.85938-1.9219-1.9219v-8.1211c0-1.0586 0.85938-1.9219 1.9219-1.9219h3.4258v-0.72266c-0.40625-0.18359-0.82812-0.33594-1.2656-0.46094-0.74609-0.20703-1.5469-0.31641-2.3906-0.31641-1.3672 0-2.6641 0.30859-3.8164 0.85938-1.1875 0.56641-2.2344 1.3945-3.0586 2.4023-0.085937 0.11328-0.19141 0.21875-0.30859 0.31641-0.82422 0.66406-2.0352 0.53906-2.6992-0.28516-0.82812-1.0234-1.8789-1.8594-3.0781-2.4297-1.1523-0.54688-2.4492-0.85938-3.8164-0.85938-2.2812 0-4.3594 0.85547-5.9258 2.2578-1.582 1.418-2.6562 3.4062-2.8984 5.6406-0.11328 1.0508-1.0586 1.8125-2.1094 1.7031-1.0508-0.11328-1.8125-1.0586-1.7031-2.1094 0.34766-3.1992 1.8867-6.0469 4.1562-8.0859 2.2539-2.0195 5.2266-3.25 8.4766-3.25 1.9531 0 3.8086 0.44531 5.4648 1.2344 1.0625 0.50781 2.0469 1.1602 2.9258 1.9297 0.875-0.76953 1.8594-1.4219 2.9258-1.9297 1.6562-0.78906 3.5117-1.2344 5.4648-1.2344 1.1641 0 2.3125 0.16406 3.4102 0.46875 0.23437 0.066406 0.46875 0.13672 0.69531 0.21484 0.35156-0.42188 0.88281-0.68359 1.4727-0.68359zm6.2031 3.8398h-4.2812v3.4219c0 1.0586-0.85938 1.9219-1.9219 1.9219h-3.4258v4.2812h3.4258c1.0586 0 1.9219 0.85938 1.9219 1.9219v3.4219h4.2812v-3.4219c0-1.0586 0.85938-1.9219 1.9219-1.9219h3.4219v-4.2812h-3.4219c-1.0586 0-1.9219-0.85938-1.9219-1.9219zm-88.797 22.43c0 1.0586-0.85938 1.9219-1.9219 1.9219-1.0586 0-1.9219-0.85938-1.9219-1.9219v-20.406c0-1.0586 0.85938-1.9219 1.9219-1.9219h3.6523v-4.3242c0-2.5156 1.0312-4.8008 2.6836-6.4531 1.6523-1.6523 3.9414-2.6836 6.4531-2.6836 2.5078 0 4.793 1.0312 6.4492 2.6875 1.6562 1.6484 2.6875 3.9336 2.6875 6.4492v67.281c0 0.44531-0.13672 0.89062-0.40234 1.2266l-7.0039 10.816c-0.57422 0.88281-1.7617 1.1367-2.6445 0.5625-0.22266-0.14453-0.40625-0.33203-0.54688-0.53906l-7.2461-10.812c-0.33594-0.41406-0.44141-0.85156-0.41797-1.3711l-0.007813-59.004h-1.7344zm5.5703-22.324h10.59v-4.3242c0-1.4531-0.59766-2.7812-1.5586-3.7422-0.95312-0.95703-2.2773-1.5508-3.7383-1.5508-1.4531 0-2.7812 0.59766-3.7383 1.5586-0.95703 0.95703-1.5586 2.2852-1.5586 3.7383v4.3242zm10.59 3.8398h-10.59v57.25h10.59zm-1.6016 61.09h-7.3203l3.7227 5.5547zm33.465-0.054688c-1.0586 0-1.9219-0.85937-1.9219-1.9219 0-1.0586 0.85938-1.9219 1.9219-1.9219h41.203c1.0586 0 1.9219 0.85938 1.9219 1.9219 0 1.0586-0.85938 1.9219-1.9219 1.9219zm0-6.9375c-1.0586 0-1.9219-0.85937-1.9219-1.9219 0-1.0586 0.85938-1.9219 1.9219-1.9219h41.203c1.0586 0 1.9219 0.85938 1.9219 1.9219 0 1.0586-0.85938 1.9219-1.9219 1.9219zm0-6.9375c-1.0586 0-1.9219-0.85937-1.9219-1.9219 0-1.0586 0.85938-1.9219 1.9219-1.9219h41.203c1.0586 0 1.9219 0.85938 1.9219 1.9219 0 1.0586-0.85938 1.9219-1.9219 1.9219zm60.32-11.168h5.2266c1.0586 0 1.9219 0.85938 1.9219 1.9219v16.566c0 1.0586-0.85938 1.9219-1.9219 1.9219h-5.2266v6.8945c0 3.3438-1.3711 6.3906-3.582 8.5977-2.2031 2.2109-5.2461 3.582-8.5977 3.582h-56.105c-3.3516 0-6.3984-1.3711-8.6055-3.5781-2.207-2.207-3.5781-5.2539-3.5781-8.6055v-2.5938c-1.4531-0.35547-2.75-1.1055-3.7773-2.1289-1.4648-1.4648-2.3672-3.4844-2.3672-5.7031s0.90234-4.2344 2.3633-5.6953l0.011719-0.011719c1.0234-1.0234 2.3203-1.7695 3.7695-2.125v-1.832c-1.4492-0.35547-2.75-1.1094-3.7734-2.1328l-0.011719-0.011719c-1.457-1.4609-2.3594-3.4766-2.3594-5.6914 0-2.2227 0.90234-4.2383 2.3633-5.6953 1.0312-1.0312 2.332-1.7812 3.7852-2.1367v-1.832c-1.4531-0.35547-2.75-1.1055-3.7773-2.1289-1.4648-1.4648-2.3672-3.4844-2.3672-5.7031s0.90234-4.2344 2.3633-5.6953l0.011719-0.011719c1.0234-1.0234 2.3203-1.7695 3.7695-2.125v-1.832c-1.4492-0.35547-2.75-1.1094-3.7734-2.1328l-0.011719-0.011719c-1.457-1.4609-2.3594-3.4766-2.3594-5.6914 0-2.2227 0.90234-4.2383 2.3633-5.6953 1.0312-1.0312 2.332-1.7812 3.7852-2.1367v-1.0742c0-3.3516 1.3711-6.3984 3.5781-8.6055 2.4883-2.293 5.1641-3.5781 8.6055-3.5781h56.105c3.3438 0 6.3867 1.3711 8.5977 3.5781 2.2891 2.2891 3.5859 5.3633 3.5859 8.6055v2.5859h5.2539c1.0586 0 1.9219 0.85937 1.9219 1.9219v16.566c0 1.0586-0.85938 1.9219-1.9219 1.9219h-5.2539v21.547zm-80.469-39.398c-0.39844 0.20312-0.76172 0.46484-1.0703 0.77734-0.76172 0.76172-1.2344 1.8203-1.2344 2.9922 0 1.1719 0.47266 2.2305 1.2305 2.9883 0.3125 0.31641 0.67578 0.57812 1.0742 0.78125zm0 60.043v-7.5391c-0.39844 0.19922-0.75781 0.46484-1.0664 0.77344-0.76562 0.76562-1.2383 1.8242-1.2383 2.9961s0.47266 2.2305 1.2344 2.9922c0.3125 0.3125 0.67578 0.57422 1.0703 0.77734zm0-17.5v-7.5391c-0.39844 0.20313-0.76172 0.46484-1.0703 0.77734-0.76172 0.76172-1.2344 1.8203-1.2344 2.9922s0.47266 2.2305 1.2305 2.9883c0.3125 0.31641 0.67578 0.57812 1.0742 0.78125zm0-17.504v-7.5391c-0.39844 0.19922-0.75781 0.46484-1.0664 0.77344-0.76562 0.76562-1.2383 1.8242-1.2383 2.9961 0 1.1719 0.47266 2.2305 1.2344 2.9922 0.3125 0.3125 0.67578 0.57422 1.0703 0.77734z" />
                </svg>

                <h2 className={`d-none d-md-block ml-auto my-4`}>Journal</h2>
                <h2 className={`d-md-none ${styles.Heading}`}>Journal</h2>
                <p className={`${styles.Para}`}>My year long workout journal (July to June). Hopeully it'll provide inspiration. <br></br>
                Feel free to follow along, they all should be fairly short in length and require minimal equipment.
                </p>
                <div className={`d-flex justify-content-around w-90 mx-auto my-4 ${styles.MonthContainer}`}>
                    <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setJulyworkouts(!julyworkouts); setJuneworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>July</button>
                    <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setAugustworkouts(!augustworkouts); setJuneworkouts(false); setJulyworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Aug</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setSeptemberworkouts(!septemberworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Sept</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setOctoberworkouts(!octoberworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Oct</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setNovemberworkouts(!novemberworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Nov</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setDecemberworkouts(!decemberworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Dec</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setJanuaryworkouts(!januaryworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Jan</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setFebruaryworkouts(!februaryworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Feb</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setMarchworkouts(!marchworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>Mar</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setAprilworkouts(!aprilworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setMayworkouts(false)}}>Apr</button>
                     <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setMayworkouts(!mayworkouts); setJuneworkouts(false); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false)}}>May</button>
                    <button className={`hvr-sweep-to-bottom ${styles.MyButton} ${styles.HvrSweepToBottom}`} onClick={() => {setJuneworkouts(!juneworkouts); setJulyworkouts(false); setAugustworkouts(false); setSeptemberworkouts(false); setOctoberworkouts(false); setNovemberworkouts(false); setDecemberworkouts(false); setJanuaryworkouts(false); setFebruaryworkouts(false); setMarchworkouts(false); setAprilworkouts(false); setMayworkouts(false)}}>June</button>
                </div>
            </div>
            {juneworkouts && (
                <June />
            )}

            {mayworkouts && (
                <May />
            )}
            {aprilworkouts && (
                <April />
            )}
            {marchworkouts && (
                <March />
            )}
            {februaryworkouts && (
                <February />
            )}
            {januaryworkouts && (
                <January />
            )}
            {decemberworkouts && (
                <December />
            )}
            {novemberworkouts && (
                <November />
            )}
            {octoberworkouts && (
                <October />
            )}
            {septemberworkouts && (
                <September />
            )}
            {augustworkouts && (
                <August />
            )}
            {julyworkouts && (
                <July />
            )}

        </div>
    )
}

export default Journal