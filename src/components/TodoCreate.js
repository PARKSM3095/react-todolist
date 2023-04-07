import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, TodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  width: 80px;
  height: 80px;
  background: rgb(56, 217, 169);
  margin: 0 auto;
  border-radius: 100%;
  color: #fff;
  text-align: center;
  font-size: 50px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  cursor: pointer;
  border: none;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  ${(props) =>
    props.open
      ? css`
          background: #ff6b6b;
          transform: translate(-50%, 50%) rotate(45deg);
          transition: 0.2s all;
        `
      : css`
          transition: 0.2s all;
        `}
`;

const Input = styled.input`
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 15px;
  height: 40px;
  width: calc(100% - 60px);
  &:focus {
    outline: none;
    border-color: #ccc;
    box-shadow: 0 0 5px #ccc;
  }
`;
const InputWrap = styled.div`
  justify-content: center;
  display: flex;
  height: 120px;
  width: 100%;
  background: #f1f1f1;
  border-radius: 16px;
  transform: translate(0, 120px);
  ${(props) =>
    props.open
      ? css`
          transition: 0.3s all;
          transform: translate(0, 0);
        `
      : css`
          transition: 0.3s all;
          transform: translate(0, 120px);
        `}
`;
const InsertForm = styled.form`
  width: 100%;
  text-align: center;
`;
function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = TodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <div className="todo-create">
          <InputWrap open={open}>
            <InsertForm onSubmit={onSubmit}>
              <Input
                placeholder="Enter 버튼을 입력하여 등록하세요."
                onChange={onChange}
                value={value}
              ></Input>
            </InsertForm>
          </InputWrap>
        </div>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd></MdAdd>
      </CircleButton>
    </>
  );
}
export default TodoCreate;
