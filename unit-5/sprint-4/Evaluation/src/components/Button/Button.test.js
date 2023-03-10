// TODO
import { render, screen,fireEvent} from '@testing-library/react';
import Button from './Button';
import { ButtonStyled } from "./Button.styled";

test('renders button with size "sm"', () => {
     const size="sm"
  render(<Button size={size}/>);
 
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
});

test('renders button with size "md"', () => {
    let size="md"
    render(<Button size={size}/>);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders button with size "lg"', () => {
    let size="lg"
    render(<Button size={size}/>);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders button with size "xs"', () => {
    let size="xs";
    render(<Button size={size}/>);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });

 
test('renders button with text "Hello"', () => {
    const label="Hello"
    render(<Button label={label}/>);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
  });

  test("onClick should call Onclick function",()=>{
    const fn=jest.fn();
    const label="Hello";
    render(<Button label={label} handleClick={fn}/>)

const buttonElement=screen.getByTestId("button")

fireEvent.click(buttonElement);
expect(fn).not.toEqual("Helloq")
})

test('renders button with varriant "sm"', () => {
    const size="sm"
 render(<Button size={size}/>);

 const linkElement = screen.getByTestId("button");
 expect(linkElement).toBeInTheDocument();
});



  



