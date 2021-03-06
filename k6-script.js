// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "Get User Repos",
    id: "50af58f2-8b7d-44fb-bc5d-746bfa036dc1",
    method: "GET",
    address: "https://api.github.com/users/josenerydev/repos",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });
}

export function handleSummary(data) {
  return {
      "summary.html": htmlReport(data),
    };
}
