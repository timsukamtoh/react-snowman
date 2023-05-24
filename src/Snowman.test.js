import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import { LCPThresholds } from "web-vitals";

describe("smoke tests", function () {
  it("renders snowman without crashing", function () {
    render(<Snowman
      images={[]}
      words={["test"]}
      maxWrong={3}
    />);
  });
});


describe("snapshot tests", function () {
  it("initial snapshot", function () {
    const { container } = render(<Snowman
      images={[]}
      words={["test"]}
      maxWrong={3}
    />);

    expect(container).toMatchSnapshot();
  });
});

describe("Finish a game", function () {
  it("Can't continue after losing", function () {
    const { container } = render(
      <Snowman
        images={[]}
        words={["test"]}
        maxWrong={3}
      />
    );



    // click some letters
    const ltrButtons = container.querySelectorAll("button");
    for(let i = 0 ; i<3; i++) {
      fireEvent.click(ltrButtons[i]);
    }

    // expect the second image to show, but not the first
    expect(
      container.querySelector('#buttonContainer')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('.lose-message')
    ).toBeInTheDocument();
  });



});