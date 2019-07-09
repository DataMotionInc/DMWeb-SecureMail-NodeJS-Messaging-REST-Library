exports.getInboxMessageIds = function getInboxMessageIds(FolderId, MessageListFilter, MustHaveAttachments)
{
    var getInboxMessageIds;
    var request = require('request');

    return new Promise(function(resolve, reject) {
        var form = {
            FolderId: FolderId,
            MessageListFilter: MessageListFilter,
            MustHaveAttachments: MustHaveAttachments
        }
        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/GetInboxMessageIds', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true',
            json: form
}, function (err, response, body) {
    if (err)
    {
        //console.error(err);
        reject(err);
    }
    else
    {
        //console.info(response.body);
        getInboxMessageIds = response.body;
        resolve(getInboxMessageIds);
    }
}
        );
});
}

exports.getMessageSummaries = function getMessageSummaries(FolderId, LastMessageIDReceived)
{
    var getMessageSummaries;
    var request = require('request');

    return new Promise(function(resolve,reject) {
        var form = {
            FolderId: FolderId,
            LastMessageIDReceived: LastMessageIDReceived
        }

        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/GetMessageSummaries', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true',
            json: form
    }, function (err, response, body) {
        if (err)
        {
            //console.error(err);
            reject(err);
        }
        else
        {
            //console.info(response.body);
            getMessageSummaries = response.body;
            resolve(getMessageSummaries);
        }
    }
        );
    });
}

exports.getUnreadMessages = function getUnreadMessages()
{
    var getUnreadMessages;
    var request = require('request');

    return new Promise(function(resolve, reject) {
    

    request.get('https://sandbox.datamotion.com/SecureMessagingApi/Message/Inbox/Unread', {
        headers: {
            'Content-Type': 'application/json',
            'X-Session-Key': sessionkey.SessionKey
        },
        method: 'POST',
        async: 'true'
       },   function(err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                getUnreadMessages = response.body;
                resolve(getUnreadMessages);
            }
        }
    );
    });
}

exports.searchInbox = function searchInbox(Filter, FolderId, GetInboxUnreadOnly, GetRetractedMsgs, OrderBy, OrderDesc, PageNum, PageSize)
{
    var searchInbox;
    var request = require('request');

    return new Promise(function(resolve, reject) {
        var form = {
            Filter: Filter,
            FolderId: FolderId, 
            GetInboxUnreadOnly: GetInboxUnreadOnly,
            GetRetractedMsgs: GetRetractedMsgs,
            OrderBy: OrderBy,
            OrderDesc: OrderDesc,
            PageNum: PageNum,
            PageSize: PageSize
        }

        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/Inbox/Search', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true',
            json: form 
    }, function (err, response, body) {
        if (err)
        {
            //console.error(err);
            reject(err);
        }
        else
        {
            //console.info(response.body);
            searchInbox = response.body;
            resolve(searchInbox);
        }
}
    );
});
}

exports.getMessageMetadata = function getMessageMetadata(MID)
{
    var getMessageMetadata;
    var request = require('request');
 
    return new Promise(function(resolve,reject) {
        request.get('https://sandbox.datamotion.com/SecureMessagingApi/Message/' + MID + '/Metadata', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true'
        }, function (err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                getMessageMetadata = response.body;
                resolve(getMessageMetadata);
            }
    }
    );
});
}

exports.getMessage = function getMessage(MID)
{
    var getMessage;
    var request = require('request');

    return new Promise(function(resolve, reject) {

        request.get('https://sandbox.datamotion.com/SecureMessagingApi/Message/' + MID, {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'GET',
            async: 'true'
    },  function(err, response, body) {
        if (err)
        {
            //console.error(err);
            reject(err);
        }
        else
        {
            //console.info(response.body);
            getMessage = response.body;
            resolve(getMessage);
        }
    }
        );
});
}

exports.getMimeMessage = function getMimeMessage(MID)
{
    var getMimeMessage;
    var request = require('request');

    return new Promise(function(resolve, reject) {

        request.get('https://sandbox.datamotion.com/SecureMessagingApi/Message/' + MID + '/Mime', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'GET',
            async: 'true'
        }, function (err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                getMimeMessage = response.body;
                resolve(getMimeMessage);
            }
        }
        );
});
}

exports.sendMessage = function sendMessage(To, From, Cc, Bcc, Subject, CreateTime, Attachments, HtmlBody, TextBody)
{
    var sendMessage;
    var request = require('request');

    return new Promise(function(resolve,reject) {
        var form = {
            To: To,
            From: From,
            Cc: Cc,
            Bcc: Bcc,
            Subject: Subject,
            CreateTime: CreateTime,
            Attachments: Attachments,
            HtmlBody: HtmlBody,
            TextBody: TextBody
        }
        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key' : sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true',
            json: form
        },  function (err,response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                sendMessage = response.body;
                resolve(sendMessage);
            }
        }
        );
    });
}

exports.sendMimeMessage = function sendMimeMessage(MimeMessage)
{
    var sendMimeMessage;
    var request = require('request');

    return new Promise(function(resolve,reject) {
        var form = {
            MimeMessage: MimeMessage
        }

        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/Mime', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true',
            json: form
        }, function (err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else 
            {
                //console.info(response.body);
                sendMimeMessage = response.body;
                resolve(sendMimeMessage);
            }
        }
        );
    });
}

exports.moveMessage = function moveMessage(DestinationFolderId, MID)
{
    var moveMessage;
    var request = require('request');

    return new Promise(function(resolve,reject) {
        var form = {
            DestinationFolderId: DestinationFolderId
        }

        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/' + MID + '/Move', {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method:'POST',
            async: 'true',
            json: form
        }, function (err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                moveMessage = response.body;
                resolve(moveMessage);
            }
        }
        );
    });
}

exports.deleteMessage = function deleteMessage(MID)
{
    var deleteMessage;
    var request = require('request');
5
    return new Promise(function(resolve,reject) {
        
        request.delete('https://sandbox.datamotion.com/SecureMessagingApi/Message/' + MID, {
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'DELETE',
            async: 'true'
        }, function (err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                deleteMessage = response.body;
                resolve(deleteMessage);
            }
        }
        );
    });
}

exports.retractMessage = function retractMessage(MID)
{
    var retractMessage;
    var request = require('request');

    return new Promise(function(resolve,reject) {

        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Message/' + MID + '/Retract', {
            headers: {
                'Content-Type' : 'application/json',
                'X-Session-Key': sessionkey.SessionKey
            },
            method: 'POST',
            async: 'true'
        }, function (err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else
            {
                //console.info(response.body);
                retractMessage = response.body;
                resolve(retractMessage);
            }
        }
        );
    });
    }