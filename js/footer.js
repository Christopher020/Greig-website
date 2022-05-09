const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-container">
            <div class="contact-us">
                <h3>Contact Us</h3>
                <p><i class="fas fa-phone-alt"></i>+234 803 265 2425</p>
                <p><i class="fas fa-envelope"></i>info@greigtechnologies.com</p>
                <p><i class="fas fa-map-marker-alt"></i>10 Anuoluwapo Close off Opebi Road Ikeja Lagos</p>
            </div>
    
            <div class="connect-us">
                <h3>Connect with Us</h3>
                <a href="#"><i class="fab fa-facebook-square"></i>Facebook</a>
                <a href="#"><i class="fab fa-twitter"></i>Twitter</a>
                <a href="#"><i class="fab fa-instagram"></i>Instagram</a>
            </div>
    
            <div class="about-us">
                <h3>About Us</h3>
                <p>Greig Technologies Limited delivers a complete range of <br> satellite communications solutions for the oil and gas industry <br> – for the exploration and production sites. Our satellite <br> services feature virtually worldwide coverage via Ku and C- <br> Band options, enterprise class SLA’s with custom Quality of <br> Service.</p>
            </div>    

            <a href="index.html" class="logo">
            <img src="img/Greig_Tech_Variation_B-removebg-edited.png" alt="">
            </a>
        </div>
        
        <p class="regards">Greig Technologies 2022 All Rights Reserved.</p>
        
    `
}

createFooter();