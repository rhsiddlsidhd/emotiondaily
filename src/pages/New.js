import { useEffect } from "react";
import DiaryEdit from "../components/DiaryEdit";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);
  return (
    <div>
      <DiaryEdit />
    </div>
  );
};

export default New;
