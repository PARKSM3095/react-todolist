import React, { useState } from "react";
import { MdDone, MdDelete } from "react-icons/md";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../TodoContext";

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s all;
`;
const TodoItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed #ccc;
  &:hover {
    ${Remove} {
      opacity: 1;
      transition: 0.5s all;
    }
  }
`;

function TodoItem({ id, text, done }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <>
      <TodoItemWrap>
        {/* 체크박스 */}
        <Circle done={done} onClick={onToggle}>
          {done && <MdDone></MdDone>}
        </Circle>

        {/* 텍스트 */}
        <Text done={done}> {text} </Text>

        {/* 삭제아이콘 */}
        <Remove onClick={onRemove}>
          <MdDelete> </MdDelete>
        </Remove>
      </TodoItemWrap>
    </>
  );
}

export default TodoItem;
