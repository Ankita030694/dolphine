/**
 * Google Apps Script for receiving form data and writing to Google Sheets
 * 
 * INSTRUCTIONS:
 * 1. Open Google Drive and create a new Google Sheet
 * 2. Add headers in Row 1: Name, Email, Phone, City, Business Type, Timestamp
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code
 * 5. Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID (from the URL)
 * 6. Click Deploy > New Deployment
 * 7. Select type: Web app
 * 8. Execute as: Me
 * 9. Who has access: Anyone (for public form submissions)
 * 10. Click Deploy
 * 11. Copy the Web App URL and add it to your .env.local file as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Get the active spreadsheet (you can also use SpreadsheetApp.openById('YOUR_SHEET_ID'))
    // For now, we'll use the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var jsonData = JSON.parse(e.postData.contents);
    
    // Prepare the row data in the order: Name, Email, Phone, City, Business Type, Timestamp
    var rowData = [
      jsonData.name || '',
      jsonData.email || '',
      jsonData.phone || '',
      jsonData.city || '',
      jsonData.businessType || '',
      jsonData.timestamp || new Date().toISOString()
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Test function to verify the script works
 * Run this from the Apps Script editor to test
 */
function testPost() {
  var testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    city: 'Test City',
    businessType: 'Test Business',
    timestamp: new Date().toISOString()
  };
  
  var mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
