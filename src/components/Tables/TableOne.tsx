import useSWR from 'swr';
import { fetcher } from '@/services/UpdateItemService';
import { Activity } from '@/types/activities';

const TableOne = () => {
  const { data: activities = [] } = useSWR<Activity[]>(`store/recent-activity/`, fetcher) 
  
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
         Recent Activities
       </h4>
 
       <div className="flex flex-col">
         <div className="flex flex-row items-center justify-center rounded-sm bg-gray-2 dark:bg-meta-4 ">
           <div className="p-2.5 text-center xl:p-5">
             <h5 className="text-sm font-medium capitalize xsm:text-base">
               Product
             </h5>
           </div>
           <div className="p-2.5 text-center xl:p-5">
             <h5 className="text-sm font-medium capitalize xsm:text-base">
               Activity 
             </h5>
           </div>
           <div className="p-2.5 text-center xl:p-5">
             <h5 className="text-sm font-medium capitalize xsm:text-base">
              employee
             </h5>
           </div>

           <div className="p-2.5 text-center xl:p-5">
             <h5 className="text-sm font-medium capitalize xsm:text-base">
              shop
             </h5>
           </div>
         </div>
 
         {activities.length === 0 ? (
           <div className="flex items-center justify-center p-4.5 xl:p-6">
             <p className="text-black dark:text-white">No recent activities found.</p>
           </div>
         ) : (
           activities.map((item, key) => (
             <div
               className={`flex flex-row items-center text-center justify-evenly ${
                 key === activities.length - 1
                   ? ''
                   : 'border-b border-stroke dark:border-strokedark'
               }`}
               key={key}
             >
               <div className="flex items-center justify-center p-2.5 xl:p-5">
                 <p className="text-black dark:text-white">{item?.product?.name}</p>
               </div>
     
               <div className="flex items-center justify-center p-2.5 xl:p-5">
                 <p className={`${item?.activity === 'Product Added' ? 'text-meta-3' : 'text-red-400'}`}>{item?.activity}</p>
               </div>
     
               <div className="items-center justify-center p-2.5 sm:flex xl:p-5">
                 <p className="text-black dark:text-white">{item?.employee || 'Null'}</p>
               </div>

               <div className="items-center justify-center p-2.5 sm:flex xl:p-5">
                 <p className="text-black dark:text-white">{item?.shop?.name}</p>
               </div>
             </div>
           ))
         )}
       </div>
    </div>
  );
};

export default TableOne;
