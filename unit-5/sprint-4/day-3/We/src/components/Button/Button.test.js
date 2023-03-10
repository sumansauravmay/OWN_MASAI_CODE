import { render, screen,fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with testid "button"', () => {
  render(<Button />);
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
});




test('renders button with text "Hello"', () => {
    const label="Hello"
    render(<Button label={label}/>);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });


  test("onClick should without passing handleclick function",()=>{
    const label="Hello";
    render(<Button label={label} />)

const buttonElement=screen.getByTestId("button")

fireEvent.click(buttonElement);

})


test("onClick should call handleclick function once",()=>{
    const fn=jest.fn();
    const label="Hello";
    render(<Button label={label} handleClick={fn}/>)

const buttonElement=screen.getByTestId("button")

fireEvent.click(buttonElement);
expect(fn).toBeCalledTimes(1)
})


test("onClick should call handleclick more than once depending on number of clicks",()=>{
    const fn=jest.fn();
    const label="Hello";
    render(<Button label={label} handleClick={fn}/>)

const buttonElement=screen.getByTestId("button")

fireEvent.click(buttonElement);
fireEvent.click(buttonElement);
fireEvent.click(buttonElement);
fireEvent.click(buttonElement);
fireEvent.click(buttonElement);
expect(fn).toBeCalledTimes(5);
})


// test("should match snapshot",()=>{
//   const fn=jest.fn();
//   const label="Hello";
//  const cTree=renderer.create(<Button label={label}
//   handleClick={fn}/>).toJSON();
//   expect(cTree).toMatchSnapShot();
// })

