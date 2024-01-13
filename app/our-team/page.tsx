import { Team } from "@/app/lib/interface";
import { client,urlFor } from "@/app/lib/sanity";
import Image from "next/image";

async function getData(){
    const query = `*[_type == 'team']`;

    const data = await client.fetch(query);

    return data;
}

export default async function Home() {
    const data = (await getData()) as Team[]; 
    if (!data || data.length === 0) {
        return (
          <div className="flex items-center justify-center h-screen bg-white text-white text-4xl">
            No members at the moment
          </div>
        );
      }
  return (
   
 <main className="w-full h-full  items-center justify-center">
     <div className="mx-auto text-center">
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
                              MEET OUR TEAM
                              </p>
                        </div>
                        <p className="mt-1 text-base leading-relaxed text-gray-600 font-sarif group-hover:text-white">
                        Meet our professionals at Oval
                        </p>
                    </div>
               
                  
                    <div  className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {data.map((member) => (
                        <div  key={member._id} 
                        className="w-full h-screen/3 px-10 pt-0">
                  
                    <div className="relative mb-32 max-w-sm mx-auto mt-24">
                     <div className="rounded overflow-hidden shadow-md bg-white">
                   <div className="absolute -mt-20 w-full flex justify-center">
                   <div className="h-32 w-32">
                    {member.memberImage && (<Image
                            src={urlFor(member.memberImage).url()!}
                            alt="txet"
                            height={350}
                            width={380}
                            className="rounded-full object-cover h-full w-full shadow-md"
                        />)}
                </div>
               </div>
             <div className="px-6 mt-16">
             <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    {member.fullname}
                    </h4>
                    <p className="text-base font-normal text-gray-600">
                      {member.position}
                    </p>
                </div> 
                <p className="text-start text-gray-600 text-sm font-serif pt-3">
                  {member.brief}
                </p>
                <div className="w-full flex justify-center pt-5 pb-5">
     
                </div>
            </div>
        </div>
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