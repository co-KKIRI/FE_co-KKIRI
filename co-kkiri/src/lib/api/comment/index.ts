import { commentAddress } from "../address";
import { apiRequest } from "../axios";
import { CommentApiRequestDto, CommentApiResponseDto, CommentPageMetaApiRequestDto } from "./type";

/** 댓글 목록 가져오기 */
export const getCommentList = (postId: number, qs: CommentPageMetaApiRequestDto): Promise<CommentApiResponseDto> =>
  apiRequest("get", commentAddress.list(postId), null, qs);

/** 댓글 달기 */
export const createComment = (postId: number, data: CommentApiRequestDto) =>
  apiRequest("post", commentAddress.write(postId), data);

/** 댓글 수정 */
export const editComment = (postId: number, commentId: number, data: CommentApiRequestDto) =>
  apiRequest("patch", commentAddress.commentId(postId, commentId), data);

/** 댓글 삭제 */
export const deleteComment = (postId: number, commentId: number) =>
  apiRequest("delete", commentAddress.commentId(postId, commentId));
