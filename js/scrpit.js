function calculatePrice() {
    // الحصول على قيم المدخلات
    const clientName = document.getElementById('clientName').value;
    const clientNumber = document.getElementById('clientNumber').value;
    const kitchenType = document.getElementById('kitchenType').value;
    const numDrawers = parseInt(document.getElementById('numDrawers').value) || 0;
    const numCabinets = parseInt(document.getElementById('numCabinets').value) || 0;
    const kitchenLength = parseFloat(document.getElementById('kitchenLength').value) || 0;
    const kitchenWidth = parseFloat(document.getElementById('kitchenWidth').value) || 0;

    // حساب السعر
    const pricePerSquareMeter = 15;
    const pricePerDrawer = 20;
    const pricePerCabinet = 15;

    const kitchenArea = kitchenLength * kitchenWidth;
    const kitchenPrice = kitchenArea * pricePerSquareMeter;
    const drawersPrice = numDrawers * pricePerDrawer;
    const cabinetsPrice = numCabinets * pricePerCabinet;

    const totalPrice = kitchenPrice + drawersPrice + cabinetsPrice;

    // عرض النتائج في الجدول
    const priceTableBody = document.querySelector('#priceTable tbody');
    priceTableBody.innerHTML = `
        <tr>
            <td>Client Name</td>
            <td>${clientName}</td>
        </tr>
        <tr>
            <td>Client Number</td>
            <td>${clientNumber}</td>
        </tr>
        <tr>
            <td>Kitchen Type</td>
            <td>${kitchenType}</td>
        </tr>
        <tr>
            <td>Number of Drawers</td>
            <td>${numDrawers}</td>
        </tr>
        <tr>
            <td>Number of Cabinets</td>
            <td>${numCabinets}</td>
        </tr>
        <tr>
            <td>Kitchen Length</td>
            <td>${kitchenLength} meters</td>
        </tr>
        <tr>
            <td>Kitchen Width</td>
            <td>${kitchenWidth} meters</td>
        </tr>
        <tr>
            <td>Kitchen Price</td>
            <td>${kitchenPrice}</td>
        </tr>
        <tr>
            <td>Drawers Price</td>
            <td>${drawersPrice}</td>
        </tr>
        <tr>
            <td>Cabinets Price</td>
            <td>${cabinetsPrice}</td>
        </tr>
        <tr>
            <td>Total Price</td>
            <td>${totalPrice}</td>
        </tr>
    `;

    // عرض الجدول
    document.getElementById('priceTable').style.display = 'table';
}
function generatePDF() {
    const element = document.getElementById('priceTable'); // تم تغيير 'feesTable' إلى 'priceTable'

    html2pdf(element, {
        margin: 10,
        filename: 'Bill.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
