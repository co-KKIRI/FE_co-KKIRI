import { commentAddress } from "../address";
import { ApiRequestResponse, apiRequest } from "../axios";
import { CommentApiResponseDto, CreateCommentApiRequestDto, ModifyCommentApiRequestDto } from "./type";

export const getCommentList = (postId: number): Promise<ApiRequestResponse<CommentApiResponseDto>> =>
  apiRequest("get", commentAddress.list(postId));

export const createComment = (postId: number, data: CreateCommentApiRequestDto) =>
  apiRequest("post", commentAddress.write(postId), data);

export const editComment = (postId: number, commentId: number, data: ModifyCommentApiRequestDto) =>
  apiRequest("patch", commentAddress.commentId(postId, commentId), data);

export const deleteComment = (postId: number, commentId: number) =>
  apiRequest("delete", commentAddress.commentId(postId, commentId));
