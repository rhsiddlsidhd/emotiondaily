import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const env = process.env;
  // 예외처리라 하면 더 좋은 코드
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    return navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    return navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
        // className={[
        //   "emotion_img_wrapper",
        //   `emotion_img_wrapper_${emotion}`,
        // ]
        // ==> result )) <div class="emotion_img_wrapper,emotion_img_wrapper_1"><img src="/assets/emotion1.png"></div>
      >
        <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div onClick={goEdit} className="btn_wrapper">
        <MyButton text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
