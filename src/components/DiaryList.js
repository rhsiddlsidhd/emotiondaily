  const ControlMenu =()=>{
    return <select></select>
  }


const DiaryList = ({ diaryList }) => {
  return (
    <div>
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.dafualtProps = {
  diaryList: [],
};

export default DiaryList;
