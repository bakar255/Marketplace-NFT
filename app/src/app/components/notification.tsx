import { useRef, useEffect, useState } from "react"
import { IoNotificationsSharp } from "react-icons/io5";

export const Notif = () => {

    const [notifup, setNotifUp ] = useState<boolean>(false);
    
    const notifRef = useRef<HTMLDivElement>(null);


     const onNotif = (() => setNotifUp(true));
     const offNotif = (() => setNotifUp(false));

    return (
        <div ref={notifRef} onMouseEnter={onNotif} onMouseLeave={offNotif}>
        <button className=" rounded-lg flex items-center p-3 cursor-pointer buttonFahome"><IoNotificationsSharp/></button>
        {notifup && (
          <div className=" flex notif absolute z-50 top-1/13 right-3 p-6 notif rounded-lg w-62">
            <div className=" p-3 rounded-xl mx-auto flex flex-col">
                <div className="text-center">
                    <div className="mb-3">
                <p className="font-medium">Notifications</p>
                </div>
               <p className=" text-xs ">Connectez vous pour recevoir et consuler vos notifications</p>
              </div>
            </div>
         </div>    
        )}
         </div>
    )

}