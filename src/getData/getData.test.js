const getData = require("./getData");
const axios = require('axios');

jest.mock('axios');

describe("getData", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Any"
        },
        {
          id: 2,
          name: "Any"
        }
      ]
    }
  })

  test("Корректное значение", async () => {
    axios.get.mockReturnValue(response);
    const data = await getData();
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(['1', '2']);
    expect(data).toMatchSnapshot();
  });
});
