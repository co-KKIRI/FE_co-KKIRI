import { commentAddress } from "../address";
import { apiRequest } from "../axios";
import { CommentApiResponseDto, CreateCommentApiRequestDto, ModifyCommentApiRequestDto } from "./type";

/** 댓글 목록 가져오기 */
export const getCommentList = (postId: number): Promise<CommentApiResponseDto> =>
  apiRequest("get", commentAddress.list(postId));

/** 댓글 달기 */
export const createComment = (postId: number, data: CreateCommentApiRequestDto) =>
  apiRequest("post", commentAddress.write(postId), data);

/** 댓글 수정 */
export const editComment = (postId: number, commentId: number, data: ModifyCommentApiRequestDto) =>
  apiRequest("patch", commentAddress.commentId(postId, commentId), data);

/** 댓글 삭제 */
export const deleteComment = (postId: number, commentId: number) =>
  apiRequest("delete", commentAddress.commentId(postId, commentId));
