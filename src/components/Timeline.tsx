'use client'

interface item{
    date:string
    degree:string
    institution:string
}
interface TimelineItem {
    map(arg0: (item: item, index: number) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    date: string;
    degree: string;
    institution: string;
  }
const Timeline = (timelineData:TimelineItem, title:string) => {
  return (
    <div className="mx-36 my-4">
        <h3 className="text-xl text-white text-center">
            {title}
        </h3>
        <div className="relative flex flex-col items-center mt-4">
      <div className="absolute left-1/2 w-0.5 bg-gray-300 h-full" />
      {timelineData.map((item:item, index:number) => (
        <div
          key={index}
          className={`flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"} my-4`}
        >
          <div className={`relative w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"} flex flex-col items-${index % 2 === 0 ? "end" : "start"}`}>
            <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4">
              <p className="text-gray-600 text-sm">{item.date}</p>
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="text-gray-500">{item.institution}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timeline;
