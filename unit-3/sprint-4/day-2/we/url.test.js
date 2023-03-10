let url="https://example.com?foo=1&bar=2";

import searchparams from "./url.js";

test("test your url",()=>{

    expect(searchparams(url,"bar")).toEqual("2");
})
