require('dotenv').config();

const responseHeaders = {
  'Access-Control-Allow-Origin': process.env.CORS_URL,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

exports.handler = async () => {
  return {
    statusCode: 403,
    headers: responseHeaders,
    body: JSON.stringify({
      success: false,
      error: 'Access forbidden.',
    }),
  };
};

// require('dotenv').config();
// const fetch = require('node-fetch');

// const responseHeaders = {
//   'Access-Control-Allow-Origin': process.env.CORS_URL,
//   'Access-Control-Allow-Headers': 'Content-Type',
//   'Access-Control-Allow-Methods': 'GET, OPTIONS',
// };
// const fetchHeaders = {
//   'cache-control': 'no-cache',
//   'content-type': 'application/json',
//   'x-apikey': process.env.X_API_KEY,
// };

// /**
//  * Fetch assignments from database based on provided query.
//  * If no query is specified, return all assignments.
//  *
//  * @method fetchAssignments
//  * @param query {string}
//  * @param method {string}
//  *
//  * @return {object}
//  */
// async function fetchAssignments(query, method) {
//   const response = await fetch(`${process.env.API_URL}/assignments${query}`, {
//     method,
//     headers: fetchHeaders,
//   });

//   return response;
// }

// exports.handler = async (event) => {
//   const path = event.path.replace(/api\/[^/]+/, '');
//   const segments = path.split('/').filter((e) => e);

//   switch (event.httpMethod) {
//     case 'GET':
//       /* GET /api/lunch */
//       if (segments.length === 0) {
//         try {
//           const response = await fetchAssignments('', 'get').then((res) =>
//             res.json()
//           );

//           return {
//             statusCode: 200,
//             headers: responseHeaders,
//             body: JSON.stringify({
//               success: true,
//               meta: {
//                 totalAssignments: response.length,
//               },
//               data: response,
//             }),
//           };
//         } catch (err) {
//           return {
//             statusCode: err.statusCode || 500,
//             headers: responseHeaders,
//             body: JSON.stringify({
//               success: false,
//               error: err.message,
//             }),
//           };
//         }
//       }

//       /* GET /api/lunch/[house] */
//       // if (segments.length === 1) {
//       //   const house =
//       //     segments[0].charAt(0).toUpperCase() + segments[0].substr(1);

//       //   try {
//       //     const response = await fetchStudents(
//       //       `?q={"house": "${house}"}`,
//       //       'get'
//       //     ).then((res) => res.json());

//       //     return {
//       //       statusCode: 200,
//       //       headers: responseHeaders,
//       //       body: JSON.stringify({
//       //         success: true,
//       //         meta: {
//       //           totalStudents: response.length,
//       //           totalStudentsByForm: {
//       //             a: response.filter(
//       //               (student) => student.form.toLowerCase() === 'a'
//       //             ).length,
//       //             i: response.filter(
//       //               (student) => student.form.toLowerCase() === 'i'
//       //             ).length,
//       //             ii: response.filter(
//       //               (student) => student.form.toLowerCase() === 'ii'
//       //             ).length,
//       //             iii: response.filter(
//       //               (student) => student.form.toLowerCase() === 'iii'
//       //             ).length,
//       //             iv: response.filter(
//       //               (student) => student.form.toLowerCase() === 'iv'
//       //             ).length,
//       //             v: response.filter(
//       //               (student) => student.form.toLowerCase() === 'v'
//       //             ).length,
//       //             vi: response.filter(
//       //               (student) => student.form.toLowerCase() === 'vi'
//       //             ).length,
//       //           },
//       //         },
//       //         data: response,
//       //       }),
//       //     };
//       //   } catch (err) {
//       //     return {
//       //       statusCode: err.statusCode || 500,
//       //       headers: responseHeaders,
//       //       body: JSON.stringify({
//       //         success: false,
//       //         error: err.message,
//       //       }),
//       //     };
//       //   }
//       // }

//       return {
//         statusCode: 400,
//         headers: responseHeaders,
//         body: JSON.stringify({
//           success: false,
//           error: 'Bad request: too many segments in GET request',
//         }),
//       };

//     case 'OPTIONS':
//       return {
//         statusCode: 204,
//         headers: responseHeaders,
//       };

//     /* Fallthrough case */
//     default:
//       return {
//         statusCode: 405,
//         headers: responseHeaders,
//         body: JSON.stringify({
//           success: false,
//           error: 'HTTP method not allowed; must be one of GET/OPTIONS',
//         }),
//       };
//   }
// };
