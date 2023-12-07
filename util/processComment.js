import { formatDistanceToNow, parseISO } from 'date-fns';

const processComment = (comment) => {
    const date = parseISO(comment.created_at);
    const timeAgo = formatDistanceToNow(date, { addSuffix: true });

    return {
        userImage: require("../assets/kopalniasoli1.jpeg"),
        commentDate: timeAgo,
        userRating: comment.value,
        userName: comment.user.username,
        isLiked: false,
        commentText: comment.content,
    };
};

export default processComment;
