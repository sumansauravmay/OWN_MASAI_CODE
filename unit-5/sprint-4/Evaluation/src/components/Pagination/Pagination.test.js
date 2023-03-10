describe("Pagination component", () => {
    test("pagination component works correctly 1", async () => {
      const fn = jest.fn();
      const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
        <Pagination handlePageChange={fn} totalPages={5} currentPage={2} />
      );
      const pages = getAllByTestId("page-btn");
      expect(pages.length).toBe(5);
      [
        // disabled correct one
        (null, true, null, null, null),
      ].forEach((state, i) => {
        expect(pages[i].textContent.trim()).toBe(`${i + 1}`);
        expect(pages[i].getAttribute("disabled")).toBe(state);
      });
      // on click change buttons
      // on click change buttons
      fireEvent.click(pages[1]);
      expect(fn).toBeCalledTimes(0);
      fireEvent.click(pages[4]);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(5);
      fireEvent.click(pages[4]);
      expect(fn).toBeCalledTimes(2);
      expect(fn).toBeCalledWith(5);
      global.score += 1; // pagination
    });
    test("pagination component works correctly 2 ", async () => {
      const fn = jest.fn();
      const { debug, getByTestId, getAllByTestId, findAllByTestId } = render(
        <Pagination handlePageChange={fn} totalPages={8} currentPage={4} />
      );
      const pages = getAllByTestId("page-btn");
      expect(pages.length).toBe(8);
      [
        // disabled correct one
        (null, null, null, null, true, null, null, null),
      ].forEach((state, i) => {
        expect(pages[i].getAttribute("disabled")).toBe(state);
      });
      // on click change buttons
      fireEvent.click(pages[4]);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(5);
      fireEvent.click(pages[4]);
      expect(fn).toBeCalledTimes(2);
      expect(fn).toBeCalledWith(5);
      global.score += 1; // pagination
    });
  });


