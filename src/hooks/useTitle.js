import {useState, useEffect} from "react";

export const useTitle = newTitle => {

    const [documentTitle, setDocumentTitle] = useState(newTitle);

    useEffect(() => {
        document.title = documentTitle;
    }, [documentTitle])

    return [documentTitle, setDocumentTitle];

}