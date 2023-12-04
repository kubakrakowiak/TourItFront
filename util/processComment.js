const processComment = (comment) => {
    return {
        userImage: require("../assets/kopalniasoli1.jpeg"),
        commentDate: "month ago",
        userRating: comment.value,
        userName: comment.user.username,
        isLiked: false,
        commentText: comment.content,
    };
};

export default processComment;
