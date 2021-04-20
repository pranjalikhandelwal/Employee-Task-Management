// db.countries.insertMany([
//     { "countryName": "India" },
//     { "countryName": "Afghanistan" },
//     { "countryName": "Bangladesh" },
//     { "countryName": "Bhutan"  },
//     { "countryName": "China"  },
//     { "countryName": "Hong Kong"},
//     { "countryName": "Indonesia" },
//     { "countryName": "Japan" },
//     { "countryName": "Malaysia" },
//     { "countryName": "Nepal" },
//     { "countryName": "Singapore" }
    
// ])
// db.states.insertMany([
//     { "stateName": "Kabul", "countryId":"60615ca38114d9924f2556b4" },
//     { "stateName": "Jalalabad", "countryId": "60615ca38114d9924f2556b4" },

//     { "stateName": "Barisal", "countryId": "60615ca38114d9924f2556b5" },
//     { "stateName": "Dhaka", "countryId": "60615ca38114d9924f2556b5" },

//     { "stateName": "Dagana", "countryId": "60615ca38114d9924f2556b6" },

//     { "stateName": "Gansu", "countryId": "60615ca38114d9924f2556b7" },
//     { "stateName": "Fujian", "countryId": "60615ca38114d9924f2556b7" },

//     { "stateName": "Islands", "countryId": "60615ca38114d9924f2556b8" },

//     { "stateName": "Papua", "countryId": "60615ca38114d9924f2556b9" },
    
//     { "stateName": "Kanto", "countryId": "60615ca38114d9924f2556ba" },

//     { "stateName": "Johor", "countryId": "60615ca38114d9924f2556bb" },

//     { "stateName": "Arun Kshetra", "countryId": "60615ca38114d9924f2556bc" },
//     { "stateName": "Admiralty", "countryId": "60615ca38114d9924f2556bd" },

//     { "stateName": "Andhra Pradesh", "countryId": "60615ca38114d9924f2556b3" },

//     { "stateName": "Assam", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Bihar", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Goa", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Gujarat", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Haryana", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Himachal Pradesh", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Jharkhand", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Karnataka", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Kerala", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Madhya Pradesh", "countryId": "60615ca38114d9924f2556b3" },
//     { "stateName": "Maharashtra", "countryId": "60615ca38114d9924f2556b3" },

// ])

db.cities.insertMany([
    { "cityName": "Kabul", "stateId": "60615fc18114d9924f2556be" },
    { "cityName": "Jalalabad", "stateId": "60615fc18114d9924f2556bf" },

    { "cityName": "Barisal", "stateId": "60615fc18114d9924f2556c0" },
    { "cityName": "Dhaka", "stateId": "60615fc18114d9924f2556c1" },

    { "cityName": "Dagana", "stateId": "60615fc18114d9924f2556c2" },

    { "cityName": "Gansu", "stateId": "60615fc18114d9924f2556c3" },
    { "cityName": "Fujian", "stateId": "60615fc18114d9924f2556c4" },

    { "cityName": "Kowloon", "stateId": "60615fc18114d9924f2556c5" },

    { "cityName": "Papua", "stateId": "60615fc18114d9924f2556c6" },

    { "cityName": "Kanto", "stateId": "60615fc18114d9924f2556c7" },

    { "cityName": "Johor", "stateId": "60615fc18114d9924f2556c8" },

    { "cityName": "Arun Kshetra", "stateId": "60615fc18114d9924f2556c9" },
    { "cityName": "Admiralty", "stateId": "60615fc18114d9924f2556ca" },

    { "cityName": "Visakhapatnam", "stateId": "60615fc18114d9924f2556cc" },

    { "cityName": "Vijayawada", "stateId": "60615fc18114d9924f2556cc" },
    { "cityName": "Guwahati", "stateId": "60615fc18114d9924f2556cd" },
    { "cityName": "Dibrugarh", "stateId": "60615fc18114d9924f2556cd" },

    { "cityName": "Patna", "stateId": "60615fc18114d9924f2556ce" },
    { "cityName": "Bhagalpur", "stateId": "60615fc18114d9924f2556ce" },

    { "cityName": "Panaji", "stateId": "60615fc18114d9924f2556cf" },
    { "cityName": "Marogao", "stateId": "60615fc18114d9924f2556cf" },

    { "cityName": "Ahmedabad", "stateId": "60615fc18114d9924f2556d0" },
    { "cityName": "Surat", "stateId": "60615fc18114d9924f2556d0" },
    { "cityName": "Vadodara", "stateId": "60615fc18114d9924f2556d0" },

    { "cityName": "Faridabad", "stateId": "60615fc18114d9924f2556d1" },
    { "cityName": "Gurugram", "stateId": "60615fc18114d9924f2556d1" },
    { "cityName": "Panipat", "stateId": "60615fc18114d9924f2556d1" },


    { "cityName": "Shimla", "stateId": "60615fc18114d9924f2556d2" },
    { "cityName": "Dharamsala", "stateId": "60615fc18114d9924f2556d2" },
    { "cityName": "Solan", "stateId": "60615fc18114d9924f2556d2" },


    { "cityName": "Ranchi", "stateId": "60615fc18114d9924f2556d3" },
    { "cityName": "Dhanbad", "stateId": "60615fc18114d9924f2556d3" },
    { "cityName": "Jamshedpur", "stateId": "60615fc18114d9924f2556d3" },

    { "cityName": "Bengaluru", "stateId": "60615fc18114d9924f2556d4" },
    { "cityName": "Hubli-Dharwad", "stateId": "60615fc18114d9924f2556d4" },
    { "cityName": "Mysuru", "stateId": "60615fc18114d9924f2556d4" },


    { "cityName": "Thiruvananthapuram", "stateId": "60615fc18114d9924f2556d5" },
    { "cityName": "Kochi", "stateId": "60615fc18114d9924f2556d5" },

    { "cityName": "Indore", "stateId": "60615fc18114d9924f2556d6" },
    { "cityName": "Bhopal", "stateId": "60615fc18114d9924f2556d6" },
    { "cityName": "Jabalpur", "stateId": "60615fc18114d9924f2556d6" },
    { "cityName": "Gwalior", "stateId": "60615fc18114d9924f2556d6" },
    { "cityName": "Dewas", "stateId": "60615fc18114d9924f2556d6" },
    { "cityName": "Ratlam", "stateId": "60615fc18114d9924f2556d6" },
    { "cityName": "Ujjain", "stateId": "60615fc18114d9924f2556d6" },


    { "cityName": "Mumbai", "stateId": "60615fc18114d9924f2556d7" },
    { "cityName": "Pune", "stateId": "60615fc18114d9924f2556d7" },
    { "cityName": "Nagpur", "stateId": "60615fc18114d9924f2556d7" },
    { "cityName": "Thane", "stateId": "60615fc18114d9924f2556d7" },
    { "cityName": "Ahmednagar", "stateId": "60615fc18114d9924f2556d7" },

])
// db.countries.insertMany([
//     {
//         "countryName": "Afghanistan",
//         "stateName": "Kabul",
//         "cityName": "Kabul"
//     },
//     {
//         "countryName": "Afghanistan",
//         "stateName": "Jalalabad",
//         "cityName": "Jalalabad"
//     },
//     {
//         "countryName": "Bangladesh",
//         "stateName": "Barisal",
//         "cityName": "Barisal"
//     },
//     {
//         "countryName": "Bangladesh",
//         "stateName": "Dhaka",
//         "cityName": "Dhaka"
//     },
//     {
//         "countryName": "Bhutan",
//         "stateName": "Dagana",
//         "cityName": "Dagana"
//     }, {
//         "countryName": "China",
//         "stateName": "Fujian",
//         "cityName": "Fujian"
//     }, {
//         "countryName": "China",
//         "stateName": "Gansu",
//         "cityName": "Gansu"
//     }, {
//         "countryName": "Hong Kong",
//         "stateName": "Islands",
//         "cityName": "Kowloon"
//     }, {
//         "countryName": "Indonesia",
//         "stateName": "Papua",
//         "cityName": "Papua"
//     }, {
//         "countryName": "Japan",
//         "stateName": "Kanto",
//         "cityName": "Kanto"
//     }, {
//         "countryName": "Malaysia",
//         "stateName": "Johor",
//         "cityName": "Johor"
//     }, {
//         "countryName": "Nepal",
//         "stateName": "Arun Kshetra",
//         "cityName": "Arun Kshetra"
//     }, {
//         "countryName": "Singapore",
//         "stateName": "Admiralty",
//         "cityName": "Admiralty"
//     }, {
//         "countryName": "India",
//         "stateName": "Andhra Pradesh",
//         "cityName": "Visakhapatnam"
//     }, {
//         "countryName": "India",
//         "stateName": "Andhra Pradesh",
//         "cityName": "Vijayawada"
//     }, {
//         "countryName": "India",
//         "stateName": "Assam",
//         "cityName": "Guwahati"
//     }, {
//         "countryName": "India",
//         "stateName": "Assam",
//         "cityName": "Dibrugarh"
//     }, {
//         "countryName": "India",
//         "stateName": "Bihar",
//         "cityName": "Patna"
//     }, {
//         "countryName": "India",
//         "stateName": "Bihar",
//         "cityName": "Bhagalpur"
//     }, {
//         "countryName": "India",
//         "stateName": "Goa",
//         "cityName": "Panaji"
//     }, {
//         "countryName": "India",
//         "stateName": "Goa",
//         "cityName": "Marogao"
//     }, {
//         "countryName": "India",
//         "stateName": "Gujarat",
//         "cityName": "Ahmedabad"
//     }, {
//         "countryName": "India",
//         "stateName": "Gujarat",
//         "cityName": "Surat"
//     }, {
//         "countryName": "India",
//         "stateName": "Gujarat",
//         "cityName": "Vadodara"
//     }, {
//         "countryName": "India",
//         "stateName": "Haryana",
//         "cityName": "Faridabad"
//     }, {
//         "countryName": "India",
//         "stateName": "Haryana",
//         "cityName": "Gurugram"
//     }, {
//         "countryName": "India",
//         "stateName": "Haryana",
//         "cityName": "Panipat"
//     }, {
//         "countryName": "India",
//         "stateName": "Himachal Pradesh",
//         "cityName": "Shimla"
//     }, {
//         "countryName": "India",
//         "stateName": "Himachal Pradesh",
//         "cityName": "Dharamsala"
//     }, {
//         "countryName": "India",
//         "stateName": "Himachal Pradesh",
//         "cityName": "Solan"
//     }, {
//         "countryName": "India",
//         "stateName": "Jharkhand",
//         "cityName": "Ranchi"
//     }, {
//         "countryName": "India",
//         "stateName": "Jharkhand",
//         "cityName": "Dhanbad"
//     }, {
//         "countryName": "India",
//         "stateName": "Jharkhand",
//         "cityName": "Jamshedpur"
//     }, {
//         "countryName": "India",
//         "stateName": "Karnataka",
//         "cityName": "Bengaluru"
//     }, {
//         "countryName": "India",
//         "stateName": "Karnataka",
//         "cityName": "Hubli-Dharwad"
//     }, {
//         "countryName": "India",
//         "stateName": "Karnataka",
//         "cityName": "Mysuru"
//     }, {
//         "countryName": "India",
//         "stateName": "Kerala",
//         "cityName": "Thiruvananthapuram"
//     }, {
//         "countryName": "India",
//         "stateName": "Kerala",
//         "cityName": "Kochi"
//     }, {
//         "countryName": "India",
//         "stateName": "Madhya Pradesh",
//         "cityName": "Indore"
//     }, {
//         "countryName": "India",
//         "stateName": "Madhya Pradesh",
//         "cityName": "Bhopal"
//     }, {
//         "countryName": "India",
//         "stateName": "Madhya Pradesh",
//         "cityName": "Jabalpur"
//     }, {
//         "countryName": "India",
//         "stateName": "Madhya Pradesh",
//         "cityName": "Gwalior"
//     }, {
//         "countryName": "India",
//         "stateName": "Madhya Pradesh",
//         "cityName": "Dewas"
//     },
//     {
//         "countryName": "India",
//         "stateName": "Madhya Pradesh",
//         "cityName": "Ratlam"
//     },
//     {
//         "countryName": "India",
//         "stateName": "Maharashtra",
//         "cityName": "Mumbai"
//     },
//     {
//         "countryName": "India",
//         "stateName": "Maharashtra",
//         "cityName": "Pune"
//     },
//     {
//         "countryName": "India",
//         "stateName": "Maharashtra",
//         "cityName": "Nagpur"
//     },
//     {
//         "countryName": "India",
//         "stateName": "Maharashtra",
//         "cityName": "Thane"
//     },
//     {
//         "countryName": "India",
//         "stateName": "Maharashtra",
//         "cityName": "Ahmednagar"
//     },
// ])
// // load("C:/Users/PRATIK/Desktop/EdSystango/Projects/employee_ui/routes/countrysName.js")