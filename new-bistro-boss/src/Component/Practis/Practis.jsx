import { useState } from "react";


const Practis = () => {
    const [activeTab,setActiveTab]=useState('remote')
    return (
        <div className="flex border-2 w-fit rounded">
           <div
           onClick={()=>setActiveTab('remote')} className={`py-3 px-6 w-28 font-semibold  ${activeTab =="remote"?"bg-warning text-white":""}`}>
            Remote
           </div> 
           <div onClick={()=>setActiveTab('offline')} className={`py-3 px-6 w-28 font-semibold ${activeTab=="offline"?"bg-warning text-white":""}`}>
            Offline
           </div>
        </div>
    );
};

export default Practis;