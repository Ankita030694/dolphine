/**
 * Google Apps Script for receiving form data and writing to Google Sheets
 * 
 * INSTRUCTIONS:
 * 1. Open Google Drive and create a new Google Sheet
 * 2. Add headers in Row 1: Timestamp, Name, Phone, Email, City, Business Type
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code
 * 5. Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID (from the URL)
 * 6. Click Deploy > New Deployment
 * 7. Select type: Web app
 * 8. Execute as: Me
 * 9. Who has access: Anyone (for public form submissions)
 * 10. Click Deploy
 * 11. Copy the Web App URL and add it to your .env.local file as NEXT_PUBLIC_SCRIPT_URL_SHEET
 */

/**
 * Convert UTC timestamp to Indian Standard Time (IST) and format it
 * @param {string} isoString - ISO timestamp string
 * @return {string} Formatted Indian date and time (DD/MM/YYYY HH:MM:SS IST)
 */
function formatIndianDateTime(isoString) {
  try {
    // Parse the ISO string
    var date = new Date(isoString);
    
    // Use Indian Standard Time (IST) - Asia/Kolkata timezone
    var timeZone = 'Asia/Kolkata';
    
    // Format date: DD/MM/YYYY
    var dateStr = Utilities.formatDate(date, timeZone, 'dd/MM/yyyy');
    
    // Format time: HH:MM:SS
    var timeStr = Utilities.formatDate(date, timeZone, 'HH:mm:ss');
    
    // Combine: DD/MM/YYYY HH:MM:SS IST
    return dateStr + ' ' + timeStr + ' IST';
  } catch (error) {
    // Fallback: return current Indian time if parsing fails
    var now = new Date();
    var timeZone = 'Asia/Kolkata';
    var dateStr = Utilities.formatDate(now, timeZone, 'dd/MM/yyyy');
    var timeStr = Utilities.formatDate(now, timeZone, 'HH:mm:ss');
    return dateStr + ' ' + timeStr + ' IST';
  }
}

function doPost(e) {
  try {
    // Get the active spreadsheet (you can also use SpreadsheetApp.openById('YOUR_SHEET_ID'))
    // For now, we'll use the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var jsonData = JSON.parse(e.postData.contents);
    
    // Get timestamp and convert to Indian date/time
    var timestamp = jsonData.timestamp || new Date().toISOString();
    var indianDateTime = formatIndianDateTime(timestamp);
    
    // Prepare the row data in the order: Timestamp, Name, Phone, Email, City, Business Type
    var rowData = [
      indianDateTime,
      jsonData.name || '',
      jsonData.phone || '',
      jsonData.email || '',
      jsonData.city || '',
      jsonData.businessType || ''
    ];
    
    // Insert the row at position 2 (right after headers, which pushes existing rows down)
    sheet.insertRowBefore(2);
    sheet.getRange(2, 1, 1, rowData.length).setValues([rowData]);
    
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
  Logger.log('Check row 2 in your sheet - the new entry should appear at the top!');
}

