function add_cart(name, url, price) {
    // Retrieve items from sessionStorage and parse it into an array
    var items = JSON.parse(sessionStorage.getItem('items')) || [];
  
    console.log("items before adding:");
    console.log(items);
  
    // Push the new item to the array
    items.push([name, url, price]);
  
    // Save the updated items back to sessionStorage
    sessionStorage.setItem("items", JSON.stringify(items));
  
    console.log("items after adding:");
    showmesaige('Item added to cart successfully!');
  }

  function removecart(){
    sessionStorage.setItem("items", null);
    location.reload();

  }

  function showmesaige(message,erro='#28a745') {
    // Create the notification div if it doesn't exist
    var notificationDiv = document.getElementById('notification');
    if (!notificationDiv) {
        notificationDiv = document.createElement('div');
        notificationDiv.id = 'notification';
        document.body.appendChild(notificationDiv);
    }

    // Set the message and styles
    notificationDiv.innerText = message;
    notificationDiv.style.display = 'block';
    notificationDiv.style.position = 'fixed';
    notificationDiv.style.top = '0';
    notificationDiv.style.left = '50%';
    notificationDiv.style.transform = 'translateX(-50%)';
    notificationDiv.style.backgroundColor = erro;
    notificationDiv.style.color = '#fff';
    notificationDiv.style.padding = '10px';
    notificationDiv.style.borderRadius = '5px';
    notificationDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    notificationDiv.style.zIndex = '1000';

    // Hide the notification after 4 seconds
    setTimeout(function () {
        hideNotification();
    }, 4000);
}

function hideNotification() {
    var notificationDiv = document.getElementById('notification');
    if (notificationDiv) {
        notificationDiv.style.display = 'none';
    }
}

function coupun() {
    var couponCode = document.getElementById('coupon').value;
    var discount = 0;

    // Check if the entered coupon code is valid
    if (couponCode === 'off10') {
        discount = 10; // 10% discount for the 'off10' coupon code
        showmesaige('Coupon applied successfully! You got a 10% discount.');
        var totalItem = 0;
    items.forEach(function (item) {
        var price = parseFloat(item[2]);
        totalItem += price;
    });

    var discountAmount = (totalItem * discount) / 100;
    var discountedTotal = totalItem - discountAmount;

    // Update the total and VAT elements on the page
    document.getElementById('total_price').textContent = discountedTotal.toFixed(2) + ' BD';
    document.getElementById('vat').textContent = (discountAmount).toFixed(2) + ' BD';
    } else {
        showmesaige('Invalid coupon code. Please try again.',"red");
    }

    // Perform additional logic if needed, e.g., updating the total price with the discount
    
}

// Rest of your existing code...





