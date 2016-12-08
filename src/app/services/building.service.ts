import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BuildingListService {

    bldg_list: any = [
        {
            "number": "1",
            "code": "SC",
            "name": "SANSON LIFE SCIENCES BUILDING"
        },
        {
            "number": "2",
            "code": "GS",
            "name": "GENERAL CLASSROOM SOUTH"
        },
        {
            "number": "3",
            "code": "LY",
            "name": "S. E. WIMBERLY LIBRARY"
        },
        {
            "number": "3-A",
            "code": "LY",
            "name": "LIBRARY ADDITION"
        },
        {
            "number": "4",
            "code": "IS",
            "name": "INSTRUCTIONAL SERVICES"
        },
        {
            "number": "5",
            "code": "UT",
            "name": "UTILITIES"
        },
        {
            "number": "6",
            "code": "DM",
            "name": "NATIONS NORTH RESIDENCE HALL - ALGONQUIN"
        },
        {
            "number": "8",
            "code": "SS",
            "name": "STUDENT SERVICES & CAFETERIA"
        },
        {
            "number": "8-W",
            "code": "SS",
            "name": "STUDENT HEALTH SERVICES"
        },
        {
            "number": "9",
            "code": "AL",
            "name": "DOROTHY F. SCHMIDT COLLEGE OF ARTS AND LETTERS"
        },
        {
            "number": "10",
            "code": "AD",
            "name": "KENNETH R. WILLIAMS ADMINISTRATION BUILDING"
        },
        {
            "number": "11",
            "code": "FH",
            "name": "ATHLETIC FIELD HOUSE - POOL"
        },
        {
            "number": "11-A",
            "code": "FW",
            "name": "ATHLETIC FIELD HOUSE WEST"
        },
        {
            "number": "12",
            "code": "BS",
            "name": "BEHAVIORAL SCIENCES"
        },
        {
            "number": "13",
            "code": "LS",
            "name": "LIFT STATION - UTILITIES"
        },
        {
            "number": "14",
            "code": "CT",
            "name": "COOLING TOWER"
        },
        {
            "number": "15",
            "code": "CT",
            "name": "COOLING TOWER"
        },
        {
            "number": "18",
            "code": "DM",
            "name": "HOUSING ASSISTANTS' HOUSE"
        },
        {
            "number": "22",
            "code": "CM",
            "name": "COMPUTER CENTER"
        },
        {
            "number": "23",
            "code": "FW",
            "name": "FLEMING WEST"
        },
        {
            "number": "24",
            "code": "FL",
            "name": "FLEMING HALL"
        },
        {
            "number": "25",
            "code": "KH",
            "name": "BARRY KAYE HALL"
        },
        {
            "number": "26",
            "code": "HS",
            "name": "ALEXANDER D. HENDERSON UNIVERSITY SCHOOL"
        },
        {
            "number": "26-A",
            "code": "HS",
            "name": "ALEXANDER D. HENDERSON UNIVERSITY SCHOOL - CLASSROOM"
        },
        {
            "number": "26-B",
            "code": "HS",
            "name": "ALEXANDER D. HENDERSON UNIVERSITY SCHOOL - COOLING TOWER"
        },
        {
            "number": "26-C",
            "code": "HS",
            "name": "ALEXANDER D. HENDERSON UNIVERSITY SCHOOL MEDIA CENTER"
        },
        {
            "number": "26-D",
            "code": "HS",
            "name": "ALEXANDER D. HENDERSON UNIVERSITY SCHOOL - CLASSROOM 2"
        },
        {
            "number": "26-F",
            "code": "HS",
            "name": "FAU HIGH SCHOOL"
        },
        {
            "number": "27",
            "code": "CT",
            "name": "COOLING TOWER"
        },
        {
            "number": "28",
            "code": "GZ",
            "name": "GAZEBO AT ATHLETIC FIELD HOUSE"
        },
        {
            "number": "31",
            "code": "UN",
            "name": "STUDENT UNION"
        },
        {
            "number": "31-A",
            "code": "AU",
            "name": "CAROLE AND BARRY KAYE AUDITORIUM"
        },
        {
            "number": "31-B",
            "code": "LO",
            "name": "LIVE OAK PAVILLION"
        },
        {
            "number": "31-C",
            "code": "LL",
            "name": "BARRY & FLORENCE FRIEDBERG LIFELONG LEARNING CENTER"
        },
        {
            "number": "31-D",
            "code": "CE",
            "name": "ELY MEYERSON CONTINUING EDUCATION HALL"
        },
        {
            "number": "31-E",
            "code": "CR",
            "name": "STUDENT ACTIVITIES CENTER"
        },
        {
            "number": "32",
            "code": "LS",
            "name": "SEWER LIFT STATION AT 30th STREET"
        },
        {
            "number": "33",
            "code": "PM",
            "name": "POOL MAINTENANCE BUILDING"
        },
        {
            "number": "33-A",
            "code": "PE",
            "name": "POOL EQUIPMENT BUILDING"
        },
        {
            "number": "33-B",
            "code": "PM",
            "name": "POOL ELECTRIC VAULT"
        },
        {
            "number": "34",
            "code": "VP",
            "name": "VENDING PAVILLION - FLEMING HALL"
        },
        {
            "number": "35",
            "code": "PG",
            "name": "PLANT GROWTH COMPLEX"
        },
        {
            "number": "35-A",
            "code": "RS",
            "name": "RESEARCH SUPPORT FACILITY"
        },
        {
            "number": "35-B",
            "code": "RS",
            "name": "RESEARCH SUPPORT FACILITY II"
        },
        {
            "number": "36",
            "code": "EG",
            "name": "ENGINEERING WEST"
        },
        {
            "number": "37",
            "code": "BP",
            "name": "HOUSING BARBECUE PAVILION"
        },
        {
            "number": "38",
            "code": "GY",
            "name": "ARENA"
        },
        {
            "number": "39",
            "code": "AG",
            "name": "RITTER ART GALLERY"
        },
        {
            "number": "41",
            "code": "IG",
            "name": "INFORMATION BOOTH"
        },
        {
            "number": "43",
            "code": "SE",
            "name": "SCIENCE BUILDING"
        },
        {
            "number": "44",
            "code": "SO",
            "name": "SOCIAL SCIENCE BUILDING"
        },
        {
            "number": "45",
            "code": "CC",
            "name": "KAREN SLATTERY EDUCATIONAL RESEARCH CENTER FOR CHILD DEVELOPMENT (ERCCD)"
        },
        {
            "number": "45-A",
            "code": "CL",
            "name": "PETER AND NONA GORDON LIBRARY & MEDIA CENTER"
        },
        {
            "number": "46",
            "code": "SH",
            "name": "STUDENT HOUSING SERVICES"
        },
        {
            "number": "47",
            "code": "ED",
            "name": "COLLEGE OF EDUCATION"
        },
        {
            "number": "47-A",
            "code": "VK",
            "name": "COLLEGE OF EDUCATION - KIOSK"
        },
        {
            "number": "48",
            "code": "BB",
            "name": "BASEBALL STADIUM"
        },
        {
            "number": "49",
            "code": "DP",
            "name": "GLADYS DAVIS PAVILION"
        },
        {
            "number": "50",
            "code": "SF",
            "name": "ALEXANDER D. HENDERSON UNIVERISTY SCHOOL - SOCCER FIELDS BUILDING"
        },
        {
            "number": "51",
            "code": "PA",
            "name": "DOROTHY F. SCHMIDT COLLEGE OF ARTS & LETTERS - PERFORMING ARTS"
        },
        {
            "number": "52",
            "code": "AH",
            "name": "DOROTHY F. SCHMIDT COLLEGE OF ARTS & LETTERS - HUMANITIES"
        },
        {
            "number": "53",
            "code": "VA",
            "name": "DOROTHY F. SCHMIDT COLLEGE OF ARTS & LETTERS - VISUAL ARTS"
        },
        {
            "number": "54",
            "code": "CT",
            "name": "COOLING TOWER - UTILITIES"
        },
        {
            "number": "55",
            "code": "PS",
            "name": "PHYSICAL SCIENCE"
        },
        {
            "number": "56",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT - ADMINISTRATION"
        },
        {
            "number": "57-A",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 57A"
        },
        {
            "number": "57-B",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 57B"
        },
        {
            "number": "57-C",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 57C"
        },
        {
            "number": "58-A",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 58A"
        },
        {
            "number": "58-B",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 58B"
        },
        {
            "number": "58-C",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 58C"
        },
        {
            "number": "58-D",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 58D"
        },
        {
            "number": "58-E",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 58E"
        },
        {
            "number": "59-A",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 59A"
        },
        {
            "number": "59-B",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 59B"
        },
        {
            "number": "59-C",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 59C"
        },
        {
            "number": "59-D",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 59D"
        },
        {
            "number": "59-E",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 59E"
        },
        {
            "number": "60-A",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 60A"
        },
        {
            "number": "60-B",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 60B"
        },
        {
            "number": "60-C",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 60C"
        },
        {
            "number": "60-D",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 60D"
        },
        {
            "number": "60-E",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 60E"
        },
        {
            "number": "61",
            "code": "SA",
            "name": "UNIVERSITY VILLAGE STUDENT APARTMENT 61"
        },
        {
            "number": "62",
            "code": "PW",
            "name": "BPW SCHOLARSHIP HOUSE"
        },
        {
            "number": "66",
            "code": "GH",
            "name": "RESEARCH GREENHOUSE"
        },
        {
            "number": "67",
            "code": "AC",
            "name": "TOM OXLEY ATHLETIC CENTER"
        },
        {
            "number": "67-A",
            "code": "OS",
            "name": "STORAGE UTILITIES"
        },
        {
            "number": "67-B",
            "code": "TC",
            "name": "WALLY SANGER OWL CLUB CENTER -TICKET OFFICE"
        },
        {
            "number": "68",
            "code": "SB",
            "name": "SOFTBALL STADIUM"
        },
        {
            "number": "68-A",
            "code": "SB",
            "name": "SOFTBALL STADIUM CONCESSION STAND"
        },
        {
            "number": "68-B",
            "code": "SB",
            "name": "STORAGE ATHLETICS"
        },
        {
            "number": "69",
            "code": "CO",
            "name": "CAMPUS OPERATIONS BUILDING"
        },
        {
            "number": "70",
            "code": "IR",
            "name": "INDIAN RIVER TOWERS - COMMONS BUILDING"
        },
        {
            "number": "70-A",
            "code": "DM",
            "name": "INDIAN RIVER TOWERS - UTILITY BUILDING"
        },
        {
            "number": "70-E",
            "code": "DM",
            "name": "INDIAN RIVER TOWERS - EAST TOWER"
        },
        {
            "number": "70-W",
            "code": "DM",
            "name": "INDIAN RIVER TOWERS - WEST TOWER"
        },
        {
            "number": "71",
            "code": "BC",
            "name": "CHARLES E. SCHMIDT COLLEGE OF MEDICINE"
        },
        {
            "number": "72",
            "code": "UP",
            "name": "SATELLITE UTILITY PLANT"
        },
        {
            "number": "73",
            "code": "GN",
            "name": "GENERAL CLASSROOM NORTH"
        },
        {
            "number": "74",
            "code": "RC",
            "name": "PAVILION - ROPES COURSE"
        },
        {
            "number": "75",
            "code": "PR",
            "name": "THE ELEANOR R. BALDWIN HOUSE - PRESIDENTS RESIDENCE"
        },
        {
            "number": "76",
            "code": "BK",
            "name": "BOOKSTORE"
        },
        {
            "number": "77",
            "code": "PV",
            "name": "PAVILION - STUDENT SERVICES"
        },
        {
            "number": "78",
            "code": "SR",
            "name": "SOCCER FIELD RESTROOMS - GLADES ROAD"
        },
        {
            "number": "79",
            "code": "AZ",
            "name": "LOUIS & ANNE GREEN MEMORY & WELLNESS CENTER - ADMINISTRATION"
        },
        {
            "number": "79-A",
            "code": "AZ",
            "name": "LOUIS & ANNE GREEN MEMORY & WELLNESS CENTER - DAY CARE"
        },
        {
            "number": "79-B",
            "code": "AZ",
            "name": "LOUIS & ANNE GREEN MEMORY & WELLNESS CENTER ADDITION"
        },
        {
            "number": "80",
            "code": "SU",
            "name": "STUDENT SUPPORT SERVICES FACILITY"
        },
        {
            "number": "81",
            "code": "PK",
            "name": "PARKING GARAGE I"
        },
        {
            "number": "82",
            "code": "BP",
            "name": "HENDERSON SCHOOL BARBECUE PAVILION"
        },
        {
            "number": "83",
            "code": "BP",
            "name": "HENDERSON SCHOOL BARBECUE SHELTER"
        },
        {
            "number": "84",
            "code": "NU",
            "name": "CHRISTINE E. LYNN COLLEGE OF NURSING"
        },
        {
            "number": "85",
            "code": "EH",
            "name": "ENVIRONMENTAL HEALTH SUPPORT FACILITY"
        },
        {
            "number": "86",
            "code": "BU",
            "name": "COLLEGE OF BUSINESS"
        },
        {
            "number": "87",
            "code": "DS",
            "name": "DESANTIS CENTER PAVILION"
        },
        {
            "number": "88",
            "code": "PK",
            "name": "PARKING GARAGE II"
        },
        {
            "number": "89",
            "code": "HP",
            "name": "HERITAGE PARK TOWERS - COMMUNITY BUILDING"
        },
        {
            "number": "89-N",
            "code": "DM",
            "name": "HERITAGE PARK NORTH TOWER"
        },
        {
            "number": "89-S",
            "code": "DM",
            "name": "HERITAGE PARK SOUTH TOWER"
        },
        {
            "number": "90",
            "code": "US",
            "name": "UTILITIES SUPPORT"
        },
        {
            "number": "91",
            "code": "RC",
            "name": "RECREATION AND FITNESS CENTER"
        },
        {
            "number": "92",
            "code": "GP",
            "name": "GLADES PARK TOWERS"
        },
        {
            "number": "92-N",
            "code": "DM",
            "name": "GLADES PARK NORTH TOWER"
        },
        {
            "number": "92-S",
            "code": "DM",
            "name": "GLADES PARK SOUTH TOWER"
        },
        {
            "number": "93",
            "code": "OD",
            "name": "OFFICE DEPOT CENTER FOR EXECUTIVE EDUCATION"
        },
        {
            "number": "94",
            "code": "FA",
            "name": "MARLEEN AND HAROLD FORKAS ALUMNI CENTER"
        },
        {
            "number": "96",
            "code": "EE",
            "name": "ENGINEERING EAST"
        },
        {
            "number": "97",
            "code": "CU",
            "name": "CULTURE AND SOCIETY"
        },
        {
            "number": "98",
            "code": "IV",
            "name": "INNOVATION VILLAGE APARTMENTS - NORTH"
        },
        {
            "number": "98-A",
            "code": "US",
            "name": "UTILITIES SUPPORT"
        },
        {
            "number": "98-B",
            "code": "BK",
            "name": "BIKE SHLTER"
        },
        {
            "number": "99",
            "code": "IV",
            "name": "INNOVATION VILLAGE APARTMENTS - SOUTH"
        },
        {
            "number": "99-A",
            "code": "BK",
            "name": "BIKE SHELTER"
        },
        {
            "number": "99-B",
            "code": "BK",
            "name": "BIKE SHELTER"
        },
        {
            "number": "100",
            "code": "FS",
            "name": "FAU STADIUM"
        },
        {
            "number": "101",
            "code": "SP",
            "name": "STADIUM SUPPORT FACILITY"
        },
        {
            "number": "102",
            "code": "PH",
            "name": "PARLIAMENT HALL"
        },
        {
            "number": "103",
            "code": "PK",
            "name": "PARKING GARAGE III"
        },
        {
            "number": "104",
            "code": "ME",
            "name": "CHARLES E. SCHMIDT COLLEGE OF MEDICINE - OFFICE BUILDING (under construction)"
        },
        {
            "number": "105",
            "code": "DA",
            "name": "AT&T DAS HEAD-END BUILDING"
        },
        {
            "number": "106",
            "code": "TE",
            "name": "TECH RUNWAY"
        },
        {
            "number": "B-01",
            "code": "BX",
            "name": "BUS STOP SHELTER - ADMIN. BUILDING"
        },
        {
            "number": "B-02",
            "code": "BX",
            "name": "BUS STOP SHELTER - ADMIN. BUILDING"
        },
        {
            "number": "B-03",
            "code": "BX",
            "name": "BUS STOP SHELTER - STUDENT APARTMENTS"
        },
        {
            "number": "B-04",
            "code": "BX",
            "name": "BUS STOP SHELTER - INDIAN RIVER STREET"
        },
        {
            "number": "B-05",
            "code": "BX",
            "name": "BUS STOP SHELTER - INNOVATION VILLAGE"
        },
        {
            "number": "B-06",
            "code": "BX",
            "name": "BUS STOP SHELTER - FAU BLVD."
        },
        {
            "number": "B-07",
            "code": "BX",
            "name": "BUS STOP SHELTER - FAU BLVD."
        },
        {
            "number": "B-08",
            "code": "BX",
            "name": "BUS STOP SHELTER - LOT 5"
        },
        {
            "number": "B-09",
            "code": "BX",
            "name": "BUS STOP SHELTER - COLLEGE OF BUSINESS"
        },
        {
            "number": "T005",
            "code": "TB",
            "name": "PROPERTY MGMT, ARCHEOLOGY/GEOLOGY LABS, RFB&D"
        },
        {
            "number": "T006",
            "code": "TB",
            "name": "ART CERAMICS STUDIO"
        },
        {
            "number": "T010",
            "code": "VC",
            "name": "ARTS AND LETTERS"
        },
        {
            "number": "T011",
            "code": "TB",
            "name": "ROTC"
        },
        {
            "number": "TH26",
            "code": "HS",
            "name": "ALEXANDER D. HENDERSON UNIVERSITY SCHOOL - CLASSROOM 3"
        }
    ];

    constructor() {
    }

    getDistinctBldgCodes() {
        let res = [];
        this.bldg_list.map(function (o) {
            if (res.indexOf(o.code) < 0) res.push(o.code);
        });
        return res;
    }

    getDistinctBldgNames() {
        let res = [];
        this.bldg_list.map(function (o) {
            if (res.indexOf(o.name) < 0) res.push(o.name);
        });
        return res;
    }

    getBldgNamesByCode(code) {
        let res = [];
        this.bldg_list.map(function (o) {
            if (o.code === code) {
                if (res.indexOf(o.name) < 0) res.push(o.name);
            }
        });
        return res;
    }

    getBldgCodeFromName(name) {
        let code: string;
        this.bldg_list.map(o => {
            if (o.name === name) code = o.code;
        })
        return code;
    }

}