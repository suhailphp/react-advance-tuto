import { useEffect } from "react";
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    //componentWillUnmount Code you can write here
    return () => {
      console.log("clean up");
    };
  });
}
export default useDocumentTitle;
