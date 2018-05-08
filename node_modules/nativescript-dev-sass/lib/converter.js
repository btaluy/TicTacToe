exports.convert = convert;
exports.getSassProcess = getSassProcess;

var spawn = require('child_process').spawn;
var fs = require('fs');
var path = require('path');
var currentSassProcess = null;

function convert(logger, projectDir, appDir, options) {
    return new Promise(function (resolve, reject) {
        options = options || {};
        var sassPath = require.resolve('node-sass/bin/node-sass');
        var importerPath = path.join(__dirname, "importer.js");

        if (fs.existsSync(sassPath)) {
            try {
                logger.info('Found peer node-sass');
            } catch (err) { }
        } else {
            throw Error('node-sass installation local to project was not found. Install by executing `npm install node-sass`.');
        }

        // Node SASS Command Line Args (https://github.com/sass/node-sass#command-line-interface)
        // --ouput : Output directory
        // --output-style : CSS output style (nested | expanded | compact | compresed)
        // -q : Supress log output except on error
        // --follow : Follow symlinked directories
        // -r : Recursively watch directories or files
        // --watch : Watch a directory or file
        var nodeArgs = [sassPath, appDir, '--output', appDir, '--output-style', 'compressed', '-q', '--follow', '--importer', importerPath];
        if (options.watch) {
            nodeArgs.push('-r', '--watch');
        }

        logger.trace(process.execPath, nodeArgs.join(' '));
        var env = Object.create( process.env );
        env.PROJECT_DIR = projectDir;
        env.APP_DIR = appDir;
        currentSassProcess = spawn(process.execPath, nodeArgs, { env: env });

        var isResolved = false;
        var watchResolveTimeout;
        currentSassProcess.stdout.on('data', function (data) {
            var stringData = data.toString();
            logger.info(stringData);
        });

        currentSassProcess.stderr.on('data', function (err) {
            var message = '';
            var stringData = err.toString();

            try {
                var parsed = JSON.parse(stringData);
                message = parsed.formatted || parsed.message || stringData;
            } catch (e) {
                renderMsg = true;
                message = err.toString();
            }

            logger.info(message);
        });

        currentSassProcess.on('error', function (err) {
            logger.info(err.message);
            if (!isResolved) {
                isResolved = true;
                reject(err);
            }
        });

        // TODO: Consider using close event instead of exit
        currentSassProcess.on('exit', function (code, signal) {
            currentSassProcess = null;
            if (!isResolved) {
                isResolved = true;
                if (code === 0) {
                    resolve();
                } else {
                    reject(Error('SASS compiler failed with exit code ' + code));
                }
            }
        });

        // SASS does not recompile on watch, so directly resolve.
        if (options.watch && !isResolved) {
            isResolved = true;
            resolve();
        }
    });
}

function getSassProcess() {
    return currentSassProcess;
}
