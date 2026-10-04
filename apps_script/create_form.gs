/**
 * Creates the "Ahlul Khair Foundation — Online Class Registration" Google Form
 * in YOUR Google Drive, with a linked Google Sheet for responses.
 *
 * Programs taught (from the foundation flyer):
 *   Arabic Literacy · Learning Qur'an Recitation (with good tajweed)
 *   Quranic Memorization · Fiqihu (Islamic Jurisprudence)
 * Part-time & full-time, for adults and children.
 *
 * HOW TO RUN
 * 1. Go to https://script.google.com -> New project.
 * 2. Delete the placeholder code and paste this whole file in.
 * 3. Click "Run" (the play button) on the createAhlulKhairForm function.
 * 4. Authorize it against your own Google account when prompted.
 * 5. Open Executions / Logs to get the form's edit link, the public share
 *    link to send to people, and the responses spreadsheet link.
 */
function createAhlulKhairForm() {
  var form = FormApp.create("Ahlul Khair Foundation — Online Class Registration");
  form.setDescription(
    "ONLINE PART-TIME & FULLTIME PROGRAMS\n\n" +
    "Teaching on: Arabic Literacy · Learning Qur'an Recitation (with good tajweed) · " +
    "Quranic Memorization · Fiqihu (Islamic Jurisprudence).\n\n" +
    "We provide special classes for adults and children to learn on their paces.\n" +
    "Connect Muslim with Quran Every Where You Go.\n\n" +
    "Phone / WhatsApp: +234702633370
" +
    "Email: ahlulkhairfoundation@gmail.com"
  );
  form.setCollectEmail(true);
  form.setConfirmationMessage(
    "Jazakumullahu khayran! Your registration has been received. " +
    "A coordinator from Ahlul Khair Foundation will contact you to confirm your class schedule."
  );

  // ---------------- Section 1: Student Information ----------------
  form.addSectionHeaderItem()
    .setTitle("Student Information")
    .setHelpText("Classes are open to both adults and children.");

  form.addTextItem()
    .setTitle("Full name of student")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Student is a")
    .setChoiceValues(["Child", "Adult"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Age")
    .setRequired(true)
    .setValidation(
      FormApp.createTextValidation()
        .setHelpText("Enter a whole number between 3 and 99.")
        .requireNumberBetween(3, 99)
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
      "English", "Arabic", "Hausa", "Yoruba",
      "Urdu / Hindi", "French", "Somali", "Turkish", "Other"
    ])
    .setRequired(true);

  // ---------------- Section 2: Programs ----------------
  form.addPageBreakItem()
    .setTitle("Programs")
    .setHelpText("Choose one or more of the programs we teach.");

  form.addCheckboxItem()
    .setTitle("Program(s) you want to join")
    .setChoiceValues([
      "Arabic Literacy",
      "Learning Qur'an Recitation (with good tajweed)",
      "Quranic Memorization",
      "Fiqihu (Islamic Jurisprudence)"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Program type")
    .setChoiceValues(["Part-time", "Full-time"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Current level")
    .setChoiceValues([
      "Complete beginner (no Arabic letters yet)",
      "Can read Arabic letters (Qaida level)",
      "Can read Qur'an, needs tajweed",
      "Reads Qur'an with good tajweed",
      "Already memorizing (Hifz) — continuing"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Learning difficulties, health notes or special needs (optional)");

  // ---------------- Section 3: Contact Person ----------------
  form.addPageBreakItem()
    .setTitle("Contact Person")
    .setHelpText("For a child, this is the parent or guardian. For an adult student, enter your own details.");

  form.addTextItem()
    .setTitle("Full name")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Relationship to student")
    .setChoiceValues(["Self (adult student)", "Mother", "Father", "Guardian", "Other"])
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

  // ---------------- Section 4: Class Schedule ----------------
  form.addPageBreakItem()
    .setTitle("Class Schedule")
    .setHelpText("Times are in the student's own local time zone.");

  form.addCheckboxItem()
    .setTitle("Preferred days")
    .setChoiceValues(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Preferred time of day")
    .setChoiceValues([
      "Morning (6am–12pm)", "Afternoon (12pm–4pm)",
      "Evening (4pm–8pm)", "Night (8pm–11pm)"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Hours per week")
    .setChoiceValues(["1 hour", "2 hours", "3 hours", "4–6 hours", "7+ hours (full-time)"])
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
    .setTitle("Class platform")
    .setChoiceValues(["No preference", "WhatsApp Video", "Zoom", "Google Meet", "Microsoft Teams", "Other"]);

  // ---------------- Section 5: Final Details ----------------
  form.addPageBreakItem().setTitle("Final Details");

  form.addMultipleChoiceItem()
    .setTitle("How did you hear about us?")
    .setChoiceValues(["Friend / family", "Social media", "Mosque / community", "Flyer", "Other"]);

  form.addParagraphTextItem()
    .setTitle("Any question or note (optional)");

  form.addCheckboxItem()
    .setTitle("Confirmation")
    .setChoiceValues([
      "I confirm the information above is correct and I want to join the " +
      "Ahlul Khair Foundation online classes."
    ])
    .setRequired(true);

  // ---------------- Linked response spreadsheet ----------------
  var sheet = SpreadsheetApp.create("Ahlul Khair Foundation — Registrations");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log("Edit this form:        " + form.getEditUrl());
  Logger.log("Share this link:       " + form.getPublishedUrl());
  Logger.log("Responses spreadsheet: " + sheet.getUrl());
}
