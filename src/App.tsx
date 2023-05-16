import { useState } from 'react';

function App() {
    
    const dateAndHour = new Date();
    const [hour, setHour] = useState<object>({ }); //Atualiza o Estado e altera as horas

    ((hours, minutes, seconds) => {
        setInterval(()=> {
            setHour({ hours, minutes, seconds });
        }, 1000);
    })(dateAndHour.getHours(), dateAndHour.getMinutes(), dateAndHour.getSeconds());

    hour;

    return (
        <>
            <div>
                <b style={{ color: '#646cff' }}>{ dateAndHour.getDate()}/{dateAndHour.getMonth()}/{dateAndHour.getFullYear() }</b>
                <h1>
                    { dateAndHour.getHours() <= 9 ? `0${dateAndHour.getHours()}` : dateAndHour.getHours() }:
                    { dateAndHour.getMinutes() <= 9 ? `0${dateAndHour.getMinutes()}` : dateAndHour.getMinutes() }:
                    { dateAndHour.getSeconds() <= 9 ? `0${dateAndHour.getSeconds()}` : dateAndHour.getSeconds() }
                </h1>
            </div>

        </>
    );
}

export default App;
