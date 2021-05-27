import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check, sleep } from 'k6';

export let options = {
    vus: 2,
    duration: '30s',
};

// export let options = {
//     stages: [
//         { duration: '30s', target: 20 },
//         { duration: '1m30s', target: 10 },
//         { duration: '20s', target: 0 },
//     ],
// };

// export default function () {
//     http.get('http://test.k6.io');
//     sleep(1);
// }

export default function () {
    let res = http.get('https://httpbin.org/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
      };
}