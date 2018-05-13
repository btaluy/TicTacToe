
var path = require("path");
var fs = require("fs");

module.exports = function($logger, $projectData, hookArgs) {

    return new Promise(function(resolve, reject) {
        if (hookArgs.platform.toLowerCase() === 'android') {
            var sourceGoogleJson = path.join($projectData.appResourcesDirectoryPath, "Android", "google-services.json");
            var destinationGoogleJson = path.join($projectData.platformsDir, "android", "app", "google-services.json");
            if (fs.existsSync(sourceGoogleJson) && fs.existsSync(path.dirname(destinationGoogleJson))) {
                $logger.out("Copy " + sourceGoogleJson + " to " + destinationGoogleJson + ".");
                fs.writeFileSync(destinationGoogleJson, fs.readFileSync(sourceGoogleJson));
                resolve()
            } else {
                $logger.warn("Unable to copy google-services.json.");
                reject();
            }
        } else {
            resolve()
        }
    });
};
