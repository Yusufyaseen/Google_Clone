import { useEffect, useState } from "react";
import API_KEY from "./Keys";
const CONTEXT_KEY = "d3ce873816d658363"; // it just tells google which search engine to use & we use entire web

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(`
                https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}
            `)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
/* when you enter a new search it is passed to the data layer - then the data layer get a new term like elon mask or salah 
then it fires the useeffect above and it will get all the search results using Google and then it get you not! take you to the search results page

*/
