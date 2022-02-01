function LikeButton({numCount, count}){
  const click = (button) => {
      button.preventDefault();
      numCount();
  };

  return (
      <button onClick={click} type="submit">
          <span>{count} { count === 1 ? "Like" : "Likes" }</span>
      </button>
  );
};

export default LikeButton;