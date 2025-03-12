import "../../app/project.css"
interface DetailsProps {
    details_json: {
        title: string;
        features: string[];
    };
}
const Details: React.FC<DetailsProps> = ({details_json}) => {
    return (
        <div className='w-full mt-4 sm:mt-0 p-4'>
            {/* <h3 className="text-white text-xl text-start">{details_json.title}</h3> */}
            <ul className="list-disc ml-4 text-white sm:text-xl text-sm text-justify">
                {
                    details_json.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Details