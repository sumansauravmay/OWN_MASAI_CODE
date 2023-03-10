import { render, screen,fireEvent } from '@testing-library/react';
import Counter from './Counter';


test('clicking on minus reduce the count by 1', () => {
    render(<Counter/>);
    const countElement = screen.getByTestId("count-value");
    expect(countElement).toHaveTextContent("0")

const decBtnElement=screen.getByTestId("minus-button")
fireEvent.click(decBtnElement)
expect(countElement).toHaveTextContent("-1")
  });



  test('clicking on plus increase the count by 1', () => {
    render(<Counter/>);
    const countElement = screen.getByTestId("count-value");
    expect(countElement).toHaveTextContent("0")

const incBtnElement=screen.getByTestId("plus-button")
screen.debug()
fireEvent.keyDown(incBtnElement)
fireEvent.keyDown(incBtnElement)
fireEvent.keyDown(incBtnElement)
fireEvent.keyDown(incBtnElement)
fireEvent.keyDown(incBtnElement)
expect(countElement).toHaveTextContent("5")
  });



