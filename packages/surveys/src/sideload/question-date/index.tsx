import { render } from "preact";
import Question from "./Question.tsx";
import globalCss from "./styles/globals.css?inline";
import calendarCss from "react-calendar/dist/Calendar.css?inline";
import datePickerCss from "react-date-picker/dist/DatePicker.css?inline";

declare global {
  interface Window {
    initDatePicker: (element: HTMLElement, selectedDate?: Date) => void;
    selectedDate: Date;
  }
}

const addStylesToDom = () => {
  if (document.getElementById("formbricks__question_date_css") === null) {
    const styleElement = document.createElement("style");
    styleElement.id = "formbricks__question_date_css";
    styleElement.innerHTML = globalCss + datePickerCss + calendarCss;
    document.head.appendChild(styleElement);
  }
};

const init = (element: HTMLElement, selectedDate?: Date, format?: string) => {
  addStylesToDom();
  const container = document.createElement("div");
  container.id = "datePickerContainer";
  element.appendChild(container);
  render(<Question defaultDate={selectedDate} format={format} />, container);
};

window.initDatePicker = init;
