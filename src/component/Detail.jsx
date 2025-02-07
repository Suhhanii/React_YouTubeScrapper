import { useLocation } from "react-router-dom";
import MyService from "./MyService";
import { useEffect, useState } from "react";

const Detail = () => {
  const location = useLocation();
  const [link] = useState(location.state?.link || null);
  const [data, setData] = useState(location.state?.data || null);
  const [error, setError] = useState(location.state?.error || null);

  useEffect(() => {
    if (!data && !error) {
      MyService.getDetail(link)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError("There was an error fetching the data");
          console.error(error);
        });
    }
  }, [link, data, error]);

  return (
    <div className="w-full h-fit flex items-center justify-center bg-gray-700">
      <div className="bg-gray-900 py-5 px-8 text-white w-[80%]">
        <h1 className="text-4xl mb-4 text-center">Video Details</h1>
        {error && <p className="text-red-500">{error}</p>}
        {data ? (
          <div className="space-y-4">
            <p className="text-xl"> <b className="text-2xl">Video Title: </b>{data.title}</p>
            <p className="text-xl"> <b className="text-2xl">Video Description:</b> {data.desc}</p>
            <div className="flex items-center justify-center">
               <img  src={data.thum} alt="Video Thumbnail " />
            </div>
            <p className="text-xl"> <b className="text-2xl">Tags: </b> {data.tags.join(", ")}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;

/*Note :
if (!data && !error) is a condition that checks whether both data and error are null or undefined.

Here's what it means:

!data: This condition checks if data is null or undefined. The ! (logical NOT) operator negates the value, meaning if data is null or undefined, !data will be true.

!error: Similarly, this condition checks if error is null or undefined. If error is null or undefined, !error will be true.

The && (logical AND) operator ensures that both conditions must be true for the code inside the if block to execute.

So, if (!data && !error) translates to:

If there is no data (data is null or undefined)

And there is no error (error is null or undefined)

If both conditions are met, it means that neither data has been successfully retrieved nor an error has occurred yet. This condition is used to trigger the data fetching logic only when both data and error are initially not set.

In the context of your useEffect hook, this condition ensures that the data fetching operation is only performed if there is no existing data and no error. This helps prevent redundant network requests or re-fetching data when it’s already available.
  
*if variable have data it is true
*if variable not have data they have null of undefined that means it is false if we use it in any operation

*/