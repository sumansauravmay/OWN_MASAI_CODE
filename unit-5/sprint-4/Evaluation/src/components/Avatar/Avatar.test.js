import { render,screen } from "@testing-library/react";
// import { render, screen,fireEvent} from '@testing-library/react';
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar name="A B" />);
  });
});

test('renders avatar with size "sm"', () => {
  const size="sm"
render(<Avatar size={size} name="A B"/>);

const linkElement = screen.getByTestId("avatar");
expect(linkElement).toBeInTheDocument();
});

test('renders avatar with size "md"', () => {
 let size="md"
 render(<Avatar size={size} name="A B"/>);
 const linkElement = screen.getByTestId("avatar");
 expect(linkElement).toBeInTheDocument();
});

test('renders avatar with size "lg"', () => {
 let size="lg"
 render(<Avatar size={size} name="A B"/>);
 const linkElement = screen.getByTestId("avatar");
 expect(linkElement).toBeInTheDocument();
});

test('renders button with size "xs"', () => {
 let size="xs";
 render(<Avatar size={size} name="A B"/>);
 const linkElement = screen.getByTestId("avatar");
 expect(linkElement).toBeInTheDocument();
});

