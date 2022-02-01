function LikeButton({numCount, count}){
  const click = (button) => {
      button.preventDefault();
      numCount();
  };
  
  return (
      <button onClick={click} type="submit">
          <span>{count} likes</span>
      </button>
  );
};

export default LikeButton;