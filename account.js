exports.getSessionKey = function getSessionKey(UserIdOrEmail, Password) 
{
    var request = require('request');
     
    return new Promise(function(resolve, reject) {
        var form = {
            UserIdOrEmail: UserIdOrEmail,
            Password: Password
        }
        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Account/Logon', {
         
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            async: 'true',
            json: form
        }, function(err, response, body) {
            if (err)
            {
                //console.error(err);
                reject(err);
            }
            else {
                //console.info(response.body);
                sessionkey = response.body;
                resolve(sessionkey);
            }
        }
        );
    });
}   

exports.getYourAccountDetails = function getYourAccountDetails()
{
    var accountdetails;
    var request = require('request');

    return new Promise(function(resolve, reject) {
    var form = {
        EmailAddress: '',
        FirstName:'',
        LastName:'',
        Statistics:''
    }
 
    request.get('https://sandbox.datamotion.com/SecureMessagingApi/Account/Details', {
        headers: {
            'Content-Type': 'application/json',
            'X-Session-Key': sessionkey.SessionKey
        },
        method: 'GET',
        async: 'true',
        json: form
     }, function(err, response, body) {
        if (err)
        {
            //console.error(err);
            reject (err);
        }
        else
        {
            //console.info(response.body);
            accountdetails = response.body;
            resolve(accountdetails);   
    }
    }
);
});
}

exports.changeYourPassword = function changeYourPassword(OldPassword, NewPassword)
{
    var changePassword;
    var request = require('request');

    return new Promise(function(resolve, reject)
    {
        var form = 
        {
            OldPassword: OldPassword,
            NewPassword: NewPassword
        }
        
        request.post('https://sandbox.datamotion.com/SecureMessagingApi/Account/ChangePassword', {
        headers: {
            'Content-Type': 'application/json',
            'X-Session-Key': sessionkey.SessionKey
        },
        method: 'POST',
        async: 'true',
        json: form
    }, function(err, response, body)
    {
        if (err)
        {
            //console.error(err);
            reject(err);
        }
        else
        {
            //console.info(response.body);
            changePassword = response.body;
            resolve(changePassword);
        }
    }
);
})
}

exports.logout = function logout()
{
    var logout;
    var request = require('request');

    return new Promise(function(resolve, reject) {
     request.post('https://sandbox.datamotion.com/SecureMessagingApi/Account/Logout', {
         headers: {
             'Content-Type': 'application/json',
             'X-Session-Key': sessionkey.SessionKey
         },
         method: 'POST',
         async: 'true'
     }, function(err, response, body)
     {
         if(err)
         {
             //console.error(err);
             reject(err);
         }
         else
         {
            //console.info(response.body);
            logout = response.body;
            resolve(logout);
         }
     }   
    );
    })
}