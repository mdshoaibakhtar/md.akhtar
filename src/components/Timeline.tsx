'use client'

interface TimelineItem {
    id: number;
    date: string;
    degree: string;
    institution: string;
    dataList : string[]
  }
  
  // Interface for TimelineFeed component props
  interface TimelineFeedProps {
    timelineData: TimelineItem[];
    title: string;
  }
  const Timeline: React.FC<TimelineFeedProps> = ({ timelineData, title }) => {
  return (
    <div className="mx-36 my-4 hidden sm:block">
        <h3 className="text-xl text-white text-center">
            {title}
        </h3>
        <div className="relative flex flex-col items-center mt-4">
      <div className="absolute left-1/2 w-0.5 bg-gray-300 h-full" />
      {timelineData.map((item:TimelineItem, index:number) => (
        <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"} my-4`}>
          <div className={`relative w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"} flex flex-col items-${index % 2 === 0 ? "end" : "start"}`}>
            <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 cursor-pointer tilt">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="text-gray-600 text-sm">{item.institution}</p>
              <p className="text-gray-600 text-sm">{item.date}</p>
              <ul className="list-disc ml-4 mt-2">
              {item.dataList?.map((each:string, ind:number) =>{
               return(
                <li key={ind} className="text-gray-500 text-sm">{each}</li>

               )
              })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timeline;
