function doGet() {
    const response = UrlFetchApp.fetch("https://example.com/");
    const body = response.getContentText();

	var output = AppLib.getData(body);

	return ContentService.createTextOutput(JSON.stringify(output));
}