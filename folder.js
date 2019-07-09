exports.listAllFolders = function listAllFolders()
{
    var listAllFolders;
    var request = require('request');

    return new Promise(function(resolve, reject) {
        var form = {
            Folders: ''
        }
        
        request.get('https://sandbox.datamotion.com/SecureMessagingApi/Folder/List', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'GET',
            async: 'true',
            json: form
},  function(err, response, body) {
    if (err)
    {
        //console.error(err);
        reject(err);
    }
    else{
        //console.info(response.body);
        listAllFolders = response.body;
        resolve(listAllFolders);
    }
}
        );
    });
}

exports.createNewFolder = function createNewFolder(FolderName, FolderType)
{
    var createNewFolder;
    var request = require('request');

    return new Promise(function(resolve, reject) {
        var form = {
            FolderName: FolderName,
            FolderType: FolderType
        }

        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Folder/', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true',
            json: form
    },  function(err, response, body) {
        if (err)
        {
            //console.error(err);
            reject(err);
        }
        else 
        {
            //console.info(response.body);
            createNewFolder = response.body;
            resolve(createNewFolder);
        }
    }
        );
    });
}

exports.deleteFolder = function deleteFolder(FID)
{
    var deleteFolder;
    var request = require('request');

    return new Promise(function(resolve, reject) {
        request.delete('https://sandbox.datamotion.com/SecureMessagingApi/Folder/' + FID, {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'Delete',
            async: 'true'
    },  function(err, response, body)
    {
        if (err)
        {
            //console.error(err);
            reject(err);
        }
        else
        {
            //console.info(response.body);
            deleteFolder = response.body;
            resolve(deleteFolder);
        }
    }
        );
    })
}