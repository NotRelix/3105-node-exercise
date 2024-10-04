# 3105-node-exercise
Backend exercise using express for my application development class

[Project Specifications](https://docs.google.com/document/d/14-kD0DeknFrAYVHfabAXzU1MoEpgBrWA_JPN4oLMULU/edit)

## Setup
```bash
git clone git@github.com:NotRelix/3105-node-exercise.git
cd 3105-node-exercise
npm install
node app.js
```

## Testing
Use the endpoints in Postman shown below:

## Register (POST)
> `http://localhost:3000/api/register`

After entering your details

```json
{
    "username": "reece",
    "password": "password",
    "email": "reece@gmail.com"
}
```

![image](https://github.com/user-attachments/assets/92b24b52-a008-41f6-81a6-560cbbe44c04)

## Login (POST)
> `http://localhost:3000/api/login`

Once registered you can login and receive a token.

![image](https://github.com/user-attachments/assets/16131792-62da-4d2d-b352-f9715f5af81f)

## Profile (GET)
> `http://localhost:3000/api/profile`

You can use that token for authorization by pasting it in `Authorization`. Make sure `Auth Type` is set to `Bearer Token`. If the token is authorized, your personal information will be displayed.

![image](https://github.com/user-attachments/assets/dafd9291-1973-4baf-8e17-db590cbdb18d)
