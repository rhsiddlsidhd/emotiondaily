import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";

import DiaryEdit from "../components/DiaryEdit";

const Edit = () => {
  const [originData, setOriginData] = useState();
  console.log("여기요", originData);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);

  const diaryList = useContext(DiaryStateContext);
  // console.log(diaryList);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEdit isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
