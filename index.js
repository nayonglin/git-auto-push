const exec = require('child_process').exec;

try {

    // 提交之前拉取最新代码
    exec('git pull origin ', {
        encoding: 'utf8'
    }, function (error, stdout, stderr) {

        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log('pull结果：' + stdout);
        // 查看工作树修改
        exec('git status', {
            encoding: 'utf8'
        }, function (error, stdout, stderr) {

            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            console.log('你现在所在分支：' + stdout);
            // 添加修改
            exec('git add *', {
                encoding: 'utf8'
            }, function (error, stdout, stderr) {

                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }

                console.log('添加结果' + stdout);
                // 提交修改
                exec('git commit -m "提交"', {
                    encoding: 'utf8'
                }, function (error, stdout, stderr) {

                    if (error) {
                        console.error(`exec error: ${error}`);
                        return;
                    }

                    console.log('提交结果' + stdout);
                    // 提交修改
                    exec('git push', {
                        encoding: 'utf8'
                    }, function (error, stdout, stderr) {

                        if (error) {
                            console.error(`exec error: ${error}`);
                            return;
                        }

                        console.log('push结果' + stdout);
                    });
                });
            });

        });
    });








} catch (err) {
    console.log('execute error：');
    console.log(err.toString());
}