// Get all data 
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40')
// .then(response => {
//     console.log(response.data);
// });

// Get 10 results starting from 20
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40?limit=4&offset=4')
// .then(response => {
//     console.log(response.data);
// });


// Get all data sorted by name  in ascending order 
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40?sort_by=name&sort_order=asc')
// .then(response => {
//     console.log(response.data);
// });

// Get Returns an array with all keys from the spreadsheet = values of the first row of the document.
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40/keys')
// .then(response => {
//     console.log(response.data);
// });

// Returns the name of the document.
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40/name')
// .then(response => {
//     console.log(response.data);
// });

//Returns a list of all available sheets (tabs).
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40/sheets')
// .then(response => {
//     console.log(response.data);
// });

//Returns the number of rows in the document (without first row).
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40/count')
// .then(response => {
// console.log(response.data);
// });

// Search in document
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40/search?name=Steve&age=22&casesensitive=true')
// .then(response => {
// console.log(response.data);
// });

// Creat 
// axios.get('https://sheetdb.io/api/v1/58f61be4dda40',{
//     "data": {"id":5,"name":"Frank"}
// }).then ( response => {
//     console.log(response.data);
// });

// Delete
// axios.delete('https://sheetdb.io/api/v1/58f61be4dda40/id/61')
// .then(response => {
//     console.log(response.data);
// });


// Patch/Update
// axios.patch('https://sheetdb.io/api/v1/58f61be4dda40/id/61',{
//     "data":{"id":10,"name":"huy"}
// }).then(response =>{
//     console.log(response.data);
// });