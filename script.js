/* =====================================================
   TRAVELMATE
   COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   DESTINATION DATA
===================================================== */

const destinations = [

    {
        name: "Chennai",
        state: "Tamil Nadu",
        category: "city",
        wiki: "Chennai",
        budget: 4500,
        rating: 4.6,
        description: "A vibrant coastal city known for Marina Beach, temples, culture and South Indian cuisine."
    },

    {
        name: "Pondicherry",
        state: "Tamil Nadu",
        category: "beach",
        wiki: "Pondicherry",
        budget: 4500,
        rating: 4.7,
        description: "A peaceful coastal destination known for French architecture, beaches and cafes."
    },

    {
        name: "Goa",
        state: "Goa",
        category: "beach",
        wiki: "Goa",
        budget: 6000,
        rating: 4.8,
        description: "A popular destination known for beaches, nightlife and Portuguese architecture."
    },

    {
        name: "Varanasi",
        state: "Uttar Pradesh",
        category: "temple",
        wiki: "Varanasi",
        budget: 4500,
        rating: 4.8,
        description: "A spiritual city famous for the Ganges, temples and Ganga Aarti."
    },

    {
        name: "Tirupati",
        state: "Andhra Pradesh",
        category: "temple",
        wiki: "Venkateswara_Temple",
        budget: 5000,
        rating: 4.8,
        description: "A famous pilgrimage destination and home of Sri Venkateswara Temple."
    },

    {
        name: "Madurai",
        state: "Tamil Nadu",
        category: "temple",
        wiki: "Meenakshi_Temple",
        budget: 4500,
        rating: 4.7,
        description: "An ancient Tamil city famous for the magnificent Meenakshi Amman Temple."
    },

    {
        name: "Rameswaram",
        state: "Tamil Nadu",
        category: "temple",
        wiki: "Ramanathaswamy_Temple",
        budget: 5500,
        rating: 4.7,
        description: "A major pilgrimage destination famous for Ramanathaswamy Temple."
    },

    {
        name: "Ayodhya",
        state: "Uttar Pradesh",
        category: "temple",
        wiki: "Ayodhya",
        budget: 5500,
        rating: 4.7,
        description: "A historic and spiritual city associated with Lord Rama."
    },

    {
        name: "Agra",
        state: "Uttar Pradesh",
        category: "historical",
        wiki: "Taj_Mahal",
        budget: 7000,
        rating: 4.8,
        description: "Home to the world-famous Taj Mahal."
    },

    {
        name: "Jaipur",
        state: "Rajasthan",
        category: "historical",
        wiki: "Jaipur",
        budget: 6500,
        rating: 4.7,
        description: "The Pink City, famous for forts, palaces and royal heritage."
    },

    {
        name: "Jodhpur",
        state: "Rajasthan",
        category: "historical",
        wiki: "Jodhpur",
        budget: 7000,
        rating: 4.7,
        description: "The Blue City dominated by the impressive Mehrangarh Fort."
    },

    {
        name: "Udaipur",
        state: "Rajasthan",
        category: "historical",
        wiki: "Udaipur",
        budget: 7000,
        rating: 4.8,
        description: "A beautiful city known for lakes and palaces."
    },

    {
        name: "Hampi",
        state: "Karnataka",
        category: "historical",
        wiki: "Hampi",
        budget: 5500,
        rating: 4.8,
        description: "A UNESCO World Heritage destination famous for Vijayanagara ruins."
    },

    {
        name: "Manali",
        state: "Himachal Pradesh",
        category: "mountain",
        wiki: "Manali,_Himachal_Pradesh",
        budget: 8500,
        rating: 4.7,
        description: "A Himalayan destination known for mountains, valleys and adventure."
    },

    {
        name: "Shimla",
        state: "Himachal Pradesh",
        category: "mountain",
        wiki: "Shimla",
        budget: 8000,
        rating: 4.6,
        description: "A beautiful hill station with colonial architecture and Himalayan views."
    },

    {
        name: "Kashmir",
        state: "Jammu and Kashmir",
        category: "mountain",
        wiki: "Kashmir",
        budget: 10000,
        rating: 4.9,
        description: "A spectacular region famous for mountains, lakes and valleys."
    },

    {
        name: "Darjeeling",
        state: "West Bengal",
        category: "mountain",
        wiki: "Darjeeling",
        budget: 8000,
        rating: 4.7,
        description: "A Himalayan hill station famous for tea gardens and mountain views."
    },

    {
        name: "Munnar",
        state: "Kerala",
        category: "nature",
        wiki: "Munnar",
        budget: 6500,
        rating: 4.8,
        description: "A scenic hill station surrounded by tea plantations and mountains."
    },

    {
        name: "Coorg",
        state: "Karnataka",
        category: "nature",
        wiki: "Kodagu",
        budget: 5500,
        rating: 4.7,
        description: "A peaceful destination known for coffee plantations and waterfalls."
    },

    {
        name: "Ooty",
        state: "Tamil Nadu",
        category: "nature",
        wiki: "Ooty",
        budget: 5500,
        rating: 4.6,
        description: "A famous Nilgiri hill station known for gardens and cool weather."
    },

    {
        name: "Kodaikanal",
        state: "Tamil Nadu",
        category: "nature",
        wiki: "Kodaikanal",
        budget: 5500,
        rating: 4.7,
        description: "A beautiful hill station famous for its lake and forests."
    },

    {
        name: "Rishikesh",
        state: "Uttarakhand",
        category: "nature",
        wiki: "Rishikesh",
        budget: 5500,
        rating: 4.7,
        description: "A scenic destination known for yoga, rafting and adventure."
    },

    {
        name: "Mumbai",
        state: "Maharashtra",
        category: "city",
        wiki: "Mumbai",
        budget: 6500,
        rating: 4.7,
        description: "India's financial capital famous for Marine Drive and Gateway of India."
    },

    {
        name: "Delhi",
        state: "Delhi",
        category: "city",
        wiki: "Delhi",
        budget: 6000,
        rating: 4.6,
        description: "India's capital city with historic monuments and modern attractions."
    },

    {
        name: "Bengaluru",
        state: "Karnataka",
        category: "city",
        wiki: "Bangalore",
        budget: 5000,
        rating: 4.5,
        description: "A technology hub known for parks, food and pleasant weather."
    },

    {
        name: "Hyderabad",
        state: "Telangana",
        category: "city",
        wiki: "Hyderabad",
        budget: 5000,
        rating: 4.6,
        description: "A city famous for Charminar and Hyderabadi cuisine."
    },

    {
        name: "Kolkata",
        state: "West Bengal",
        category: "city",
        wiki: "Kolkata",
        budget: 6000,
        rating: 4.6,
        description: "A cultural city known for art, heritage and Bengali cuisine."
    },

    {
        name: "Kochi",
        state: "Kerala",
        category: "city",
        wiki: "Kochi",
        budget: 5500,
        rating: 4.6,
        description: "A historic coastal city famous for Fort Kochi."
    },

    {
        name: "Amritsar",
        state: "Punjab",
        category: "historical",
        wiki: "Golden_Temple",
        budget: 6000,
        rating: 4.8,
        description: "Famous for the Golden Temple and Sikh heritage."
    },

    {
        name: "Kanyakumari",
        state: "Tamil Nadu",
        category: "beach",
        wiki: "Kanyakumari",
        budget: 5000,
        rating: 4.7,
        description: "India's southern tip famous for ocean views and sunrise."
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let selectedCategory = "all";

let favorites =
    JSON.parse(
        localStorage.getItem("travelmateFavorites")
    ) || [];

let currentFrom = "";
let currentTo = "";


/* =====================================================
   PLACEHOLDER
===================================================== */

function createPlaceholder(name) {

    return "https://placehold.co/800x500/e8edf2/1769aa?text=" +
        encodeURIComponent(name);

}


/* =====================================================
   WIKIPEDIA IMAGE
===================================================== */

async function loadImage(destination, img) {

    try {

        const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(destination.wiki)}`
        );

        if (!response.ok) {
            throw new Error("Image failed");
        }

        const data = await response.json();

        if (
            data.thumbnail &&
            data.thumbnail.source
        ) {

            img.src = data.thumbnail.source;

        }

    }

    catch(error) {

        img.src =
            createPlaceholder(destination.name);

    }

}


/* =====================================================
   RENDER DESTINATIONS
===================================================== */

function renderDestinations() {

    const grid =
        document.getElementById("destinationGrid");

    const noResults =
        document.getElementById("noResults");

    const search =
        document
            .getElementById("browseSearch")
            .value
            .toLowerCase()
            .trim();

    const budget =
        document
            .getElementById("budgetFilter")
            .value;

    const sort =
        document
            .getElementById("sortFilter")
            .value;


    let filtered =
        destinations.filter(destination => {

            const categoryMatch =
                selectedCategory === "all" ||
                destination.category === selectedCategory;

            const searchMatch =
                destination.name
                    .toLowerCase()
                    .includes(search)
                ||
                destination.state
                    .toLowerCase()
                    .includes(search);

            const budgetMatch =
                budget === "all" ||
                destination.budget <= Number(budget);

            return (
                categoryMatch &&
                searchMatch &&
                budgetMatch
            );

        });


    /* SORT */

    if (sort === "name") {

        filtered.sort(
            (a,b) =>
                a.name.localeCompare(b.name)
        );

    }

    else if (sort === "low") {

        filtered.sort(
            (a,b) =>
                a.budget - b.budget
        );

    }

    else if (sort === "high") {

        filtered.sort(
            (a,b) =>
                b.budget - a.budget
        );

    }

    else if (sort === "rating") {

        filtered.sort(
            (a,b) =>
                b.rating - a.rating
        );

    }


    grid.innerHTML = "";


    if (filtered.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    filtered.forEach(
        (destination,index) => {

            const card =
                document.createElement("article");

            card.className =
                "destination-card";


            const favorite =
                favorites.includes(
                    destination.name
                );


            card.innerHTML = `

                <div class="destination-image">

                    <img
                        id="destinationImage${index}"
                        src="${createPlaceholder(destination.name)}"
                        alt="${destination.name}"
                    >

                    <button
                        class="favorite-btn ${favorite ? "active" : ""}"
                        onclick="toggleFavorite('${destination.name}')">

                        ${favorite ? "♥" : "♡"}

                    </button>

                </div>


                <div class="destination-info">

                    <h3>
                        ${destination.name}
                    </h3>

                    <div class="location">
                        📍 ${destination.state}
                    </div>

                    <div class="destination-meta">

                        <span class="rating">
                            ★ ${destination.rating}
                        </span>

                        <span class="price">
                            ₹${destination.budget.toLocaleString()}
                        </span>

                    </div>


                    <div class="card-buttons">

                        <button
                            class="explore-btn"
                            onclick="exploreDestination('${destination.name}')">

                            Explore

                        </button>

                        <button
                            class="map-btn"
                            onclick="showOnMap('${destination.name}')">

                            🗺️ Map

                        </button>

                    </div>

                </div>
            `;


            grid.appendChild(card);


            loadImage(
                destination,
                document.getElementById(
                    `destinationImage${index}`
                )
            );

        }
    );

}


/* =====================================================
   CATEGORY
===================================================== */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".category")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                this.classList.add("active");

                selectedCategory =
                    this.dataset.category;

                renderDestinations();

            }
        );

    });


/* =====================================================
   FILTER EVENTS
===================================================== */

document
    .getElementById("browseSearch")
    .addEventListener(
        "input",
        renderDestinations
    );

document
    .getElementById("budgetFilter")
    .addEventListener(
        "change",
        renderDestinations
    );

document
    .getElementById("sortFilter")
    .addEventListener(
        "change",
        renderDestinations
    );


/* =====================================================
   HERO SEARCH
===================================================== */

function searchFromHero() {

    const search =
        document
            .getElementById("heroSearch")
            .value
            .trim();


    document
        .getElementById("browseSearch")
        .value = search;


    document
        .getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });


    renderDestinations();

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(name) {

    if (favorites.includes(name)) {

        favorites =
            favorites.filter(
                item => item !== name
            );

    }

    else {

        favorites.push(name);

    }


    localStorage.setItem(
        "travelmateFavorites",
        JSON.stringify(favorites)
    );


    renderDestinations();

}


/* =====================================================
   MAP
===================================================== */

const places = {

    "Chennai":
        [13.0827,80.2707],

    "Pondicherry":
        [11.9416,79.8083],

    "Goa":
        [15.2993,74.1240],

    "Varanasi":
        [25.3176,82.9739],

    "Tirupati":
        [13.6288,79.4192],

    "Madurai":
        [9.9252,78.1198],

    "Rameswaram":
        [9.2876,79.3129],

    "Ayodhya":
        [26.7922,82.1998],

    "Agra":
        [27.1767,78.0081],

    "Jaipur":
        [26.9124,75.7873],

    "Jodhpur":
        [26.2389,73.0243],

    "Udaipur":
        [24.5854,73.7125],

    "Hampi":
        [15.3350,76.4600],

    "Manali":
        [32.2396,77.1887],

    "Shimla":
        [31.1048,77.1734],

    "Kashmir":
        [34.0837,74.7973],

    "Munnar":
        [10.0889,77.0595],

    "Coorg":
        [12.3375,75.8069],

    "Ooty":
        [11.4102,76.6950],

    "Kodaikanal":
        [10.2381,77.4892],

    "Rishikesh":
        [30.0869,78.2676],

    "Mumbai":
        [19.0760,72.8777],

    "Delhi":
        [28.6139,77.2090],

    "Bengaluru":
        [12.9716,77.5946],

    "Hyderabad":
        [17.3850,78.4867],

    "Kolkata":
        [22.5726,88.3639],

    "Kochi":
        [9.9312,76.2673],

    "Amritsar":
        [31.6340,74.8723],

    "Darjeeling":
        [27.0410,88.2663],

    "Kanyakumari":
        [8.0883,77.5385]

};


/* CREATE MAP */

const map =
    L.map("map")
    .setView(
        [22.9734,78.6569],
        5
    );


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,

        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(map);


const markers = {};


/* ADD MARKERS */

Object.entries(places).forEach(
    ([name, coordinates]) => {

        const marker =
            L.marker(coordinates)
            .addTo(map);


        marker.bindPopup(`
            <div style="text-align:center">

                <h3 style="color:#1769aa">
                    ${name}
                </h3>

                <p>
                    Explore ${name}
                </p>

                <button
                    onclick="selectDestination('${name}')"
                    style="
                        background:#1769aa;
                        color:white;
                        border:none;
                        padding:8px 15px;
                        border-radius:8px;
                        cursor:pointer;
                    ">

                    Plan Trip

                </button>

            </div>
        `);


        markers[name] = marker;

    }
);


/* =====================================================
   SHOW ON MAP
===================================================== */

function showOnMap(name) {

    if (!places[name]) return;


    map.setView(
        places[name],
        10
    );


    markers[name].openPopup();


    document
        .getElementById("mapSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function selectDestination(name) {

    document
        .getElementById("toCity")
        .value = name;

}


/* =====================================================
   ROUTE
===================================================== */

function showRoute() {

    const from =
        document
            .getElementById("fromCity")
            .value
            .trim();

    const to =
        document
            .getElementById("toCity")
            .value
            .trim();


    if (!from || !to) {

        alert(
            "Please enter both starting city and destination."
        );

        return;

    }


    currentFrom = from;

    currentTo = to;


    document
        .getElementById("routeText")
        .textContent =
        `Your journey is from ${from} to ${to}.`;


    document
        .getElementById("routeInfo")
        .style.display = "block";


    if (places[to]) {

        map.setView(
            places[to],
            7
        );

        markers[to].openPopup();

    }

}


/* =====================================================
   GOOGLE MAPS
===================================================== */

function openGoogleMaps() {

    if (!currentFrom || !currentTo) {

        alert(
            "Please select a route first."
        );

        return;

    }


    const url =
        `https://www.google.com/maps/dir/${encodeURIComponent(currentFrom)}/${encodeURIComponent(currentTo)}`;


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   ROUTE PLANNER
===================================================== */

function openRoute() {

    const from =
        document
            .getElementById("routeStart")
            .value
            .trim();

    const to =
        document
            .getElementById("routeDestination")
            .value
            .trim();

    const mode =
        document
            .getElementById("travelMode")
            .value;


    if (!from || !to) {

        alert(
            "Please enter both locations."
        );

        return;

    }


    let travelMode = "driving";

    if (mode === "walking") {
        travelMode = "walking";
    }

    if (mode === "bicycling") {
        travelMode = "bicycling";
    }


    const url =
        `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=${travelMode}`;


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   HOTELS
===================================================== */

const hotelData = {

    luxury: [

        {
            name: "Taj Palace",
            location: "New Delhi",
            price: "₹12,000 / night",
            rating: "★★★★★"
        },

        {
            name: "ITC Grand Chola",
            location: "Chennai",
            price: "₹9,500 / night",
            rating: "★★★★★"
        },

        {
            name: "The Leela Palace",
            location: "Bengaluru",
            price: "₹10,500 / night",
            rating: "★★★★★"
        }

    ],


    budget: [

        {
            name: "Treebo Comfort",
            location: "Chennai",
            price: "₹1,800 / night",
            rating: "★★★★"
        },

        {
            name: "FabHotel",
            location: "Bengaluru",
            price: "₹2,000 / night",
            rating: "★★★★"
        },

        {
            name: "City Stay Hotel",
            location: "Hyderabad",
            price: "₹1,500 / night",
            rating: "★★★★"
        }

    ],


    resort: [

        {
            name: "Taj Exotica Resort",
            location: "Goa",
            price: "₹8,500 / night",
            rating: "★★★★★"
        },

        {
            name: "Radisson Blu Resort",
            location: "Goa",
            price: "₹7,500 / night",
            rating: "★★★★★"
        },

        {
            name: "Sterling Resort",
            location: "Ooty",
            price: "₹5,000 / night",
            rating: "★★★★"
        }

    ]

};


/* SHOW HOTELS */

function showHotels(type) {

    const results =
        document.getElementById(
            "hotelResults"
        );

    const title =
        document.getElementById(
            "hotelResultTitle"
        );

    const list =
        document.getElementById(
            "hotelList"
        );


    list.innerHTML = "";


    if (type === "luxury") {

        title.textContent =
            "🏨 Luxury Hotels";

    }

    else if (type === "budget") {

        title.textContent =
            "🏨 Budget Hotels";

    }

    else {

        title.textContent =
            "🏨 Resorts";

    }


    hotelData[type].forEach(hotel => {

        const card =
            document.createElement("div");

        card.className =
            "hotel-result-card";


        card.innerHTML = `

            <h3>
                ${hotel.name}
            </h3>

            <p>
                📍 ${hotel.location}
            </p>

            <p>
                ${hotel.rating}
            </p>

            <strong>
                ${hotel.price}
            </strong>

            <br><br>

            <button
                onclick="bookHotel('${hotel.name}')">

                View Hotel

            </button>

        `;


        list.appendChild(card);

    });


    results.classList.add("show");


    results.scrollIntoView({
        behavior: "smooth"
    });

}


/* HOTEL BUTTON */

function bookHotel(name) {

    const hotel = Object.values(hotelData)
        .flat()
        .find(h => h.name === name);

    if (!hotel) {
        alert("Hotel details not found.");
        return;
    }

    document.getElementById("hotelModalName").textContent =
        "🏨 " + hotel.name;

    document.getElementById("hotelModalLocation").textContent =
        "📍 " + hotel.location;

    document.getElementById("hotelModalRating").textContent =
        hotel.rating;

    document.getElementById("hotelModalPrice").textContent =
        hotel.price;

    document.getElementById("hotelModal").classList.add("show");
}


function closeHotelModal() {

    document
        .getElementById("hotelModal")
        .classList.remove("show");

}

function bookNow() {

    const hotelName =
        document.getElementById("hotelModalName")
        .textContent
        .replace("🏨", "")
        .trim();

    const location =
        document.getElementById("hotelModalLocation")
        .textContent
        .replace("📍", "")
        .trim();

    const search =
        encodeURIComponent(
            hotelName + " " + location + " hotel booking"
        );

    window.open(
        "https://www.google.com/search?q=" + search,
        "_blank"
    );
}


/* =====================================================
   LOGIN
===================================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("show");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("show");

}


function loginUser() {

    alert(
        "Login system will be connected to the backend."
    );

    closeLogin();

}


/* =====================================================
   INITIAL LOAD
===================================================== */

renderDestinations();