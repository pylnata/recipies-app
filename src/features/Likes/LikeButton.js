import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { addLikeItem, removeLikeItem } from "../Likes/actions";

const LikeButton = props => {
  const { recipe } = props;

  const likes = useSelector(state=>state.likes);
  const dispatch = useDispatch();
  const {addLike, removeLike} = {
    addLike: item => dispatch(addLikeItem(item)),
    removeLike: id => dispatch(removeLikeItem(id))
  }

  const liked = likes.findIndex(item => item.id === recipe.id) !== -1;

  const onLikeClickHanlder = () => {
    if (liked) {
      removeLike(recipe.id);
    } else {
      addLike({ id: recipe.id, title: recipe.title });
    }
  };

  return (
    <Button
      className="like-btn border-0 p-0"
      outline
      color=""
      title={liked ? "Remove from Favorites" : "Add to Favorites"}
      onClick={onLikeClickHanlder}
    >
      {liked ? <i className="fa fa-heart" /> : <i className="far fa-heart" />}
    </Button>
  );
};


export { LikeButton };

export default LikeButton;
