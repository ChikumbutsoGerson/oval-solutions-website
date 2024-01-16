import { Client } from "@/app/lib/interface";
import { client,urlFor } from "@/app/lib/sanity";
import Image from "next/image";

async function getData(){
    const query = `*[_type == 'client']`;

    const data = await client.fetch(query);

    return data;
}

export default async function Home() {
    const data = (await getData()) as Client[]; 
    if (!data || data.length === 0) {
        return (

<main className="w-full h-full  items-center justify-center">
<div className="mx-auto flex-grow text-center">
<img className="w-full h-60 object-cover mt-15" src='https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
   <div className="w-full mx-auto p-5 bg-green-50 pt-0">
   <div className=" bg-blue-500ray-50">
   <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40 " >
       <div
           className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
               <div className="max-w-xl mx-auto text-center">
                   <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                       <p className="text-4xl font-semibold tracking-widest text-g uppercase  border-b-8 border-yellow-400">
                         OUR ACHIEVEMENTS
                         </p>
                   </div>
                   <p className="mt-1 text-base leading-relaxed text-gray-600 font-sarif group-hover:text-white">
                   Successfully delivered
                   projects for these companies exceeding our clients
                   expectation
                   </p>
               </div>
          
             
               <div  className="text-2xl text-center">
               No clients at the moment
        
               </div>
                   
           </div>
       </div>
       </div>
</div>
   </div>
</div>
</main>
          
        );
      }
  return (
   
 <main className="w-full h-full  items-center justify-center">
     <div className="mx-auto flex-grow text-center">
     <img className="w-full h-60 object-cover mt-15" src='https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
        <div className="w-full mx-auto p-5 bg-green-50 pt-0">
        <div className=" bg-blue-500ray-50">
        <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40 " >
            <div
                className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                    <div className="max-w-xl mx-auto text-center">
                        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                            <p className="text-4xl font-semibold tracking-widest text-g uppercase  border-b-8 border-yellow-400">
                              OUR ACHIEVEMENTS
                              </p>
                        </div>
                        <p className="mt-1 text-base leading-relaxed text-gray-600 font-sarif group-hover:text-white">
                        Successfully delivered
                        projects for these companies exceeding our clients
                        expectation
                        </p>
                    </div>
               
                  
                    <div  className="grid grid-cols-2 gap-2 mt-12 sm:grid-cols-3 lg:mt-20 lg:grid-cols-4">
                    {data.map((client) => (
                        <div key={client._id} 
                            className="">
                  
                            <div className="max-w-sm  dark:bg-gray-800 dark:border-gray-700">
                            {client.clientLogo && (<Image
                            src={urlFor(client.clientLogo).url()!}
                            alt="txet"
                            height={200}
                            width={200}
    
                        />)}
                        </div>  
                        </div>
                           ))}
             
                    </div>
                        
                </div>
            </div>
            </div>
    </div>
        </div>
    </div>
    </main>

  )
}

export const dynamic = "force-dynamic";