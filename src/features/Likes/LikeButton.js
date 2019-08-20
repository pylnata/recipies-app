import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";

import { addLikeItem, removeLikeItem } from "../Likes/actions";

const LikeButton = props => {
  const { addLike, removeLike, likes, recipe } = props;
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

const mapStateToProps = ({ likes }) => ({
  likes
});

const mapDispatchToProps = dispatch => ({
  addLike: item => dispatch(addLikeItem(item)),
  removeLike: id => dispatch(removeLikeItem(id))
});

const connectedLikeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);

export { connectedLikeButton as LikeButton };

export default connectedLikeButton;
