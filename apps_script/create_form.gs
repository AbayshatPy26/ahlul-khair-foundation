/**
 * Creates the "Noor Qur'an Academy — Student Registration" Google Form
 * in YOUR Google Drive, with a linked Google Sheet for responses.
 *
 * HOW TO RUN
 * 1. Go to https://script.google.com -> New project.
 * 2. Delete the placeholder code and paste this whole file in.
 * 3. Click "Run" (the play button) on the createNoorAcademyForm function.
 * 4. The first run asks you to authorize the script against your own
 *    Google account — click through "Advanced" -> "Go to project (unsafe)"
 *    if prompted (this warning appears for any script you haven't
 *    published, including your own).
 * 5. Open View -> Logs (or Executions) to get the form's edit link,
 *    share link, and the linked responses spreadsheet link.
 */
function createNoorAcademyForm() {
  var form = FormApp.create("Noor Qur'an Academy — Student Registration");
  form.setDescription(
    "Register your child for virtual Qur'an and Islamic studies lessons. " +
    "A coordinator will contact you to confirm the schedule after you submit."
  );
  form.setCollectEmail(true);
  form.setConfirmationMessage(
    "Jazakumullahu khayran! Your registration has been received. " +
    "We will contact you shortly to confirm the class schedule."
  );

  // ---------------- Section 1: Child (Student) Information ----------------
  form.addSectionHeaderItem()
    .setTitle("Child (Student) Information")
    .setHelpText("Tell us about the child who will be attending classes.");

  form.addTextItem()
    .setTitle("Child's full name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Age")
    .setRequired(true)
    .setValidation(
      FormApp.createTextValidation()
        .setHelpText("Enter a whole number between 3 and 18.")
        .requireNumberBetween(3, 18)
        .build()
    );

  form.addMultipleChoiceItem()
    .setTitle("Gender")
    .setChoiceValues(["Female", "Male"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Country of residence")
    .setRequired(true);

  form.addTextItem()
    .setTitle("City & time zone (e.g. Manchester, GMT+1)")
    .setRequired(true);

  form.addListItem()
    .setTitle("Preferred teaching language")
    .setChoiceValues([
      "English", "Arabic", "Urdu / Hindi", "French",
      "Somali", "Turkish", "Malay / Indonesian", "Other"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Current Qur'an / Islamic studies level")
    .setChoiceValues([
      "Complete beginner (no Arabic letters yet)",
      "Learning Qaida (alphabet & basic reading)",
      "Can read Qur'an, needs Tajweed",
      "Reading with Tajweed, wants to start Hifz",
      "Currently memorising (Hifz) — continuing"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Learning difficulties, health notes, or special needs (optional)");

  // ---------------- Section 2: Parent / Guardian Information ----------------
  form.addPageBreakItem().setTitle("Parent / Guardian Information");

  form.addTextItem()
    .setTitle("Parent / guardian full name")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Relationship to child")
    .setChoiceValues(["Mother", "Father", "Guardian", "Other"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Email address")
    .setRequired(true)
    .setValidation(
      FormApp.createTextValidation()
        .setHelpText("Enter a valid email address.")
        .requireTextIsEmail()
        .build()
    );

  form.addTextItem()
    .setTitle("WhatsApp / phone number (with country code)")
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Preferred contact method")
    .setChoiceValues(["WhatsApp", "Email", "Phone call", "SMS"])
    .setRequired(true);

  // ---------------- Section 3: Schedule Preferences ----------------
  form.addPageBreakItem().setTitle("Schedule Preferences");

  form.addCheckboxItem()
    .setTitle("Preferred days")
    .setChoiceValues(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Preferred time of day (child's own local time)")
    .setChoiceValues([
      "Morning (6am–12pm)", "Afternoon (12pm–4pm)",
      "Evening (4pm–8pm)", "Night (8pm–11pm)"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Hours per week")
    .setChoiceValues(["1 hour", "2 hours", "3 hours", "4+ hours"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Class type")
    .setChoiceValues(["One-on-one (private)", "Small group (2–4 students)", "No preference"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Teacher gender preference")
    .setChoiceValues(["Female teacher", "Male teacher", "No preference"])
    .setRequired(true);

  form.addListItem()
    .setTitle("Virtual class platform")
    .setChoiceValues(["No preference", "Zoom", "Google Meet", "WhatsApp Video", "Microsoft Teams", "Other"]);

  // ---------------- Section 4: Final Details ----------------
  form.addPageBreakItem().setTitle("Final Details");

  form.addMultipleChoiceItem()
    .setTitle("How did you hear about us?")
    .setChoiceValues(["Friend / family", "Social media", "Mosque / community", "Other"]);

  form.addTextItem()
    .setTitle("Emergency contact name & number (optional)");

  form.addParagraphTextItem()
    .setTitle("Anything else you'd like us to know? (optional)");

  form.addCheckboxItem()
    .setTitle("Consent")
    .setChoiceValues([
      "I confirm the information above is accurate and I give permission " +
      "for my child to attend virtual Qur'an lessons."
    ])
    .setRequired(true);

  // ---------------- Linked response spreadsheet ----------------
  var sheet = SpreadsheetApp.create("Noor Qur'an Academy — Responses");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log("Edit this form:      " + form.getEditUrl());
  Logger.log("Share this link:     " + form.getPublishedUrl());
  Logger.log("Responses spreadsheet: " + sheet.getUrl());
}
