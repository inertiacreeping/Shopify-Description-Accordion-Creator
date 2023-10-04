function generateCode() {
    var intro = document.getElementById('intro').value;
    var features = document.getElementById('features').value;
    var included = document.getElementById('included').value;
    
    var html = `
    <!-- Introduction -->
    <div class="product__description-segment">
        <h2>Introduction</h2>
        <p>${intro}</p>
    </div>

    <!-- Features & Benefits -->
    <div class="product__description-segment">
        <h2>Features & Benefits</h2>
        <div class="product__description-content">
            ${features}
        </div>
        <button class="show-more-button" style="display:none;">Show more</button>
    </div>

    <!-- What’s Included -->
    <div class="product__description-segment">
        <h2>What’s Included</h2>
        <div class="product__description-content">
            ${included}
        </div>
        <button class="show-more-button" style="display:none;">Show more</button>
    </div>
    `;
    
    // Display the generated code
    document.getElementById('output').value = html;
}
