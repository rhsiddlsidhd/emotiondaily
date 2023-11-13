const MyHeader = ({ headText, leftChild, rightchild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightchild}</div>
    </header>
  );
};

export default MyHeader;
