const Button = (props) => {
  //  Write your code here.
  const { cls, content } = props;
  return <button className={cls}>{content}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 style={{ color: "white" }}> Social Buttons</h1>
    <div className="btn">
      <Button cls="btn-like" content="Like" />
      <Button cls="btn-comment" content="Comment" />
      <Button cls="btn-share" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
