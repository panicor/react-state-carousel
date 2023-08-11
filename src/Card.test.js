import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(
    <Card
      caption="test"
      src="test.com"
      currNum={1}
      totalNum={3}
    />
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
