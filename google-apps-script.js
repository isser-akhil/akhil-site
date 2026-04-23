// ============================================================
// Google Apps Script — Contact Form Handler
// ============================================================
//
// SETUP INSTRUCTIONS:
//
// 1. Go to https://script.google.com and create a new project
// 2. Paste this entire file into Code.gs
// 3. Update SHEET_ID and NOTIFY_EMAIL below
// 4. Click Deploy → New Deployment
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the deployment URL
// 6. Add it to your .env.local:
//    NEXT_PUBLIC_CONTACT_FORM_URL=https://script.google.com/macros/s/YOUR_ID/exec
//
// ============================================================

// Replace with your Google Sheet ID (from the sheet URL)
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";

// Your email address for notifications
const NOTIFY_EMAIL = "isser.akhil@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, email, message } = data;

    // Write to Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
    }

    sheet.appendRow([
      new Date().toISOString(),
      name || "",
      email || "",
      message || "",
    ]);

    // Send email notification
    const subject = "New message from " + (name || "someone") + " via akhilsharma.dev";
    const body = [
      "You got a new contact form submission:\n",
      "Name: " + (name || "Not provided"),
      "Email: " + (email || "Not provided"),
      "Message:\n" + (message || "No message"),
      "\n---",
      "Sent from your website contact form",
    ].join("\n");

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "Contact form endpoint is live." })
  ).setMimeType(ContentService.MimeType.JSON);
}
