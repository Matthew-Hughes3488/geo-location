import React, { ChangeEventHandler, FormEventHandler } from 'react'
import "./NewTaskBar.scss"

type NewTaskBarProps = {
    onSubmit: FormEventHandler<HTMLFormElement>;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    taskValue: string;
}

export const NewTaskBar = ({onSubmit, onInputChange, taskValue} : NewTaskBarProps) => {
  return (
    <section className="form-card">
    <form className="form-card__input-form" action="" onSubmit={onSubmit}>
      <input
        className="form-card__input-form--input-bar"
        type="text"
        name="new-task"
        id="new-task"
        placeholder="Enter new task here..."
        value={taskValue}
        onChange={onInputChange}
      />
      <button className="form-card__input-form--submit" type="submit">
        +
      </button>
    </form>
  </section>
  )
}