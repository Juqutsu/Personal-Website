let countryNames = [
    "Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Albania",
    "Armenia", "Angola", "Argentina", "Austria", "Australia", "Azerbaijan", "Bosnia and Herzegovina",
    "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin",
    "Bermuda", "Bandar Brunei", "Bolivia", "Brazil", "Bahamas", "Bhutan", "Botswana", "Belarus", "Belize",
    "Canada", "Democratic Republic of Congo", "Central African Republic", "Republic of Congo", "Switzerland", "Ivory Coast",
    "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Cyprus", "Czech Republic",
    "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt",
    "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Micronesia", "France", "Gabon",
    "United Kingdom", "Grenada", "Georgia", "French Guiana", "Ghana", "Gambia", "Guinea", "Equatorial Guinea", "Greece",
    "Guatemala", "Guinea-Bissau", "Guyana", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel",
    "India", "Iraq", "Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan",
    "Cambodia", "Kiribati", "Comoros", "Saint Kitts and Nevis", "North Korea", "South Korea", "Kuwait", "Kazakhstan", "Laos",
    "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya",
    "Morocco", "Monaco", "Moldova", "Montenegro", "Madagascar", "Marshall Islands", "North Macedonia", "Mali", "Myanmar", "Mongolia",
    "Mauritania", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "Niger", "Nigeria",
    "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "New Zealand", "Oman", "Panama", "Peru", "Papua New Guinea", "Philippines",
    "Pakistan", "Poland", "Puerto Rico", "Portugal", "Palau", "Paraguay", "Qatar", "Romania", "Serbia", "Russia", "Rwanda",
    "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Slovenia", "Slovakia", "Sierra Leone", "San Marino",
    "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Syria", "Swaziland", "Chad", "Togo",
    "Thailand", "Tajikistan", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan",
    "Tanzania", "Ukraine", "Uganda", "United States", "Uruguay", "Uzbekistan", "Vatican City", "Saint Vincent and the Grenadines", "Venezuela",
    "Vietnam", "Vanuatu", "Samoa", "Kosovo", "Yemen", "South Africa", "Zambia", "Zimbabwe"
];

const countryIDs = [
    "AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU",
    "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ",
    "BM", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA",
    "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR",
    "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ",
    "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ",
    "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GM", "GN",
    "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID",
    "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP",
    "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ",
    "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV",
    "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM",
    "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
    "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA",
    "PE", "PG", "PH", "PK", "PL", "PR", "PT", "PW", "PY", "QA",
    "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG",
    "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV",
    "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO",
    "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ",
    "VA", "VC", "VE", "VN", "VU", "WS", "XK", "YE", "ZA", "ZM", "ZW"
];

let countrySVG = countryIDs.map(id => id.toLowerCase() + ".svg");
const displayFlag = document.getElementById("flag");
const totalPoints = countryIDs.length;
const input = document.getElementById("input");
let score = document.getElementById("score");

let currentPts = 0;
let newFlag = 0;

reroll();

function flag() {
    if(currentPts < totalPoints) {
        var formatedInput = input.value.toLowerCase().replace(/\s/g, "");
        var countryName = countryNames[newFlag].toLowerCase().replace(/\s/g, "");

        if(formatedInput == countryName) {
            input.value = "";
            countryNames.splice(newFlag, 1);
            countrySVG.splice(newFlag, 1);
            currentPts++;
            score.innerHTML = "Your Score - " + (currentPts + " / " + totalPoints);
            reroll();
        }
    }
}

function reroll(){
    newFlag = Math.floor(Math.random() * countrySVG.length);
    displayFlag.src = ("img/flags/"+ countrySVG[newFlag]);
    console.log(countryNames[newFlag])
    input.value = "";
}