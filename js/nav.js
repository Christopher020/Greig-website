const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <div class="header">
        <a href="index.html" class="logo">
            <img src="img/Greig_Tech_Variation_B-removebg-edited.png" alt="">
        </a>
        
            <input type="checkbox" id="menu-bar">
            <label for="menu-bar">Menu</label>
        
            <nav class="navbar">
                <ul>
                    <li><a href="oil.html">Maritime/Oil&Gas</a></li>
                    <li><a href="#">Mobile satlite solutions +</a>
                        <ul>
                            <li><a href="iridium-mobile.html">Iridium Mobile</a></li>
                            <li><a href="fleet_broadband.html">Fleet Broadband</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Navigation & Security +</a>
                        <ul>
                            <li><a href="ship_security.html">Ship security & Vessel tracking</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Other Services +</a>
                        <ul>
                            <li><a href="video_over-satelite.html">Video over satelite</a></li>
                            <li><a href="voice-over-satelite.html">Voice over satelite</a></li>
                        </ul>
                    </li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    `
}

createHeader()